import {
	useRef,
	useImperativeHandle,
	forwardRef,
	useMemo,
	Suspense,
} from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh, Group, Vector3 } from 'three';
import type { BaseModelProps, ModelHandle } from '@types';

export const BaseModel = forwardRef<ModelHandle, BaseModelProps>(
	(
		{
			position = [0, 0, 0],
			rotation = [0, 0, 0],
			scale,
			children,
			onFrame,
			gltfPath,
			suspense = true,
			fallback = null,
			onClick,
			onPointerOver,
			onPointerOut,
			onPointerMove,
			castShadow,
			receiveShadow,
		},
		ref
	) => {
		const meshRef = useRef<Mesh | Group>(null!);

		const gltf = gltfPath ? useGLTF(gltfPath) : null;

		const clonedScene = useMemo(() => {
			if (gltf?.scene) {
				try {
					const cloned = gltf.scene.clone(true);
					cloned.traverse((child) => {
						if (child instanceof Mesh) {
							if (castShadow !== undefined)
								child.castShadow = castShadow;
							if (receiveShadow !== undefined)
								child.receiveShadow = receiveShadow;

							if (child.material) {
								if (Array.isArray(child.material)) {
									child.material = child.material.map((mat) =>
										mat.clone()
									);
								} else {
									child.material = child.material.clone();
								}
							}
						}
					});
					return cloned;
				} catch (error) {
					console.error('Failed to clone scene:', error);
					return null;
				}
			}
			return null;
		}, [gltf, castShadow, receiveShadow]);

		useImperativeHandle(ref, () => ({
			get location() {
				if (meshRef.current) {
					return meshRef.current.position.clone();
				}
				return new Vector3(...position);
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

		const ModelContent = () => {
			if (gltfPath && clonedScene) {
				return (
					<group
						ref={meshRef}
						position={position}
						rotation={rotation}
						scale={scale}
						onClick={onClick}
						onPointerOver={onPointerOver}
						onPointerOut={onPointerOut}
						onPointerMove={onPointerMove}
					>
						<primitive object={clonedScene} />
					</group>
				);
			}

			return (
				<mesh
					ref={meshRef}
					position={position}
					rotation={rotation}
					scale={scale}
					onClick={onClick}
					onPointerOver={onPointerOver}
					onPointerOut={onPointerOut}
					onPointerMove={onPointerMove}
					castShadow={castShadow}
					receiveShadow={receiveShadow}
				>
					{children}
				</mesh>
			);
		};

		if (suspense && gltfPath) {
			return (
				<Suspense fallback={fallback || <group />}>
					<ModelContent />
				</Suspense>
			);
		}

		return <ModelContent />;
	}
);

BaseModel.displayName = 'BaseModel';
