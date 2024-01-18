import React from 'react';
import style from '../components/SuccessMessage.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function SuccessMessage() {
    const { language } = useLanguage();
    const translations = require(`../locales/${language}/translation.json`);

    return (
        <div className={style.successMessage}>
            <p className={style.successText}>{translations.message_sent}</p>
        </div>
    );
}

