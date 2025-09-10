import { type ReactNode } from 'react';
import * as THREE from 'three';

export interface Project {
	title: string;
	slug: string;
	key: string;
}

// Type for objects that can be animated (have common properties)
export type AnimatableObject = {
	position: THREE.Vector3;
	rotation: THREE.Euler;
	scale: THREE.Vector3;
	visible: boolean;
};

export interface ModelHandle {
	location: THREE.Vector3;
	mesh: THREE.Mesh | THREE.Group | null;
	gltf?: any;
}

export interface BaseModelProps {
	position?: [number, number, number];
	rotation?: [number, number, number];
	scale?: [number, number, number];
	children?: ReactNode;
	onFrame?: (mesh: AnimatableObject, delta: number) => void;
	gltfPath?: string;
}

export interface CubeProps extends Omit<BaseModelProps, 'children'> {
	color?: string;
	size?: [number, number, number];
	receiveShadow?: boolean;
	castShadow?: boolean;
}

export interface GLTFModelProps extends Omit<BaseModelProps, 'children' | 'gltfPath'> {
	gltfPath: string;
	animations?: string[]; // Optional: array of animation names to play
}
