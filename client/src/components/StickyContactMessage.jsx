import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import style from '../components/StickyContactMessage.module.css';

const StickyContactMessage = () => {
    const { language } = useLanguage();
    const translations = require(`../locales/${language}/translation.json`);

    const handleContactClick = () => {
        window.location.href = `/contact`;
    };

    return (
        <div
        className={style.stickyContact}
        onClick={handleContactClick}
        role="button"
        tabIndex={0}
    >
        {translations.free_session}
    </div>
    );
};

export default StickyContactMessage;