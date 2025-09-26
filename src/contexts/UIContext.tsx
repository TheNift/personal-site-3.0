import React, {
	createContext,
	useContext,
	useState,
	type ReactNode,
} from 'react';

interface UIContextType {
	isContentHidden: boolean;
	setContentHidden: (hidden: boolean) => void;
	toggleContentHidden: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

interface UIProviderProps {
	children: ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
	const [isContentHidden, setIsContentHidden] = useState(false);

	const setContentHidden = (hidden: boolean) => {
		setIsContentHidden(hidden);
	};

	const toggleContentHidden = () => {
		setIsContentHidden((prev) => !prev);
	};

	const value = {
		isContentHidden,
		setContentHidden,
		toggleContentHidden,
	};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
	const context = useContext(UIContext);
	if (context === undefined) {
		throw new Error('useUI must be used within a UIProvider');
	}
	return context;
};
