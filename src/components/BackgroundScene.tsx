import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { motion } from 'motion/react';
import * as THREE from 'three';
import { ShaderLayer } from '@components/ShaderLayer';
import { bayer8x8Shader } from '@shaders';
import {
	Motorcycle,
	Desk,
	Monitor,
	Chair,
	Keyboard,
	Mouse,
	Plant,
	Shelf,
	Phone,
} from '@models';
import type { ModelHandle } from '@types';
import { useBackground } from '@contexts/BackgroundContext';

function LightSource() {
	return (
		<>
			<pointLight
				color="white"
				intensity={100}
				position={[5, 8, 5]}
				castShadow={true}
			/>
			<pointLight
				color="white"
				intensity={20}
				position={[-3.8, 5, 4.2]}
				castShadow={true}
			/>
			<ambientLight color="white" intensity={5} />
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
		if (activeIndex === 4) {
			camera.rotation.z = 0.9 * Math.PI;
		}
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
		monitor: useRef<ModelHandle>(null!),
		chair: useRef<ModelHandle>(null!),
		keyboard: useRef<ModelHandle>(null!),
		mouse: useRef<ModelHandle>(null!),
		plant: useRef<ModelHandle>(null!),
		shelf: useRef<ModelHandle>(null!),
		phone: useRef<ModelHandle>(null!),
	};

	const cameraConfigs: CameraConfig[] = useMemo(
		() => [
			// Home - looking at desk area
			{
				position: new THREE.Vector3(0, 8, -5),
				lookAt: new THREE.Vector3(0, 0, 6),
			},
			// About - looking at motorcycle
			{
				position: new THREE.Vector3(0, 5, 0),
				lookAt:
					modelRefs.motorcycle.current?.location ||
					new THREE.Vector3(0, 0, 0),
			},
			// Experience - looking computer setup
			{
				position: new THREE.Vector3(0, 5, -1),
				lookAt:
					modelRefs.monitor.current?.location ||
					new THREE.Vector3(0, 0, 0),
			},
			// Portfolio - looking at shelf
			{
				position: new THREE.Vector3(-3, 6, 1),
				lookAt:
					modelRefs.shelf.current?.location.add(
						new THREE.Vector3(0, 0.5, 0)
					) || new THREE.Vector3(0, 0, 0),
			},
			// Contact - looking at phone
			{
				position: new THREE.Vector3(-1.1, 3.2, 3),
				lookAt:
					modelRefs.phone.current?.location ||
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

					{/* About */}
					<Motorcycle
						ref={modelRefs.motorcycle}
						position={[8, 0, 3]}
						rotation={[0, -0.1 * Math.PI, -0.05 * Math.PI]}
						// onFrame={(mesh) => {
						// 	mesh.rotation.y += 0.001;
						// }}
						receiveShadow={true}
					/>

					{/* Portfolio */}
					<Desk
						ref={modelRefs.computer}
						position={[-3.5, 0, 3.5]}
						scale={[3, 3, 3]}
						rotation={[0, 0.5 * Math.PI, 0]}
						color="green"
						receiveShadow={true}
						castShadow={true}
					/>
					<Monitor
						ref={modelRefs.monitor}
						position={[-3.5, 2.85, 4.2]}
						rotation={[0, 0.5 * Math.PI, 0]}
						scale={[0.04, 0.04, 0.04]}
						color="white"
						receiveShadow={true}
						castShadow={true}
					/>
					<Keyboard
						ref={modelRefs.keyboard}
						position={[-2.9, 2.85, 2.9]}
						rotation={[0, -0.57 * Math.PI, 0]}
						scale={[0.006, 0.006, 0.006]}
						color="white"
						receiveShadow={true}
						castShadow={true}
					/>
					<Mouse
						ref={modelRefs.mouse}
						position={[-4.9, 2.85, 3.2]}
						rotation={[0, 0.1 * Math.PI, 0]}
						scale={[0.12, 0.12, 0.12]}
						color="white"
						receiveShadow={true}
						castShadow={true}
					/>
					<Chair
						ref={modelRefs.chair}
						position={[-4, 0, 0]}
						rotation={[0, 0.3 * Math.PI, 0]}
						scale={[4, 4, 4]}
						color="white"
						receiveShadow={true}
						castShadow={true}
					/>
					<Plant
						ref={modelRefs.plant}
						position={[-1, 3.85, 4]}
						rotation={[0, 0 * Math.PI, 0]}
						scale={[1, 1, 1]}
						color="white"
						receiveShadow={true}
						castShadow={true}
					/>
					<Shelf
						ref={modelRefs.shelf}
						position={[-6, 5, 2.5]}
						rotation={[0, 0 * Math.PI, 0]}
						size={[1, 1, 1]}
						scale={[1, 1, 1]}
						color="white"
						receiveShadow={true}
						castShadow={true}
					/>
					<Phone
						ref={modelRefs.phone}
						position={[-1.1, 2.85, 3]}
						rotation={[0.5 * Math.PI, 1 * Math.PI, -0.1 * Math.PI]}
						scale={[0.8, 0.8, 0.8]}
						color="white"
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
