import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import style from '../components/LanguageToggleButton.module.css';

export function LanguageToggle() {
    // eslint-disable-next-line
    const { language, setLanguage } = useLanguage();
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div>
            <button type="button" className={`btn btn-outline-secondary btn-sm me-1 ${style.button} ${language === 'lt' ? style.selected : ''}`} onClick={() => changeLanguage('lt')}>Lt</button>
            <button type="button" className={`btn btn-outline-secondary btn-sm me-2 ${style.button} ${language === 'en' ? style.selected : ''}`} onClick={() => changeLanguage('en')}>En</button>
        </div>
        // <div>
        //     <button className={`me-1 ${style.button} ${language === 'lt' ? style.selected : ''}`} onClick={() => changeLanguage('lt')}>Lt</button>
        //     <button className={`me-2 ${style.button} ${language === 'en' ? style.selected : ''}`} onClick={() => changeLanguage('en')}>En</button>
        // </div>
    );
}