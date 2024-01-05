import monicaContactImg from '../assets/monica-contact-img.png';
import style from '../components/ContactMe.module.css';
import { FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';

export function ContactMe() {
    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-12 col-lg-4 d-flex align-items-center justify-content-center`}>
                    <img src={monicaContactImg} alt="Monica" className={style.monicaImg}/>
                </div>
                <div className={`col-md-12 col-lg-8 mt-5 ${style.textContainer}`}>
                    <h2>Susisiek su manimi</h2>
                    <div className="d-flex mt-3">
                        <i className="me-2"><FaPhone /></i>
                        <p>+44 7000 200000</p>
                    </div>
                    {/* <div className="d-flex mt-3">
                        <i className="me-2"><FaEnvelope /></i>
                        <p>xxx@xxx.co.uk</p>
                    </div> */}
                    <div className="d-flex mt-3">
                        <i className="me-2"><FaFacebook /></i>
                        <p>Monica Empower</p>
                    </div>
                    <div className="d-flex mt-3">
                        <i className="me-2"><FaInstagram /></i>
                        <p>Monica Empower</p>
                    </div>
                </div>
            </div>
        </div>
    )
}