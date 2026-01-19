import { type ReactNode } from 'react';
import { type Euler, type Group, type Mesh, type Vector3 } from 'three';

export interface Project {
	title: string;
	slug: string;
	key: string;
}

export type AnimatableObject = {
	position: Vector3;
	rotation: Euler;
	scale: Vector3;
	visible: boolean;
};

export interface ModelHandle {
	location: Vector3;
	mesh: Mesh | Group | null;
	gltf?: any;
}

export interface BaseModelProps {
	position?: [number, number, number];
	rotation?: [number, number, number];
	scale?: [number, number, number];
	children?: ReactNode;
	onFrame?: (mesh: AnimatableObject, delta: number) => void;
	gltfPath?: string;
	suspense?: boolean;
	fallback?: ReactNode;
	onClick?: (event: any) => void;
	onPointerOver?: (event: any) => void;
	onPointerOut?: (event: any) => void;
	onPointerMove?: (event: any) => void;
	receiveShadow?: boolean;
	castShadow?: boolean;
}

export interface CubeProps extends BaseModelProps {
	color?: string;
	size?: [number, number, number];
}

export interface GLTFModelProps extends Omit<BaseModelProps, 'gltfPath'> {
	gltfPath: string;
	animations?: string[];
}
