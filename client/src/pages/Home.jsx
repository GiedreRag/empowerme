import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import style from '../components/Home.module.css';
import style2 from '../components/Button.module.css';
import backgroundImage from '../assets/bcg-img-big.png';
import backgroundImage2 from '../assets/bcg2-img-big.png';
import backgroundDots from '../assets/bcg-img-small.png';
import monicaHomeImg from '../assets/monica-home-img.png';
import StickyContactMessage from '../components/StickyContactMessage';

export function Home() {
    const { language } = useLanguage();
    const translations = require(`../locales/${language}/translation.json`);

    const phrases = [translations.the_balance, translations.energy, translations.harmony];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [currentPhraseIndex, phrases]);

    return (
        <div className="container">
            <img src={backgroundImage} alt="background" className={style.backgroundImage} />
            <img src={backgroundImage2} alt="background" className={style.backgroundImage2} />
            <div className="row">
                <div className={`col-md-12 col-lg-8 ${style.textContainer}`}>
                    <h4 className={`mt-sm-4 mt-md-5 display-7 text-center fst-italic ${style.mainTitle}`}>
                        {translations.welcome}
                    </h4>
                    <div className={style.bubblesContainer}>
                    <div className={style.bubble}>
                        <span className={style.info} id="phrasesContainer">
                            {phrases.map((phrase, index) => (
                                <span
                                    key={index}
                                    className={`${style.word} ${index === currentPhraseIndex ? style.fadeIn : style.fadeOut}`}
                                >
                                    {phrase}
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
                    <h4 className={`display-7 mt-2 mb-4 text-center fst-italic ${style.mainTitle}`}>
                        {translations.searchers}
                    </h4>
                    <Link className={`mt-5 mb-4 ${style2.button}`} to="/packages">
                        {translations.start_journey}
                    </Link>
                    <StickyContactMessage />
                    <h4 className={`mt-5 mb-4 fw-light lh-base text-center ${style.sentence}`}>
                        {translations.quote}
                    </h4>
                    <p className="mt-1 fst-italic">{translations.monica_empower}</p>
                </div>
                <div
                    className={`col-md-12 col-lg-4 d-flex align-items-center justify-content-center ${style.imageContainer}`}
                >
                    <div className={style.backgroundDotsContainer}>
                        <img src={backgroundDots} alt="background dots" className={style.backgroundDots} />
                    </div>
                    <img src={monicaHomeImg} alt="Monica" className={style.monicaImage} />
                </div>
            </div>
        </div>
    );
}

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../context/LanguageContext';
// import style from '../components/Home.module.css';
// import style2 from '../components/Button.module.css';
// import backgroundImage from '../assets/bcg-img-big.png';
// import backgroundImage2 from '../assets/bcg2-img-big.png';
// import backgroundDots from '../assets/bcg-img-small.png';
// import monicaHomeImg from '../assets/monica-home-img.png';
// import StickyContactMessage from '../components/StickyContactMessage';

// export function Home() {
//     const { language } = useLanguage();
//     const translations = require(`../locales/${language}/translation.json`);

//     const phrases = [translations.the_balance, translations.energy, translations.harmony];
//     const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//         }, 3000);

//         return () => clearTimeout(timeout);
//     }, [currentPhraseIndex, phrases]);

//     return (
//         <div className="container">
//             <img src={backgroundImage} alt="background" className={style.backgroundImage} />
//             <img src={backgroundImage2} alt="background" className={style.backgroundImage2} />
//             <div className="row">
//                 <div className={`col-md-12 col-lg-8 ${style.textContainer}`}>
//                     <h4 className={`mt-sm-4 mt-md-5 display-6 text-center fst-italic ${style.mainTitle}`}>
//                         {translations.welcome}
//                     </h4>
//                     <div className={style.bubblesContainer}>
//                         <div className={style.bubble}>
//                             <span className={style.info} id="phrasesContainer">
//                                 {phrases.map((phrase, index) => (
//                                     <span
//                                         key={index}
//                                         className={`${style.word} ${index === currentPhraseIndex ? style.fadeIn : style.fadeOut}`}
//                                     >
//                                         {phrase}
//                                     </span>
//                                 ))}
//                             </span>
//                         </div>
//                     </div>
//                     <h4 className={`display-6 mt-2 mb-4 text-center fst-italic ${style.mainTitle}`}>
//                         {translations.searchers}
//                     </h4>
//                     <Link className={`mt-5 mb-4 ${style2.button}`} to="/packages">
//                         {translations.start_journey}
//                     </Link>
//                     <StickyContactMessage />
//                     <h4 className={`mt-5 mb-4 fw-light lh-base text-center ${style.sentence}`}>
//                         {translations.quote}
//                     </h4>
//                     <p className="mt-1 fst-italic">{translations.monica_empower}</p>
//                 </div>
//                 <div
//                     className={`col-md-12 col-lg-4 d-flex align-items-center justify-content-center ${style.imageContainer}`}
//                 >
//                     <div className={style.backgroundDotsContainer}>
//                         <img src={backgroundDots} alt="background dots" className={style.backgroundDots} />
//                     </div>
//                     <img src={monicaHomeImg} alt="Monica" className={style.monicaImage} />
//                 </div>
//             </div>
//         </div>
//     );
// }



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../context/LanguageContext';
// import style from '../components/Home.module.css';
// import style2 from '../components/Button.module.css';
// import backgroundImage from '../assets/bcg-img-big.png';
// import backgroundImage2 from '../assets/bcg2-img-big.png';
// import backgroundDots from '../assets/bcg-img-small.png';
// import monicaHomeImg from '../assets/monica-home-img.png';
// import StickyContactMessage from '../components/StickyContactMessage';

// export function Home() {
//     const { language } = useLanguage();
//     const translations = require(`../locales/${language}/translation.json`);

//     const phrases = [translations.the_balance, translations.energy, translations.harmony];
//     const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//         }, 3000 * phrases[currentPhraseIndex].split(' ').length);

//         return () => clearTimeout(timeout);
//     }, [currentPhraseIndex, phrases]);

//     return (
//         <div className="container">
//             <img src={backgroundImage} alt="background" className={style.backgroundImage} />
//             <img src={backgroundImage2} alt="background" className={style.backgroundImage2} />
//             <div className="row">
//                 <div className={`col-md-12 col-lg-8 ${style.textContainer}`}>
//                     <h4 className={`mt-sm-4 mt-md-5 display-6 text-center fst-italic ${style.mainTitle}`}>
//                         {translations.welcome}
//                     </h4>
//                     <div className={style.bubblesContainer}>
//                         <div className={style.bubble}>
//                             <span className={style.info}>
//                                 {phrases[currentPhraseIndex]}
//                             </span>
//                         </div>
//                     </div>
//                     <h4 className={`display-6 mt-2 mb-4 text-center fst-italic ${style.mainTitle}`}>
//                         {translations.searchers}
//                     </h4>
//                     <Link className={`mt-5 mb-4 ${style2.button}`} to="/packages">
//                         {translations.start_journey}
//                     </Link>
//                     <StickyContactMessage />
//                     <h4 className={`mt-5 mb-4 fw-light lh-base text-center ${style.sentence}`}>
//                         {translations.quote}
//                     </h4>
//                     <p className="mt-1 fst-italic">{translations.monica_empower}</p>
//                 </div>
//                 <div
//                     className={`col-md-12 col-lg-4 d-flex align-items-center justify-content-center ${style.imageContainer}`}
//                 >
//                     <div className={style.backgroundDotsContainer}>
//                         <img src={backgroundDots} alt="background dots" className={style.backgroundDots} />
//                     </div>
//                     <img src={monicaHomeImg} alt="Monica" className={style.monicaImage} />
//                 </div>
//             </div>
//         </div>
//     );
// }






// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../context/LanguageContext';
// import style from '../components/Home.module.css';
// import style2 from '../components/Button.module.css';
// import backgroundImage from '../assets/bcg-img-big.png';
// import backgroundImage2 from '../assets/bcg2-img-big.png';
// import backgroundDots from '../assets/bcg-img-small.png';
// import monicaHomeImg from '../assets/monica-home-img.png';
// import StickyContactMessage from '../components/StickyContactMessage';

// export function Home() {
//     const { language } = useLanguage();
//     const translations = require(`../locales/${language}/translation.json`);

//     const phrases = [translations.good_feeling, translations.energy, translations.harmony];
//     const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//         }, 5000); // Change the delay (in milliseconds) as needed

//         return () => clearTimeout(timeout);
//     }, []);

      
//     return (
//         <div className="container">
//             <img src={backgroundImage} alt="background" className={style.backgroundImage} />
//             <img src={backgroundImage2} alt="background" className={style.backgroundImage2} />
//             <div className="row">
//                 <div className={`col-md-12 col-lg-8 ${style.textContainer}`}>
//                     <h4 className={`mt-sm-4 mt-md-5 display-6 text-center fst-italic ${style.mainTitle}`}>
//                         {translations.welcome}
//                     </h4>
//                     <div className={style.bubblesContainer}>
//                         <div className={style.bubble}>
//                             <span className={style.info}>{phrases[currentPhraseIndex]}</span>
//                         </div>
//                     </div>
//                     <h4 className={`display-6 mt-2 mb-4 text-center fst-italic ${style.mainTitle}`}>{translations.searchers}</h4>
//                     <Link className={`mt-5 mb-4 ${style2.button}`} to="/packages">{translations.start_journey}</Link>
//                     <StickyContactMessage />
//                     <h4 className={`mt-5 mb-4 fw-light lh-base text-center ${style.sentence}`}>{translations.quote}</h4>
//                     <p className="mt-1 fst-italic">{translations.monica_empower}</p>
                    
//                 </div>
//                 <div className={`col-md-12 col-lg-4 d-flex align-items-center justify-content-center ${style.imageContainer}`}>
//                     <div className={style.backgroundDotsContainer}>
//                         <img src={backgroundDots} alt="background dots" className={style.backgroundDots} />
//                     </div>
//                     <img src={monicaHomeImg} alt="Monica" className={style.monicaImage} />
//                 </div>
//             </div>
//         </div>
//     )
// }





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../context/LanguageContext';
// import style from '../components/Home.module.css';
// import style2 from '../components/Button.module.css';
// import backgroundImage from '../assets/bcg-img-big.png';
// import backgroundImage2 from '../assets/bcg2-img-big.png';
// import backgroundDots from '../assets/bcg-img-small.png';
// import monicaHomeImg from '../assets/monica-home-img.png';
// import StickyContactMessage from '../components/StickyContactMessage';

// export function Home() {
//     const { language } = useLanguage();

//     const translations = require(`../locales/${language}/translation.json`);
      
//     return (
//         <div className="container">
//             <img src={backgroundImage} alt="background" className={style.backgroundImage} />
//             <img src={backgroundImage2} alt="background" className={style.backgroundImage2} />
//             <div className="row">
//                 <div className={`col-md-12 col-lg-8 ${style.textContainer}`}>
//                     <h4 className={`mt-sm-4 mt-md-5 display-6 text-center fst-italic ${style.mainTitle}`}>
//                         {translations.welcome}
//                     </h4>
//                     <div className={style.bubblesContainer}>
//                         <div className={style.bubble1}>
//                             <span className={style.info}>{translations.good_feeling}</span>
//                         </div>
//                         <div className={style.bubble2}>
//                             <span className={style.info}>{translations.energy}</span>
//                         </div>
//                         <div className={style.bubble3}>
//                             <span className={style.info}>{translations.harmony}</span>
//                         </div>
//                     </div>
//                     <h4 className={`display-6 mt-2 mb-4 text-center fst-italic ${style.mainTitle}`}>{translations.searchers}</h4>
//                     <Link className={`mt-5 mb-4 ${style2.button}`} to="/packages">{translations.start_journey}</Link>
//                     <StickyContactMessage />
//                     <h4 className={`mt-5 mb-4 fw-light lh-base text-center ${style.sentence}`}>{translations.quote}</h4>
//                     <p className="mt-1 fst-italic">{translations.monica_empower}</p>
                    
//                 </div>
//                 <div className={`col-md-12 col-lg-4 d-flex align-items-center justify-content-center ${style.imageContainer}`}>
//                     <div className={style.backgroundDotsContainer}>
//                         <img src={backgroundDots} alt="background dots" className={style.backgroundDots} />
//                     </div>
//                     <img src={monicaHomeImg} alt="Monica" className={style.monicaImage} />
//                 </div>
//             </div>
//         </div>
//     )
// }