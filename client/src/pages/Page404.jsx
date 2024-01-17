import { useLanguage } from '../context/LanguageContext';

export function Page404() {
    const { language } = useLanguage();

    const translations = require(`../locales/${language}/translation.json`);

    return (
        <div className="container">
            <div className="row">
                <h1 className="col-12 display-1 text-center">404</h1>
                <p className="col-12 display-6 text-center">{translations.not_found_page}</p>
            </div>
        </div>
    )
}