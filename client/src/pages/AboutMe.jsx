import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import monicaAboutImg from '../assets/monica-about-img.jpg';
import style from '../components/AboutMe.module.css';
import StickyContactMessage from '../components/StickyContactMessage';

export function AboutMe() {
    const { language } = useLanguage();
    const translations = require(`../locales/${language}/translation.json`);

    const aboutMeContent = translations.about_me.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div className="container">
            <div className="row mb-4">
                <div className={`col-lg-12 col-xl-8 mt-2 ${style.textContainer}`}>
                    <p className={style.text}>{aboutMeContent}</p>
                    <p className={`fw-bolder ${style.text}`}>
                        {translations.about_me_extra_text}
                    </p>
                    <StickyContactMessage />
                </div>
                <div className={`col-lg-12 col-xl-4 d-flex align-items-center justify-content-center`}>
                    <img src={monicaAboutImg} alt="Monica" className={style.monicaImg}/>
                </div>
            </div>
        </div>
    )
}