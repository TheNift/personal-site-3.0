import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useLocation } from 'react-router';
import { Vector3 } from 'three';
import { Cube } from './Cube';
import type { ModelHandle } from '@types';
import { useBackground } from '@contexts/BackgroundContext';

export function InteractiveCube({
	position,
	rotation,
	size,
	color,
	label,
	slug,
	onNavigate,
}: {
	position: [number, number, number];
	rotation: [number, number, number];
	size: [number, number, number];
	color: string;
	label: string;
	slug: string;
	onNavigate: (path: string) => void;
}) {
	const meshRef = useRef<ModelHandle>(null!);
	const [hovered, setHover] = useState(false);
	const { cameraPosition } = useBackground();
	const location = useLocation();
	const initialPos = useMemo(() => new Vector3(...position), [position]);
	const targetPos = useMemo(() => new Vector3(), []); // Re-usable vector

	useFrame((_, delta) => {
		if (meshRef.current) {
			// Calculate target position based on hover state
			// Slide out towards the camera. Camera at Portfolio is roughly [-3, 6, 1], shelf at [-6, 5, 2.5]
			const hoverOffset = new Vector3(2, 0.5, -1);
			targetPos
				.copy(initialPos)
				.add(
					hovered &&
						cameraPosition === 3 &&
						location.pathname === '/portfolio'
						? hoverOffset
						: new Vector3(0, 0, 0)
				);

			const step = 5 * delta;
			meshRef.current.location.lerp(targetPos, step);
		}
	});

	// Reset hover when camera moves away
	useEffect(() => {
		if (cameraPosition !== 3 || location.pathname !== '/portfolio') {
			setHover(false);
			document.body.style.cursor = 'auto';
		}
	}, [cameraPosition, location.pathname]);

	return (
		<group>
			<Cube
				ref={meshRef}
				position={position}
				rotation={rotation}
				size={size}
				scale={[1, 1, 1]}
				color={color}
				receiveShadow={true}
				castShadow={true}
				suspense={true}
				onPointerOver={(e) => {
					e.stopPropagation();
					if (
						cameraPosition === 3 &&
						location.pathname === '/portfolio'
					) {
						setHover(true);
						document.body.style.cursor = 'pointer';
					}
				}}
				onPointerOut={() => {
					setHover(false);
					document.body.style.cursor = 'auto';
				}}
				onClick={(e) => {
					e.stopPropagation();
					if (
						cameraPosition === 3 &&
						location.pathname === '/portfolio'
					) {
						onNavigate(`/portfolio/${slug}`);
					}
				}}
			/>
			{hovered && cameraPosition === 3 && location.pathname === '/portfolio' && (
				<Html position={[position[0] + 0.5, position[1] + 0.5, position[2]]}>
					<div className="pointer-events-none bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
						{label}
					</div>
				</Html>
			)}
		</group>
	);
}
