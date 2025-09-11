import { forwardRef } from 'react';
import { BaseModel } from './BaseModel';
import type { CubeProps, ModelHandle } from '@types';
import phoneFile from '@assets/models/phone.glb';

export const Phone = forwardRef<ModelHandle, CubeProps>(
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
				gltfPath={phoneFile}
			></BaseModel>
		);
	}
);

Phone.displayName = 'Phone';
