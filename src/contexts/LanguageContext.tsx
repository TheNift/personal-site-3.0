import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { english, vietnamese } from '@data/strings';

type Language = 'eng' | 'viet';
type StringsType = typeof english;

interface LanguageContextType {
	language: Language;
	setLanguage: (language: Language) => void;
	strings: StringsType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

const getBrowserLanguage = (): Language => {
	if (typeof window === 'undefined') return 'eng';

	const browserLang = navigator.language.toLowerCase();

	if (browserLang.startsWith('vi')) {
		return 'viet';
	}

	return 'eng';
};

const mergeDeep = (base: any, override: any): any => {
	if (override === undefined || override === null) return base;

	if (
		typeof base !== 'object' ||
		typeof override !== 'object' ||
		Array.isArray(base) ||
		Array.isArray(override)
	) {
		return override;
	}

	const result = { ...base };

	Object.keys(override).forEach((key) => {
		const baseValue = base[key];
		const overrideValue = override[key];

		if (
			typeof baseValue === 'object' &&
			baseValue !== null &&
			typeof overrideValue === 'object' &&
			overrideValue !== null &&
			!Array.isArray(baseValue) &&
			!Array.isArray(overrideValue)
		) {
			result[key] = mergeDeep(baseValue, overrideValue);
		} else {
			result[key] = overrideValue;
		}
	});

	return result;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Language>(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem(
				'preferred-language'
			) as Language;
			if (stored === 'eng' || stored === 'viet') {
				return stored;
			}
		}
		return getBrowserLanguage();
	});

	useEffect(() => {
		localStorage.setItem('preferred-language', language);
	}, [language]);

	const strings = React.useMemo(() => {
		if (language === 'viet') {
			return mergeDeep(english, vietnamese) as StringsType;
		}
		return english;
	}, [language]);

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
				strings,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};
