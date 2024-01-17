import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
    // eslint-disable-next-line
    const { language, setLanguage } = useLanguage();
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div>
            <button className="me-1" onClick={() => changeLanguage('lt')}>Lt</button>
            <button className="me-2" onClick={() => changeLanguage('en')}>En</button>
        </div>
    );
}