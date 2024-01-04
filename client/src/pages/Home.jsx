import React from 'react';
import style from '../components/Home.module.css';
import style2 from '../components/Button.module.css';
import backgroundImage from '../assets/bcg-img-big.png';
import backgroundImage2 from '../assets/bcg2-img-big.png';
import backgroundDots from '../assets/bcg-img-small.png';
import monicaHomeImg from '../assets/monica-home-img.png';

export function Home() {
    return (
        <div className="container">
            <img src={backgroundImage} alt="background" className={style.backgroundImage} />
            <img src={backgroundImage2} alt="background" className={style.backgroundImage2} />
            <div className="row">
                <div className={`col-md-12 col-lg-8 ${style.textContainer}`}>
                    <h4 className={`mt-5 display-6 text-center fst-italic ${style.mainTitle}`}>
                        Sveiki sugrįžę namo
                    </h4>
                    <div className={style.bubblesContainer}>
                        <div className={style.bubble1}>
                            <span className={style.info}>geros savijautos</span>
                        </div>
                        <div className={style.bubble2}>
                            <span className={style.info}>energijos</span>
                        </div>
                        <div className={style.bubble3}>
                            <span className={style.info}>harmonijos</span>
                        </div>
                    </div>
                    <h4 className={`display-6 mt-2 mb-4 text-center fst-italic ${style.mainTitle}`}>ieškotojai.</h4>
                    <button className={`mt-5 mb-4 ${style2.button}`}>PRADĖK SAVO KELIONĘ</button>
                    <h4 className={`mt-5 mb-4 fw-light lh-base text-center ${style.sentence}`}>"Atsikratyk pykčio ir skausmingų prisiminimų visiems laikams greitai ir neskausmingai, jog atrastum gerą savijautą ir turėtum daugiau energijos daryti tai kas svarbu gyvenime!"</h4>
                    <p className="mt-1 fst-italic">Monica Empower</p>
                </div>
                <div className={`col-md-12 col-lg-4 d-flex align-items-center justify-content-center ${style.imageContainer}`}>
                    <div className={style.backgroundDotsContainer}>
                        <img src={backgroundDots} alt="background dots" className={style.backgroundDots} />
                    </div>
                    <img 
                        src={monicaHomeImg}
                        alt="Monica"
                        className={style.monicaImage}
                    />
                </div>
            </div>
        </div>
    )
}