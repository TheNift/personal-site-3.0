import { useRef, useEffect, memo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { RenderTexture, PerspectiveCamera } from '@react-three/drei';
import { Maxwell } from '@models';
import type { ModelHandle } from '@types';
import { useLanguage } from '@contexts/LanguageContext';

function RotatingMaxwell() {
	const maxwellRef = useRef<ModelHandle>(null);

	useFrame((_, delta) => {
		if (maxwellRef.current?.mesh) {
			maxwellRef.current.mesh.rotation.y += delta * 0.8;
		}
	});

	return (
		<Maxwell
			ref={maxwellRef}
			position={[0, 0, 0]}
			scale={[1, 1, 1]}
			rotation={[0, 0, 0]}
			suspense={true}
		/>
	);
}

function CameraSetup() {
	const { camera } = useThree();

	useEffect(() => {
		camera.lookAt(0, 1, 0);
	}, [camera]);

	return null;
}

export const SpinningMaxwell = memo(() => {
	const { strings } = useLanguage();
	return (
		<mesh>
			<planeGeometry args={[2.25, 1.26]} />
			<meshBasicMaterial>
				<RenderTexture attach="map" anisotropy={16}>
					<PerspectiveCamera
						makeDefault
						position={[0, 3, 6]}
						fov={50}
					/>
					<CameraSetup />
					<color attach="background" args={[strings.colors.yorha]} />
					<ambientLight intensity={2} />
					<directionalLight position={[5, 5, 5]} intensity={3} />
					<pointLight position={[-5, 5, 5]} intensity={2} />
					<RotatingMaxwell />
				</RenderTexture>
			</meshBasicMaterial>
		</mesh>
	);
});
