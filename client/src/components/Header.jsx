import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import style from '../components/Header.module.css';
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
                        src="https://media.canva.com/1/image-resize/1/500_500_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vNzVsWS9NQUVfUGRvNzVsWS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAALMkqn08CI_8u_P4iI9Wia3dLSeR1rXMHFzP_4T8Zc0j&amp;exp=1704199119&amp;x-canva-quality=screen&amp;csig=AAAAAAAAAAAAAAAAAAAAANudEeF02Rgevzm1xaBHT2veiLsZrFlbMH03sWd-ENZH"
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

// import { Link, NavLink, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import style from '../components/Header.module.css';
// import { LanguageToggle } from './LanguageToggle';
// import { useLanguage } from '../context/LanguageContext';
// import { FaBars, FaTimes } from 'react-icons/fa';

// export function Header() {
//     const { language } = useLanguage();
//     const [menuVisible, setMenuVisible] = useState(false);
//     const location = useLocation();

//     const translations = require(`../locales/${language}/translation.json`);

//     const toggleMenu = () => {
//         setMenuVisible(!menuVisible);
//     }

//     const closeMenu = () => {
//         setMenuVisible(false);
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 790) {
//                 setMenuVisible(false);
//             }
//         };

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);
     
//     return (
//         <div className={style.headerContainer}>
//             <header className={`d-flex flex-wrap justify-content-middle align-items-center mb-4 border-bottom me-2 ms-2 ${menuVisible ? style.active : ''} ${window.innerWidth <= 790 ? style.smallScreen : ''}`}>
//                 <Link to="/" className="mb-md-0 me-md-auto">
//                     <img 
//                         src="https://media.canva.com/1/image-resize/1/500_500_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vNzVsWS9NQUVfUGRvNzVsWS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAALMkqn08CI_8u_P4iI9Wia3dLSeR1rXMHFzP_4T8Zc0j&amp;exp=1704199119&amp;x-canva-quality=screen&amp;csig=AAAAAAAAAAAAAAAAAAAAANudEeF02Rgevzm1xaBHT2veiLsZrFlbMH03sWd-ENZH" 
//                         alt="logo of Monica Empower"
//                         style={{ width: '110px', height: 'auto'}}
//                     />
//                 </Link>
//                 <nav className={`${style.headerMenu}`}>
//                     <NavLink to="/about-me" className={`nav-link text-body-secondary ${location.pathname === '/about-me' ? style.activeHeaderLink : ''}`} onClick={closeMenu}>{translations.header_about_me}</NavLink>
//                     <NavLink to="/products" className={`nav-link text-body-secondary ${location.pathname === '/products' ? style.activeHeaderLink : ''}`} onClick={closeMenu}>{translations.header_products}</NavLink>
//                     <NavLink to="/packages" className={`nav-link text-body-secondary ${location.pathname === '/packages' ? style.activeHeaderLink : ''}`} onClick={closeMenu}>{translations.header_packages}</NavLink>
//                     <NavLink to="/contact" className={`nav-link text-body-secondary ${location.pathname === '/contact' ? style.activeHeaderLink : ''}`} onClick={closeMenu}>{translations.header_contact}</NavLink>
//                 </nav>
//                 <div className={style.smallScreen}>
//                     <button className={`${style.burgerMenuButton} ${menuVisible ? style.active : ''}`} onClick={toggleMenu}>
//                         {menuVisible ? <i className="d-flex"><FaTimes /></i> : <i className="d-flex"><FaBars /></i>}
//                     </button>
//                     {menuVisible && (
//                         <nav className={`${style.menuVisible}`}>
//                             <Link to="/about-me" className="nav-link text-body-secondary" onClick={closeMenu}>{translations.header_about_me}</Link>
//                             <Link to="/products" className="nav-link text-body-secondary" onClick={closeMenu}>{translations.header_products}</Link>
//                             <Link to="/packages" className="nav-link text-body-secondary" onClick={closeMenu}>{translations.header_packages}</Link>
//                             <Link to="/contact" className="nav-link text-body-secondary" onClick={closeMenu}>{translations.header_contact}</Link>
//                         </nav>
//                     )}
//                     <LanguageToggle />
//                 </div>
//             </header>
//         </div>
//     );
// }
