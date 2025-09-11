import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import strings from '@data/strings';

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
		const navItems = strings.ui.nav;
		let matchedIndex = 0;

		for (let i = 0; i < navItems.length; i++) {
			const navItem = navItems[i];

			if (location.pathname === navItem.to) {
				matchedIndex = i;
				break;
			}

			if (
				navItem.to !== '/' &&
				location.pathname.startsWith(navItem.to + '/')
			) {
				matchedIndex = i;
				break;
			}
		}

		setCurrentPageIndex(matchedIndex);
		setCameraPosition(matchedIndex);
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
