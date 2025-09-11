import { forwardRef } from 'react';
import { BaseModel } from './BaseModel';
import type { CubeProps, ModelHandle } from '@types';
import monitorFile from '@assets/models/monitor.glb';

export const Monitor = forwardRef<ModelHandle, CubeProps>(
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
				gltfPath={monitorFile}
			></BaseModel>
		);
	}
);

Monitor.displayName = 'Monitor';
