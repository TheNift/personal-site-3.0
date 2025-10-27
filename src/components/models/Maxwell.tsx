import { forwardRef, useRef, useEffect } from 'react';
import { BaseModel } from './BaseModel';
import type { CubeProps, ModelHandle } from '@types';
import { getAssetPath } from '@utils/assetRegistry';
import { Mesh, MeshStandardMaterial } from 'three';

export const Maxwell = forwardRef<ModelHandle, CubeProps>(
	(
		{
			color = 'white',
			size = [1, 1, 1],
			receiveShadow = false,
			castShadow = false,
			onFrame,
			...baseProps
		},
		ref
	) => {
		const modelRef = useRef<ModelHandle>(null);

		useEffect(() => {
			if (modelRef.current?.mesh) {
				modelRef.current.mesh.traverse((child) => {
					if (child instanceof Mesh && child.material) {
						const materials = Array.isArray(child.material)
							? child.material
							: [child.material];

						materials.forEach((mat) => {
							if (mat instanceof MeshStandardMaterial) {
								mat.metalness = 0;
								mat.roughness = 1;
								mat.needsUpdate = true;
							}
						});
					}
				});
			}
		}, []);

		return (
			<BaseModel
				ref={(instance) => {
					modelRef.current = instance;
					if (typeof ref === 'function') {
						ref(instance);
					} else if (ref) {
						ref.current = instance;
					}
				}}
				{...baseProps}
				gltfPath={getAssetPath('maxwell')}
			/>
		);
	}
);

Maxwell.displayName = 'Maxwell';
