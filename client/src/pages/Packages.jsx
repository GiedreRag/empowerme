import StickyContactMessage from '../components/StickyContactMessage';
import { useLanguage } from '../context/LanguageContext';
import spaImg from '../assets/emp.spa.jpg';
import style from '../components/Packages.module.css';

export function Packages() {
    const { language } = useLanguage();

    const translations = require(`../locales/${language}/translation.json`);

    return (
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-1 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 mt-lg-3 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">{translations.packages_title_1}</h4>
                            </div>
                            <div className="row row-cols-1 row-cols-lg-2 p-3">
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title mb-4">€1,988</h1>
                                    <ul className="list-unstyled m-lg-4">
                                        <li className="mb-4">{translations.packages_sum_1_1}</li>
                                        <li className="mb-4">{translations.packages_sum_1_2}</li>
                                        <li className="mb-4">{translations.packages_sum_1_3}</li>
                                        <li className="mb-5">{translations.packages_sum_1_4}</li>
                                    </ul>
                                    <p>
                                    {translations.packages_more} {' '}
                                        <a href="https://bookretreats.com/r/3-day-1-to-1-transformational-retreat-in-london-uk" target="_blank" rel="noopener noreferrer">
                                            bookretreats.com
                                        </a>
                                    </p>
                                    {/* <button type="button" className="w-30 btn btn-lg btn-outline-dark me-2">Daugiau informacijos</button> */}
                                    {/* <button type="button" className="w-30 btn btn-lg btn-outline-dark">Pirkti</button> */}
                                </div>
                                <div className="p-xl-5 d-flex align-items-center justify-content-center text-center">
                                    <img src={spaImg} alt="Spa" className={style.spaImg}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <StickyContactMessage />
            </div>
        </main>
    )
}