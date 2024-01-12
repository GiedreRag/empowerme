import React from 'react';
import monicaAboutImg from '../assets/monica-about-img.jpg';
import style from '../components/AboutMe.module.css';
import style3 from '../css/Global.module.css';

export function AboutMe() {
    const handleContactClick = () => {
        window.location.href = '/susisiekti';
    };

    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-12 col-lg-8 mt-5 ${style.textContainer}`}>
                    <p>Labas!</p>
                    <p>
                        Esu Monika, seniau jaučiausi atstumta, nepripažinta savo tėčio. Viduje laikiau užspausdus
                        skausmingus prisiminimus ir pyktį jam. Rezultate tapau irzli, pyktį sukeldavo maži dalykai, į
                        gyvenima pritraukdavau žmones ir situacijas kuriose klausdavau Kodėl man taip vyksta?
                    </p>
                    <p>
                        Vieną dieną aš supratau jog turiu surasti būdą kaip jam atleisti ir išsivaduoti iš nuoskaudų
                        skausmo savo tėčiui, nes tas pyktis griauna santykį su pačia manimi, artimais ir atima mano gerą
                        savijautą ir energiją.
                    </p>
                    <p>
                        Kai pajutau dėkingumą su ašaromis akyse savo tėčiui už ką laikiau pyktį, pamačius įvykių
                        prasmę, aš priėmiau jį besąlygiškai, bet tuo pat metu aš priėmiau ir pačią save, išsivadavau iš
                        neteisybės skausmo, pykčio, kaltinimo, kaltės, vietoj to atsirado suvokimas, kad viskas turi
                        prasmę, kad vyksta dėl manes ir aš pati kuriu savo gyvenimą. Atsirado dar daugiau geros
                        savijautos ir energijos daryti tai kas svarbu gyvenime .
                    </p>
                    <p>
                        Šiai dienai tai padeda priimti save, kitus žmones ir kurti prasmingus santykius. Iš gyvenimo
                        dingo situacijos kurios keldavo klausimus “kodėl man?”. Jaučiu dvasinės prabangos–harmonijos ir įkvėpimo kaip niekados gyvenime.
                    </p>
                    <p className="fw-bolder">
                        Todėl aš šiandien jaučiuosi pašaukta tuo dalintis su tavimi, savo įgūdžiais, metodais ir įrankiais,
                        kad patirtum kaip žmogus gali jaustis ir turėti geros savijautos bei energijos atsikratant to kas
                        slegia.
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