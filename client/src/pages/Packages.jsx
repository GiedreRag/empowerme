import { NavLink } from 'react-router-dom';
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
                                    <h2 className="card-title pricing-card-title mb-4 mt-lg-3">£ 1,699</h2>
                                    <ul className="list-unstyled m-lg-4">
                                        <li className="mb-4">{translations.packages_sum_1_1}</li>
                                        <li className="mb-4">{translations.packages_sum_1_2}</li>
                                        <li className="mb-4">{translations.packages_sum_1_3}</li>
                                        <li className="mb-5">{translations.packages_sum_1_4}</li>
                                    </ul>
                                    {/* <button type="button" className="btn btn-outline-secondary btn-sm px-4 me-3 mb-3">{translations.packages_more}</button> */}
                                    <NavLink to="/contact" type="button" className="btn btn-outline-secondary btn-sm px-2 mb-3">{translations.packages_contact}</NavLink>
                                </div>
                                <div className="p-xl-4 d-flex align-items-center justify-content-center text-center">
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