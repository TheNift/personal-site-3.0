import { forwardRef } from 'react';
import { BaseModel } from './BaseModel';
import type { CubeProps, ModelHandle } from '@types';

export const Cube = forwardRef<ModelHandle, CubeProps>(
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
			<BaseModel ref={ref} onFrame={onFrame} {...baseProps}>
				<boxGeometry args={size} />
				<meshPhongMaterial color={color} />
			</BaseModel>
		);
	}
);

Cube.displayName = 'Cube';
