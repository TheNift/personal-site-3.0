import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLanguage } from '@contexts/LanguageContext';

interface BackgroundContextType {
	cameraPosition: number;
	setCameraPosition: (index: number) => void;
	currentPageIndex: number;
	setCurrentPageIndex: (index: number) => void;
	isAssetsLoading: boolean;
	setIsAssetsLoading: (loading: boolean) => void;
	loadingProgress: number;
	setLoadingProgress: (progress: number) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(
	undefined
);

export const BackgroundProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [cameraPosition, setCameraPosition] = useState(0);
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const [isAssetsLoading, setIsAssetsLoading] = useState(true);
	const [loadingProgress, setLoadingProgress] = useState(0);
	const { strings } = useLanguage();

	const updatePageIndex = () => {
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
	};

	useEffect(() => {
		updatePageIndex();

		const handleNavigation = () => {
			updatePageIndex();
		};

		const originalPushState = history.pushState;
		const originalReplaceState = history.replaceState;

		history.pushState = function (...args) {
			originalPushState.apply(history, args);
			window.dispatchEvent(new Event('pushstate'));
		};

		history.replaceState = function (...args) {
			originalReplaceState.apply(history, args);
			window.dispatchEvent(new Event('replacestate'));
		};

		window.addEventListener('popstate', handleNavigation);
		window.addEventListener('pushstate', handleNavigation);
		window.addEventListener('replacestate', handleNavigation);

		return () => {
			history.pushState = originalPushState;
			history.replaceState = originalReplaceState;

			window.removeEventListener('popstate', handleNavigation);
			window.removeEventListener('pushstate', handleNavigation);
			window.removeEventListener('replacestate', handleNavigation);
		};
	}, [strings.ui.nav]);

	return (
		<BackgroundContext.Provider
			value={{
				cameraPosition,
				setCameraPosition,
				currentPageIndex,
				setCurrentPageIndex,
				isAssetsLoading,
				setIsAssetsLoading,
				loadingProgress,
				setLoadingProgress,
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
