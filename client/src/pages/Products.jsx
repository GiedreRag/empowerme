import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import monicaProductsImg from '../assets/monica-products-img.jpg';
import style from '../components/Products.module.css';
import StickyContactMessage from '../components/StickyContactMessage';

export function Products() {
    const { language } = useLanguage();

    const translations = require(`../locales/${language}/translation.json`);

    return (
        <div className="container">
            <div className="row">
                <div className={`col-sm-12 col-xl-7 mt-4 ${style.textContainer}`}>
                    <h4 className="mb-3">{translations.products_title}</h4>
                    <p>
                        {translations.products_p1}
                    </p>
                    <p className="fw-bolder">
                        {translations.products_p2}
                    </p>
                    <p>
                        {translations.products_p3}
                    </p>
                    <p>
                        {translations.products_p4}
                    </p>
                    <p>
                        {translations.products_p5}
                    </p>
                    <p className="fw-bolder">
                        {translations.products_p6}
                    </p>
                    <p className="fw-bolder">
                        {translations.products_p7} 
                    </p>
                    <p className="fw-bolder">
                        {translations.products_p8}
                    </p>
                </div>
                <div className={`col-sm-12 col-xl-5 ps-xl-5 d-flex align-items-center justify-content-center text-center`}>
                    <div>
                        <img src={monicaProductsImg} alt="Monica" className={style.monicaImg}/>
                    </div>
                    <StickyContactMessage />
                </div>
            </div>
        </div>
    )
}