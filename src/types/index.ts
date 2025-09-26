import { type ReactNode } from 'react';
import { type Vector3, type Euler, type Mesh, type Group } from 'three';

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
}

export interface CubeProps extends Omit<BaseModelProps, 'children'> {
	color?: string;
	size?: [number, number, number];
	receiveShadow?: boolean;
	castShadow?: boolean;
}

export interface GLTFModelProps extends Omit<BaseModelProps, 'children' | 'gltfPath'> {
	gltfPath: string;
	animations?: string[];
}
