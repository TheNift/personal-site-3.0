import { useRef, useEffect } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import {
	EffectComposer,
	RenderPass,
	ShaderPass,
} from 'three/examples/jsm/Addons.js';

extend({ EffectComposer, RenderPass, ShaderPass }); // post-processing classes

export interface ShaderLayerProps {
	shader: {
		uniforms: any;
		vertexShader: string;
		fragmentShader: string;
	};
	onUpdate?: (uniforms: any) => void;
}

export const ShaderLayer: React.FC<ShaderLayerProps> = ({
	shader,
	onUpdate,
}) => {
	const { gl, scene, camera, size } = useThree();
	const composerRef = useRef<EffectComposer | null>(null);
	const shaderPassRef = useRef<ShaderPass | null>(null);

	useEffect(() => {
		const composer = new EffectComposer(gl);
		composerRef.current = composer;

		const renderPass = new RenderPass(scene, camera);
		composer.addPass(renderPass);

		const shaderPass = new ShaderPass(shader);
		shaderPassRef.current = shaderPass;
		shaderPass.renderToScreen = true;
		composer.addPass(shaderPass);

		if (shaderPass.uniforms.resolution) {
			shaderPass.uniforms.resolution.value.set(size.width, size.height);
		}

		return () => {
			composer.dispose();
		};
	}, [gl, scene, camera, shader]);

	useEffect(() => {
		if (composerRef.current && shaderPassRef.current) {
			composerRef.current.setSize(size.width, size.height);
			if (shaderPassRef.current.uniforms.resolution) {
				shaderPassRef.current.uniforms.resolution.value.set(
					size.width,
					size.height
				);
			}
		}
	}, [size]);

	useFrame(() => {
		if (composerRef.current) {
			if (onUpdate && shaderPassRef.current) {
				onUpdate(shaderPassRef.current.uniforms);
			}
			composerRef.current.render();
		}
	}, 1);

	return null;
};
