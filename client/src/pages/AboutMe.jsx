import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import monicaAboutImg from '../assets/monica-about-img.jpg';
import style from '../components/AboutMe.module.css';
import style3 from '../css/Global.module.css';

export function AboutMe() {
    const { language } = useLanguage();
    const translations = require(`../locales/${language}/translation.json`);

    const handleContactClick = () => {
        window.location.href = `/${language}/susisiekti`;
    };

    const aboutMeContent = translations.about_me.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-12 col-lg-8 mt-5 ${style.textContainer}`}>
                    <p>{aboutMeContent}</p>
                    <p className="fw-bolder">
                        {translations.about_me_extra_text}
                    </p>
                    <div
                        className={style3.stickyContact}
                        onClick={handleContactClick}
                        role="button"
                        tabIndex={0}
                    >
                        30 minučių nemokama sesija!
                    </div>
                </div>
                <div className={`col-md-12 col-lg-4 d-flex align-items-center justify-content-center`}>
                    <img src={monicaAboutImg} alt="Monica" className={style.monicaImg}/>
                </div>
            </div>
        </div>
    )
}