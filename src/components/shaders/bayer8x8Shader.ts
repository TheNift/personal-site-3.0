import * as THREE from 'three';
import strings from '@data/strings';

export interface Bayer8x8ShaderUniforms {
	tDiffuse: { value: THREE.Texture | null };
	intensity: { value: number };
	colorA: { value: THREE.Vector3 };
	colorB: { value: THREE.Vector3 };
	maskColor: { value: THREE.Vector3 };
	resolution: { value: THREE.Vector2 };
}

export const createBayer8x8ShaderUniforms = () => ({
	tDiffuse: { value: null },
	intensity: { value: 1.0 },
	colorA: { value: new THREE.Color(strings.colors.yorha) },
	colorB: { value: new THREE.Color(strings.colors.yorhaDark) },
	maskColor: { value: new THREE.Color(strings.colors.siteBg) },
	resolution: {
		value: new THREE.Vector2(window.innerWidth, window.innerHeight),
	},
});

export const bayer8x8VertexShader = `
	varying vec2 vUv;
	
	void main() {
		vUv = uv;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`;

export const bayer8x8FragmentShader = `
	uniform sampler2D tDiffuse;
	uniform float intensity;
	uniform vec3 colorA;
	uniform vec3 colorB;
	uniform vec3 maskColor;
	uniform vec2 resolution;
	
	varying vec2 vUv;
	
	// 8x8 Bayer matrix
	float getBayerValue(vec2 coord) {
		int x = int(mod(coord.x, 8.0));
		int y = int(mod(coord.y, 8.0));
		
		float bayerMatrix[64] = float[](
			 0.0/64.0, 32.0/64.0,  8.0/64.0, 40.0/64.0,  2.0/64.0, 34.0/64.0, 10.0/64.0, 42.0/64.0,
			48.0/64.0, 16.0/64.0, 56.0/64.0, 24.0/64.0, 50.0/64.0, 18.0/64.0, 58.0/64.0, 26.0/64.0,
			12.0/64.0, 44.0/64.0,  4.0/64.0, 36.0/64.0, 14.0/64.0, 46.0/64.0,  6.0/64.0, 38.0/64.0,
			60.0/64.0, 28.0/64.0, 52.0/64.0, 20.0/64.0, 62.0/64.0, 30.0/64.0, 54.0/64.0, 22.0/64.0,
			 3.0/64.0, 35.0/64.0, 11.0/64.0, 43.0/64.0,  1.0/64.0, 33.0/64.0,  9.0/64.0, 41.0/64.0,
			51.0/64.0, 19.0/64.0, 59.0/64.0, 27.0/64.0, 49.0/64.0, 17.0/64.0, 57.0/64.0, 25.0/64.0,
			15.0/64.0, 47.0/64.0,  7.0/64.0, 39.0/64.0, 13.0/64.0, 45.0/64.0,  5.0/64.0, 37.0/64.0,
			63.0/64.0, 31.0/64.0, 55.0/64.0, 23.0/64.0, 61.0/64.0, 29.0/64.0, 53.0/64.0, 21.0/64.0
		);
		
		return bayerMatrix[y * 8 + x];
	}
	
	void main() {
		vec4 texel = texture2D(tDiffuse, vUv);
		
		// Check if the color is close to the mask color (with tolerance for floating point precision)
		vec3 colorDiff = abs(texel.rgb - maskColor);
		float tolerance = 0.00001; // Adjust this value if needed
		bool isMaskColor = all(lessThan(colorDiff, vec3(tolerance)));
		
		// If mask color, output transparent
		if (isMaskColor) {
			gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
			return;
		}
		
		// Convert to grayscale using luminance formula
		float luminance = dot(texel.rgb, vec3(0.299, 0.587, 0.114));
		
		// Get screen coordinates for Bayer matrix lookup
		vec2 screenCoord = vUv * resolution;
		
		// Get Bayer threshold value (0.0 to 1.0)
		float threshold = getBayerValue(screenCoord);
		
		// True two-tone dithering: compare luminance against threshold
		// If luminance > threshold, use light color
		// If luminance <= threshold, use dark color
		float dithered = step(threshold, luminance);
		
		// Only output two colors - no interpolation, no original color bleed
		vec3 ditherColor = mix(colorB, colorA, dithered);
		
		// Apply intensity to control how much of the dither effect vs original image
		vec3 finalColor = mix(texel.rgb, ditherColor, intensity);
		
		gl_FragColor = vec4(finalColor, texel.a);
	}
`;

export const bayer8x8Shader = {
	uniforms: createBayer8x8ShaderUniforms(),
	vertexShader: bayer8x8VertexShader,
	fragmentShader: bayer8x8FragmentShader,
};
