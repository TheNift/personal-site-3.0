import { forwardRef } from 'react';
import { BaseModel } from './BaseModel';
import type { CubeProps, ModelHandle } from '@types';
import chairFile from '@assets/models/chair.glb';

export const Chair = forwardRef<ModelHandle, CubeProps>(
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
				gltfPath={chairFile}
			></BaseModel>
		);
	}
);

Chair.displayName = 'Chair';
