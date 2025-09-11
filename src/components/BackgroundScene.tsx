import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { motion } from 'motion/react';
import * as THREE from 'three';
import { ShaderLayer } from '@components/ShaderLayer';
import { bayer8x8Shader } from '@shaders';
import { Motorcycle, Cube } from '@models';
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

interface CameraConfig {
	position: THREE.Vector3;
	lookAt: THREE.Vector3;
}

interface ModelRefs {
	[key: string]: React.RefObject<ModelHandle>;
}

function CameraController({
	cameraConfigs,
	activeIndex,
}: {
	cameraConfigs: CameraConfig[];
	activeIndex: number;
}) {
	const { camera } = useThree();
	const targetPosition = useRef(new THREE.Vector3());
	const currentPosition = useRef(new THREE.Vector3());
	const targetLookAt = useRef(new THREE.Vector3());
	const currentLookAt = useRef(new THREE.Vector3());
	const isInitialized = useRef(false);

	useEffect(() => {
		if (cameraConfigs[activeIndex]) {
			targetPosition.current.copy(cameraConfigs[activeIndex].position);
			targetLookAt.current.copy(cameraConfigs[activeIndex].lookAt);

			if (!isInitialized.current) {
				currentPosition.current.copy(camera.position);
				currentLookAt.current.copy(cameraConfigs[activeIndex].lookAt);
				isInitialized.current = true;
			}
		}
	}, [cameraConfigs, activeIndex, camera]);

	useFrame(() => {
		currentPosition.current.lerp(targetPosition.current, 0.05);
		currentLookAt.current.lerp(targetLookAt.current, 0.05);

		camera.position.copy(currentPosition.current);
		camera.lookAt(currentLookAt.current);
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

	const { cameraPosition } = useBackground();

	const modelRefs: ModelRefs = {
		desk: useRef<ModelHandle>(null!),
		motorcycle: useRef<ModelHandle>(null!),
		computer: useRef<ModelHandle>(null!),
	};

	const cameraConfigs: CameraConfig[] = useMemo(
		() => [
			// Home - looking at desk area
			{
				position: new THREE.Vector3(0, 4, 0),
				lookAt:
					modelRefs.desk.current?.location ||
					new THREE.Vector3(0, 0, 0),
			},
			// About - looking at motorcycle
			{
				position: new THREE.Vector3(0, 4, 0),
				lookAt:
					modelRefs.motorcycle.current?.location ||
					new THREE.Vector3(0, 0, 0),
			},
			// Portfolio - looking at computer setup
			{
				position: new THREE.Vector3(0, 4, 0),
				lookAt:
					modelRefs.computer.current?.location ||
					new THREE.Vector3(0, 0, 0),
			},
		],
		[modelRefs]
	);

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
						position: cameraConfigs[0].position.toArray(),
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

					{/* Home */}
					<Cube
						ref={modelRefs.desk}
						position={[0, 0, 6]}
						size={[1, 1, 1]}
						color="green"
						receiveShadow={true}
						castShadow={true}
					/>

					{/* About */}
					<Motorcycle
						ref={modelRefs.motorcycle}
						position={[8, 0, 3]}
						// onFrame={(mesh) => {
						// 	mesh.rotation.y += 0.001;
						// }}
						receiveShadow={true}
					/>

					{/* Portfolio */}
					<Cube
						ref={modelRefs.computer}
						position={[-5, 0, 3]}
						size={[1, 1, 1]}
						color="green"
						receiveShadow={true}
						castShadow={true}
					/>

					<CameraController
						cameraConfigs={cameraConfigs}
						activeIndex={cameraPosition}
					/>
					<ShaderLayer shader={bayer8x8Shader} />
				</Canvas>
			</motion.div>
		</div>
	);
};

export default BackgroundScene;
