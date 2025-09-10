import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface BackgroundContextType {
	cameraPosition: number;
	setCameraPosition: (index: number) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(
	undefined
);

export const BackgroundProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [cameraPosition, setCameraPosition] = useState(0);

	return (
		<BackgroundContext.Provider
			value={{ cameraPosition, setCameraPosition }}
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
