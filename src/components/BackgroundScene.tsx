import { useRef, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { motion } from 'motion/react';
import * as THREE from 'three';
import { ShaderLayer } from '@components/ShaderLayer';
import { bayer8x8Shader } from '@shaders';
import { Motorcycle } from '@models';
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

function SceneReadyDetector({ onReady }: { onReady: () => void }) {
	const { gl } = useThree();

	useEffect(() => {
		const timer = setTimeout(() => {
			onReady();
		}, 100);

		return () => clearTimeout(timer);
	}, [gl, onReady]);

	return null;
}

const BackgroundScene = () => {
	const [isSceneReady, setIsSceneReady] = useState(false);

	const cameraPositions = [
		new THREE.Vector3(8, 8, 8),
		new THREE.Vector3(8, 0, 0),
		new THREE.Vector3(0, 8, 0),
		new THREE.Vector3(0, 0, 0),
		new THREE.Vector3(0, 0, 0),
		new THREE.Vector3(0, 0, 0),
	];

	const { cameraPosition } = useBackground();

	const cubeRef = useRef<ModelHandle>(null!);

	return (
		<div className="w-full h-full relative overflow-hidden">
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={{
					opacity: isSceneReady ? 1 : 0,
					x: isSceneReady ? 0 : 100,
				}}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				style={{ width: '100%', height: '100%' }}
			>
				<Canvas
					camera={{
						position: cameraPositions[0].toArray(),
						fov: 75,
						near: 0.1,
						far: 1000,
					}}
					style={{ width: '100%', height: '100%' }}
					gl={{
						alpha: true,
						antialias: true,
					}}
					// scene={{ background: new THREE.Color('#000000') }}
				>
					<SceneReadyDetector onReady={() => setIsSceneReady(true)} />
					<LightSource />

					<Motorcycle
						ref={cubeRef}
						onFrame={(mesh) => {
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
			</motion.div>
		</div>
	);
};

export default BackgroundScene;
