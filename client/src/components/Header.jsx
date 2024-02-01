import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import style from '../components/Header.module.css';
import logo from '../assets/logo_me.png';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { FaBars, FaTimes } from 'react-icons/fa';

export function Header() {
    const { language } = useLanguage();
    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();
    const [headerClass, setHeaderClass] = useState('');

    const translations = require(`../locales/${language}/translation.json`);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const closeMenu = () => {
        setMenuVisible(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 790) {
                setMenuVisible(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setHeaderClass(menuVisible ? style.smallScreen : '');
    }, [menuVisible]);

    useEffect(() => {
    }, [location.pathname, headerClass]);

    return (
        <div className={style.headerContainer}>
            <header className={`d-flex flex-wrap justify-content-middle align-items-center mb-4 border-bottom me-2 ms-2 ${menuVisible ? style.active : ''} ${headerClass}`}>
                <Link to="/" className="mb-md-0 me-md-auto">
                    <img
                        src={logo}
                        alt="logo of Monica Empower"
                        style={{ width: '110px', height: 'auto'}}
                    />
                </Link>
                <nav className={`${style.headerMenu}`}>
                    <NavLink to="/about-me" style={{ color: location.pathname.includes('/about-me') ? '#ffff' : '#333' }} onClick={closeMenu}>{translations.header_about_me}</NavLink>
                    <NavLink to="/products" style={{ color: location.pathname.includes('/products') ? '#ffff' : '#333' }} onClick={closeMenu}>{translations.header_products}</NavLink>
                    <NavLink to="/packages" style={{ color: location.pathname.includes('/packages') ? '#ffff' : '#333' }} onClick={closeMenu}>{translations.header_packages}</NavLink>
                    <NavLink to="/contact" style={{ color: location.pathname.includes('/contact') ? '#ffff' : '#333' }} onClick={closeMenu}>{translations.header_contact}</NavLink>
                </nav>

                <div className={style.smallScreen}>
                    <button className={`${style.burgerMenuButton} ${menuVisible ? style.active : ''}`} onClick={toggleMenu}>
                        {menuVisible ? <i className="d-flex"><FaTimes /></i> : <i className="d-flex"><FaBars /></i>}
                    </button>
                    {menuVisible && (
                        <nav className={`${style.menuVisible}`}>
                            <Link to="/about-me" className="nav-link text-body-secondary" onClick={closeMenu}>{translations.header_about_me}</Link>
                            <Link to="/products" className="nav-link text-body-secondary" onClick={closeMenu}>{translations.header_products}</Link>
                            <Link to="/packages" className="nav-link text-body-secondary" onClick={closeMenu}>{translations.header_packages}</Link>
                            <Link to="/contact" className="nav-link text-body-secondary" onClick={closeMenu}>{translations.header_contact}</Link>
                        </nav>
                    )}
                    <LanguageToggle />
                </div>
            </header>
        </div>
    );
}