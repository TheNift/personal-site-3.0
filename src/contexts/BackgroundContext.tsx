import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface BackgroundContextType {
	cameraPosition: number;
	setCameraPosition: (index: number) => void;
	currentPageIndex: number;
	setCurrentPageIndex: (index: number) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(
	undefined
);

export const BackgroundProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [cameraPosition, setCameraPosition] = useState(0);
	const [currentPageIndex, setCurrentPageIndex] = useState(0);

	useEffect(() => {
		if (location.pathname === '/') {
			setCurrentPageIndex(0);
			setCameraPosition(0);
		} else if (location.pathname === '/about') {
			setCurrentPageIndex(1);
			setCameraPosition(1);
		} else if (
			location.pathname === '/portfolio' ||
			location.pathname.includes('/portfolio/')
		) {
			setCurrentPageIndex(2);
			setCameraPosition(2);
		}
	}, [location.pathname]);

	return (
		<BackgroundContext.Provider
			value={{
				cameraPosition,
				setCameraPosition,
				currentPageIndex,
				setCurrentPageIndex,
			}}
		>
			{children}
		</BackgroundContext.Provider>
	);
};

export const useBackground = (): BackgroundContextType => {
	const context = useContext(BackgroundContext);
	if (context === undefined) {
		throw new Error(
			'useBackground must be used within a BackgroundProvider'
		);
	}
	return context;
};
