import React from 'react';
import style from '../components/Home.module.css';
import style2 from '../components/Button.module.css';
import backgroundImage from '../assets/bcg-img-big.png';
import backgroundImage2 from '../assets/bcg2-img-big.png';
import backgroundDots from '../assets/bcg-img-small.png';

export function Home() {
    return (
        <div className="container">
            <img src={backgroundImage} alt="background" className={style.backgroundImage} />
            <img src={backgroundImage2} alt="background" className={style.backgroundImage2} />
            <div className="row">
                <div className={`col-md-12 col-lg-8 ${style.textContainer}`}>
                    <h4 className="display-6 text-center" style={{ margin: '10% 30px 0', fontSize: '2em' }}>
                        Are You Future Leader Who Wants
                    </h4>
                    <div className={style.bubblesContainer}>
                        <div className={style.bubble1}>
                            <span className={style.info}>Find Your Purpose</span>
                        </div>
                        <div className={style.bubble2}>
                            <span className={style.info}>Performance</span>
                        </div>
                        <div className={style.bubble3}>
                            <span className={style.info}>Emotional Freedom</span>
                        </div>
                    </div>
                    <button className={`mt-5 mb-3 ${style2.button}`}>BEGIN YOUR JOURNEY</button>
                    <h6 className="mt-5 text-center">"You have power within to change your emotions, thoughts, decisions and life"</h6>
                    <p className="mt-1">Monica Empower</p>
                </div>
                <div className={`col-md-12 col-lg-4 d-flex align-items-center justify-content-center ${style.imageContainer}`}>
                    <div className={style.backgroundDotsContainer}>
                        <img src={backgroundDots} alt="background dots" className={style.backgroundDots} />
                    </div>
                    <img 
                        src="https://media.canva.com/1/image-resize/1/1601_2400_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9JU2JWdy9NQUVfQmVJU2JWdy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAD9pb-z-63qKUx0iqJnNMJGkBlumlBqOS3MPkzLPcKDs&amp;exp=1704200027&amp;x-canva-quality=screen_3x&amp;csig=AAAAAAAAAAAAAAAAAAAAAOkWS-uWsmV1dB0eete2iDe3DYH4Hl70sVUFVZgANpNP" 
                        alt="Monica"
                        className={style.monicaImage}
                        // style={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
                    />
                </div>
            </div>
        </div>
    )
}