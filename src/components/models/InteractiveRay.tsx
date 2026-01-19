import { useRef, useMemo, useEffect, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useLocation } from 'react-router';
import { Group, Vector3 } from 'three';
import { Ray } from './Ray';
import type { ModelHandle } from '@types';
import { useBackground } from '@contexts/BackgroundContext';

export function InteractiveRay({
	position,
	rotation,
	scale = [1, 1, 1],
	label,
	slug,
	onNavigate,
	hitboxSize = [1, 1, 1],
}: {
	position: [number, number, number];
	rotation: [number, number, number];
	scale?: [number, number, number];
	label: string;
	slug: string;
	onNavigate: (path: string) => void;
	hitboxSize?: [number, number, number];
}) {
	const meshRef = useRef<ModelHandle>(null!);
	const hoverRef = useRef(false);
	const tooltipRef = useRef<HTMLDivElement>(null);
	const tooltipVisibleRef = useRef(false);
	const { cameraPosition } = useBackground();
	const location = useLocation();
	const initialPos = useMemo(() => new Vector3(...position), [position]);
	const targetPos = useMemo(() => new Vector3(), []);
	const labelBaseOffset = 1;
	const labelTargetPos = useMemo(() => new Vector3(), []);
	const labelGroupRef = useRef<Group>(null);
	const initialScale = useMemo(() => new Vector3(...scale), [scale]);
	const targetScale = useMemo(() => new Vector3(), []);
	const currentScale = useRef(new Vector3(...scale));

	useLayoutEffect(() => {
		currentScale.current.copy(initialScale);
		if (meshRef.current?.mesh) {
			meshRef.current.mesh.scale.copy(initialScale);
		}
	}, [initialScale]);

	useLayoutEffect(() => {
		if (meshRef.current?.mesh) {
			meshRef.current.mesh.scale.copy(currentScale.current);
		}
	});

	useLayoutEffect(() => {
		if (labelGroupRef.current) {
			labelGroupRef.current.position.set(
				position[0],
				position[1] + labelBaseOffset,
				position[2]
			);
		}
	}, [position]);

	useFrame((_, delta) => {
		if (meshRef.current) {
			const canInteract =
				cameraPosition === 3 && location.pathname === '/portfolio';
			const hoverOffset = new Vector3(2, 0.5, -1);
			targetPos
				.copy(initialPos)
				.add(
					hoverRef.current && canInteract
						? hoverOffset
						: new Vector3(0, 0, 0)
				);

			const step = 5 * delta;
			meshRef.current.location.lerp(targetPos, step);

			if (meshRef.current.mesh) {
				const scaleMultiplier =
					hoverRef.current && canInteract ? 1.5 : 1;
				targetScale.copy(initialScale).multiplyScalar(scaleMultiplier);
				meshRef.current.mesh.scale.lerp(targetScale, step);
				currentScale.current.copy(meshRef.current.mesh.scale);

				if (labelGroupRef.current) {
					labelTargetPos.set(
						position[0] + 0.25,
						position[1] + labelBaseOffset * scaleMultiplier,
						position[2]
					);
					labelGroupRef.current.position.lerp(labelTargetPos, step);
				}
			}

			const shouldShowTooltip = hoverRef.current && canInteract;
			if (
				tooltipRef.current &&
				tooltipVisibleRef.current !== shouldShowTooltip
			) {
				tooltipRef.current.style.opacity = shouldShowTooltip
					? '1'
					: '0';
				tooltipVisibleRef.current = shouldShowTooltip;
			}
		}
	});

	useEffect(() => {
		if (cameraPosition !== 3 || location.pathname !== '/portfolio') {
			hoverRef.current = false;
			if (tooltipRef.current) {
				tooltipRef.current.style.opacity = '0';
			}
			tooltipVisibleRef.current = false;
			document.body.style.cursor = 'auto';
		}
	}, [cameraPosition, location.pathname]);

	return (
		<group>
			<Ray
				ref={meshRef}
				position={position}
				rotation={rotation}
				receiveShadow={true}
				castShadow={true}
			/>
			<mesh
				position={[
					position[0],
					position[1] + hitboxSize[1] * 0.5,
					position[2],
				]}
				onPointerOver={(e) => {
					e.stopPropagation();
					if (
						cameraPosition === 3 &&
						location.pathname === '/portfolio'
					) {
						hoverRef.current = true;
						document.body.style.cursor = 'pointer';
					}
				}}
				onPointerOut={() => {
					hoverRef.current = false;
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
			>
				<boxGeometry args={hitboxSize} />
				<meshBasicMaterial
					visible={false}
					color="red"
					opacity={0.3}
					transparent={true}
				/>
			</mesh>
			<group ref={labelGroupRef}>
				<Html>
					<div
						ref={tooltipRef}
						className="pointer-events-none bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap"
						style={{ opacity: 0, transition: 'opacity 150ms ease' }}
					>
						{label}
					</div>
				</Html>
			</group>
		</group>
	);
}
