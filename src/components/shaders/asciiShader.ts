import { Texture, Vector3, Vector2, Color } from 'three';
import strings from '@data/strings';

export interface AsciiShaderUniforms {
	tDiffuse: { value: Texture | null };
	intensity: { value: number };
	colorA: { value: Vector3 };
	colorB: { value: Vector3 };
	resolution: { value: Vector2 };
	blockSize: { value: number };
	useFullCharacterSet: { value: boolean };
	blackWhiteMode: { value: boolean };
}

export const createAsciiShaderUniforms = () => ({
	tDiffuse: { value: null },
	intensity: { value: 1.0 },
	colorA: { value: new Color(strings.colors.yorhaDark) },
	colorB: { value: new Color(strings.colors.yorha) },
	resolution: {
		value: new Vector2(window.innerWidth, window.innerHeight),
	},
	blockSize: { value: 8.0 },
	useFullCharacterSet: { value: false },
	blackWhiteMode: { value: true },
});

export const asciiVertexShader = `
	varying vec2 vUv;
	
	void main() {
		vUv = uv;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`;

export const asciiFragmentShader = `
	uniform sampler2D tDiffuse;
	uniform float intensity;
	uniform vec3 colorA;
	uniform vec3 colorB;
	uniform vec2 resolution;
	uniform float blockSize;
	uniform bool useFullCharacterSet;
	uniform bool blackWhiteMode;
	
	varying vec2 vUv;
	
	float character(int n, vec2 p) {
		p = floor(p * vec2(-4.0, 4.0) + 2.5);
		if (clamp(p.x, 0.0, 4.0) == p.x) {
			if (clamp(p.y, 0.0, 4.0) == p.y) {
				int a = int(round(p.x) + 5.0 * round(p.y));
				if (((n >> a) & 1) == 1) return 1.0;
			}
		}
		return 0.0;
	}
	
	int getCharacterForGray(float gray) {
		if (useFullCharacterSet) {
			// Full character set including A-Z and 0-9
			if (gray > 0.9767) return 11512810; // #
			if (gray > 0.9535) return 33061407;
			if (gray > 0.9302) return 33061316;
			if (gray > 0.9070) return 32045630;
			if (gray > 0.8837) return 32045617;
			if (gray > 0.8605) return 32032318;
			if (gray > 0.8372) return 15255537;
			if (gray > 0.8140) return 15022414;
			if (gray > 0.7907) return 32575775;
			if (gray > 0.7674) return 16267326;
			if (gray > 0.7442) return 18667121;
			if (gray > 0.7209) return 18732593;
			if (gray > 0.6977) return 32540207;
			if (gray > 0.6744) return 32641183;
			if (gray > 0.6512) return 18415153;
			if (gray > 0.6279) return 16272942;
			if (gray > 0.6047) return 15018318;
			if (gray > 0.5814) return 15022158;
			if (gray > 0.5581) return 18405034;
			if (gray > 0.5349) return 32045584;
			if (gray > 0.5116) return 15255086; // o
			if (gray > 0.4884) return 33061392;
			if (gray > 0.4651) return 18400814;
			if (gray > 0.4419) return 18444881;
			if (gray > 0.4186) return 16269839;
			if (gray > 0.3953) return 6566222;
			if (gray > 0.3721) return 13177118;
			if (gray > 0.3488) return 14954572;
			if (gray > 0.3256) return 17463428;
			if (gray > 0.3023) return 18157905;
			if (gray > 0.2791) return 18393412;
			if (gray > 0.2558) return 32641156;
			if (gray > 0.2326) return 17318431;
			if (gray > 0.2093) return 15239300;
			if (gray > 0.1860) return 18393220;
			if (gray > 0.1628) return 14749828;
			if (gray > 0.1395) return 12652620;
			if (gray > 0.1163) return 4591748;
			if (gray > 0.0930) return 459200;
			if (gray > 0.0698) return 4329476;
			if (gray > 0.0465) return 131200;
			if (gray > 0.0233) return 4096;
			return 4096;
		} else {
			// Limited character set (simpler)
			if (gray > 0.8) return 11512810; // #
			if (gray > 0.7) return 13195790; // @
			if (gray > 0.6) return 15252014; // 8
			if (gray > 0.5) return 13121101; // &
			if (gray > 0.4) return 15255086; // o
			if (gray > 0.3) return 163153;   // *
			if (gray > 0.2) return 65600;    // :
			return 4096; // space
		}
	}
	
	void main() {
		vec2 pix = gl_FragCoord.xy;
		
		// Sample the texture at block resolution for pixelated effect
		vec3 col = texture2D(tDiffuse, floor(pix / blockSize) * blockSize / resolution).rgb;
		
		// Convert to grayscale using luminance formula
		float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
		
		// For very dark areas, don't render any characters at all
		if (gray <= 0.2) {
			// Use the background color for perfect darkness
			gl_FragColor = vec4(colorA, 1.0);
			return;
		}
		
		// Get the character for this gray level
		int n = getCharacterForGray(gray);
		
		// Calculate position within the character block
		vec2 p = mod(pix / 4.0, 2.0) - vec2(1.0);
		
		// Get the character pixel value
		float charPixel = character(n, p);
		
		vec3 finalColor;
		
		if (blackWhiteMode) {
			// Two-tone mode: use colorA and colorB
			finalColor = mix(colorA, colorB, charPixel);
		} else {
			// Multiply mode: modulate original color with character
			finalColor = col * charPixel;
		}
		
		// Apply intensity to control how much of the effect vs original image
		vec4 originalColor = texture2D(tDiffuse, vUv);
		vec3 blendedColor = mix(originalColor.rgb, finalColor, intensity);
		
		gl_FragColor = vec4(blendedColor, originalColor.a);
	}
`;

export const asciiShader = {
	uniforms: createAsciiShaderUniforms(),
	vertexShader: asciiVertexShader,
	fragmentShader: asciiFragmentShader,
};