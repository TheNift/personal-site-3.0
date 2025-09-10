import { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ShaderLayer } from '@components/ShaderLayer';
import { bayer8x8Shader } from '@shaders';
import { Cube } from '@models';
import type { ModelHandle } from '@types';
import { useBackground } from '@contexts/BackgroundContext';

function LightSource() {
	return (
		<>
			<pointLight
				color="white"
				intensity={100}
				position={[2, 2, 2]}
				lookAt={[0, 0, 0]}
				castShadow={true}
			/>
			<pointLight
				color="white"
				intensity={30}
				position={[-2, -2, 2]}
				lookAt={[0, 0, 0]}
				castShadow={true}
			/>
			<ambientLight color="white" intensity={3} />
		</>
	);
}

function CameraController({
	positions,
	activeIndex,
	lookAtTarget,
}: {
	positions: THREE.Vector3[];
	activeIndex: number;
	lookAtTarget?: { location: THREE.Vector3 };
}) {
	const { camera } = useThree();
	const targetPosition = useRef(new THREE.Vector3());
	const currentPosition = useRef(new THREE.Vector3());

	useEffect(() => {
		if (positions[activeIndex]) {
			targetPosition.current.copy(positions[activeIndex]);
		}
	}, [positions, activeIndex]);

	useEffect(() => {
		currentPosition.current.copy(camera.position);
	}, [camera.position]);

	useFrame(() => {
		currentPosition.current.lerp(targetPosition.current, 0.05);
		camera.position.copy(currentPosition.current);

		const lookAtPosition =
			lookAtTarget?.location || new THREE.Vector3(0, 0, 0);
		camera.lookAt(lookAtPosition);
	});

	return null;
}

const BackgroundScene = () => {
	const cameraPositions = [
		new THREE.Vector3(0, 0, 5), // Front view
		new THREE.Vector3(5, 0, 0), // Right view
		new THREE.Vector3(0, 5, 0), // Top view
		new THREE.Vector3(-5, 0, 0), // Left view
		new THREE.Vector3(0, 0, -5), // Back view
		new THREE.Vector3(3, 3, 3), // Diagonal view
	];

	const { cameraPosition } = useBackground();

	const cubeRef = useRef<ModelHandle>(null!);

	return (
		<div style={{ width: '100%', height: '100%', position: 'relative' }}>
			<Canvas
				camera={{
					position: cameraPositions[0].toArray(),
					fov: 75,
					near: 0.1,
					far: 1000,
				}}
				style={{ width: '100%', height: '100%' }}
			>
				<LightSource />
				<Cube
					ref={cubeRef}
					color="green"
					onFrame={(mesh) => {
						mesh.rotation.x += 0.001;
						mesh.rotation.y += 0.001;
					}}
					receiveShadow={true}
				/>
				<CameraController
					positions={cameraPositions}
					activeIndex={cameraPosition}
					lookAtTarget={cubeRef.current}
				/>
				<ShaderLayer shader={bayer8x8Shader} />
			</Canvas>
		</div>
	);
};

export default BackgroundScene;
