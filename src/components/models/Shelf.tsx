import { forwardRef } from 'react';
import { BaseModel } from './BaseModel';
import type { CubeProps, ModelHandle } from '@types';
import shelfFile from '@assets/models/shelf.glb';

export const Shelf = forwardRef<ModelHandle, CubeProps>(
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
		return (
			<BaseModel
				ref={ref}
				onFrame={onFrame}
				{...baseProps}
				gltfPath={shelfFile}
			></BaseModel>
		);
	}
);

Shelf.displayName = 'Shelf';
