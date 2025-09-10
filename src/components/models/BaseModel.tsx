import { useRef, useImperativeHandle, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import type { BaseModelProps, ModelHandle } from '@types';

export const BaseModel = forwardRef<ModelHandle, BaseModelProps>(
	(
		{
			position = [0, 0, 0],
			rotation = [0, 0, 0],
			scale = [1, 1, 1],
			children,
			onFrame,
			gltfPath,
		},
		ref
	) => {
		const meshRef = useRef<THREE.Mesh | THREE.Group>(null!);

		const gltf = gltfPath ? useGLTF(gltfPath) : null;

		useImperativeHandle(ref, () => ({
			get location() {
				if (meshRef.current) {
					return meshRef.current.position.clone();
				}
				return new THREE.Vector3(...position);
			},
			get mesh() {
				return meshRef.current;
			},
			get gltf() {
				return gltf;
			},
		}));

		useFrame((_, delta) => {
			if (meshRef.current && onFrame) {
				onFrame(meshRef.current, delta);
			}
		});

		if (gltfPath && gltf) {
			return (
				<group
					ref={meshRef}
					position={position}
					rotation={rotation}
					scale={scale}
				>
					<primitive object={gltf.scene.clone()} />
				</group>
			);
		}

		return (
			<mesh
				ref={meshRef}
				position={position}
				rotation={rotation}
				scale={scale}
			>
				{children}
			</mesh>
		);
	}
);

BaseModel.displayName = 'BaseModel';
