import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import monicaContactImg from '../assets/monica-contact-img.png';
import style from '../components/ContactMe.module.css';
import { FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';
import SuccessMessage from '../components/SuccessMessage';

export function ContactMe() {
    const { language } = useLanguage();
    const translations = require(`../locales/${language}/translation.json`);

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [nameValid, setNameValid] = useState(false);
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [message, setMessage] = useState('');
    const [messageErr, setMessageErr] = useState('');
    const [messageValid, setMessageValid] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    function updateName(e) {
        setName(e.target.value);
    }

    function updateEmail(e) {
        setEmail(e.target.value);
    }

    function updateMessage(e) {
        setMessage(e.target.value);
    }

    function isValidNameFormat(name) {
        const nameWords = name.split(' ');
        if (nameWords.length < 1 || nameWords.length > 3) {
            return false;
        } 

        for (const word of nameWords) {
            if (word && word[0] !== word[0].toUpperCase()) {
                return false;
            }
        }

        return true;
    }

    function isValidName() {
        const minNameSize = 2;
        const maxNameSize = 60;

        if (!isValidNameFormat(name)) {
        setNameErr(`Vardas turi susidėti iš vieno, dviejų ar trijų zodziu, kurių kiekvienas prasideda didžiąją raide. Galima naudoti tik raides.`);
        setNameValid(false);
        } else if (name.length < minNameSize) {
            setNameErr(`Privaloma mažiausiai ${minNameSize} simboliai.`);
            setNameValid(false);
        } else if (name.length > maxNameSize) {
            setNameErr(`Leidžiama daugiausiai ${maxNameSize} simbolių.`);
            setNameValid(false);
        } else {
            setNameErr(false);
            setNameValid(true);
        }
    }

    function isValidEmail() {
        const minEmailSize = 6;
        const maxEmailSize = 100;
        const atSymbol = email.indexOf('@');
        const dotSymbol = email.lastIndexOf('.');
        const atSymbolCount = email.split('@').length - 1;
        const topLevelDomain = email.slice(dotSymbol + 1);

        if (email.length < minEmailSize) {
            setEmailErr(`Privaloma mažiausiai ${minEmailSize} simboliai.`);
            setEmailValid(false);
        } else if (email.length > maxEmailSize) {
            setEmailErr(`Leidžiama daugiausiai ${maxEmailSize} simbolių.`);
            setEmailValid(false);
        } else if (!email.includes('@')) {
            setEmailErr(`Trūksta "@" simbolio.`);
            setEmailValid(false);
        } else if (atSymbolCount > 1) {
            setEmailErr(`Leidžiamas tik 1 "@" simbolis.`);
            setEmailValid(false);
        } else if (atSymbol > dotSymbol - 3 || dotSymbol === -1) {
            setEmailErr(`Netinkamas email formatas, pavyzdys: example@example.com`);
            setEmailValid(false);
        } else if (topLevelDomain.length < 2 || topLevelDomain.length > 4) {
            setEmailErr(`Netinkamas top-level domain.`);
            setEmailValid(false);
        } else {
            setEmailErr(false);
            setEmailValid(true);
        }
    }

    function isValidMessage() {
        const minMessageSize = 2;
        const maxMessageSize = 500;

        if (message.length < minMessageSize) {
            setMessageErr(`Privaloma mažiausiai ${minMessageSize} simboliai.`);
            setMessageValid(false);
        } else if (message.length > maxMessageSize) {
            setMessageErr(`Leidžiama daugiausiai ${maxMessageSize} simbolių.`);
            setMessageValid(false);
        } else {
            setMessageErr(false);
            setMessageValid(true);
        }
    }

    function submitHandler(e) {
        e.preventDefault();

        if (name && email && message) {
            fetch('http://localhost:3001/api/submission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ 
                    name, 
                    email, 
                    message }),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'err-list') {
                        for (const item of data.errors) {
                            if (item.input === 'name') {
                                setNameErr(item.msg);
                            }
                            if (item.input === 'email') {
                                setEmailErr(item.msg);
                            }
                            if (item.input === 'message') {
                                setMessageErr(item.msg);
                            }
                        }
                    }
                    if (data.status === 'ok') {
                        setName('');
                        setEmail('');
                        setMessage('');
                        setNameErr('');
                        setEmailErr('');
                        setMessageErr('');
                        setNameValid(false);
                        setEmailValid(false);
                        setMessageValid(false);
                        setShowSuccessMessage(true);
                        return navigate('/contact');
                    }
                })
                .catch(err => console.error(err));
        } 
    }

    return (
        <div className="container">
            <div className="row">
                <div className={`col-sm-12 col-lg-6 col-xl-8 p-lg-3 mb-2 ${style.textContainer}`}>
                    <h5 className="mb-4">{translations.contact_me_sentence}</h5>
                    <div className="d-flex mt-3">
                        <i className="me-2"><FaPhone /></i>
                        <p>+44 7000 20000</p>
                    </div>
                    <div className="d-flex mt-3">
                        <i className="me-2"><FaFacebook /></i>
                        <p>Monica Empower</p>
                    </div>
                    <div className="d-flex mt-3">
                        <i className="me-2 mb-5"><FaInstagram /></i>
                        <p>Monica Empower</p>
                    </div>
                    <h5>{translations.write_message}</h5>
                    <form onSubmit={submitHandler}>
                        <div className="mb-3 mt-3">
                            <label htmlFor="name" className="form-label">{translations.name}</label>
                            <input 
                                type="text"
                                className={`form-control ${nameErr ? 'is-invalid' : ''} ${nameValid ? 'is-valid' : ''}`}
                                onBlur={isValidName}
                                id="name"
                                name="name"
                                value={name}
                                onChange={updateName}
                                required
                            />
                            <div className="invalid-feedback">{nameErr}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">{translations.email}</label>
                            <input 
                                type="email"
                                className={`form-control ${emailErr ? 'is-invalid' : ''} ${emailValid ? 'is-valid' : ''}`}
                                id="email"
                                name="email"
                                value={email}
                                onChange={updateEmail}
                                onBlur={isValidEmail}
                                required 
                            />
                            <div className="invalid-feedback">{emailErr}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">{translations.message}</label>
                            <textarea 
                                className={`form-control ${messageErr ? 'is-invalid' : ''} ${messageValid ? 'is-valid' : ''}`}
                                id="message"
                                name="message"
                                value={message}
                                onChange={updateMessage}
                                onBlur={isValidMessage}
                                required
                            />
                            <div className="invalid-feedback">{messageErr}</div>
                        </div>
                        <button type="submit" className="btn btn-dark">{translations.send}</button>
                    </form>
                    {showSuccessMessage && (
                        <SuccessMessage onClose={() => setShowSuccessMessage(false)} />
                    )}
                </div>
                <div className={`col-sm-12 col-lg-6 col-xl-4 mt-4 d-flex align-items-center justify-content-center`}>
                    <img src={monicaContactImg} alt="Monica" className={style.monicaImg}/>
                </div>
            </div>
        </div>
    )
}