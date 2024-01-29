import React from 'react';
import monicaProductsImg from '../assets/monica-products-img.jpg';
import style from '../components/Products.module.css';
import StickyContactMessage from '../components/StickyContactMessage';

export function Products() {

    return (
        <div className="container">
            <div className="row">
                <div className={`col-sm-12 col-xl-7 mt-4 ${style.textContainer}`}>
                    <h4 className="mb-3">Produktai</h4>
                    <p>
                        Aš tikiu, kad tavo sėkmė gyvenime gali būti atrasta per programą vadinamą NAUJAS BŪDAS MYLĖTI - tai unikali, 100% efektyvi ir mokslu paremta sistema padėsianti tau atsikratyti pykčio, skausmingų praeities prisiminimų visiems laikams ir turėti daugiau energijos daryti tai kas svarbu gyvenime.
                    </p>
                    <p className="fw-bolder">
                        Ši sistema yra unikali ir efektyvi, nes naudoju šiuos žingsnius:
                    </p>
                    <p>
                        - Remiantis BALANSO dėsniu, jog viskas gyvenime turi priešingas puses: karštis-šaltis, diena-naktis, pliusas-minusas ir t.t. Mes sugrąžinam tavo SUVOKIMĄ Į BALANSĄ to ivykio metu. T.y. prie neigiamo įvykio pusės pridedame teigiamą pusę, surandant kaip tas skausmingas įvykis buvo tau tiek pat naudingas kiek ir žalingas, kokią naudą Tau jis davė nuo tada iki dabar.
                    </p>
                    <p>
                        Pamatant užslėptą įvykių dinamiką ir prasmę, kurių anksčiau nematei, kaip tas įvykis tau buvo tiek pat žalingas, pajaučiant dėkingumą ir atviros širdies jausmą, priekaištų nebelieka, tik noras padėkoti už tą patirtį.
                    </p>
                    <p>
                        - Tik subalansavus tavo ANTIATMINTĮ (pagal Oksfordo universiteto mokslininkus - kiekvienas emočiškai sukeltas įvykis turi užstrigusią fantaziją, o kaip aš norėjau, kad būtų) tu išsilaisvinsi iš emocijų ir skausmingų prisiminimų visiems laikams bei atrasi tau užslėptą dovaną - gerą savijautą ir energiją.
                    </p>
                    <p className="fw-bolder">
                       Daugybė žmonių jau išbandė šią programą ir džiaugiasi rezultatais. 
                    </p>
                    <p className="fw-bolder">
                       Prisijunk ir tu, nes gyventi su tuo visą gyvenimą yra daug sunkiau, tai atima energiją, sveikatą ir gadina santykį su savimi bei artimaisiais. 
                    </p>
                    <p className="fw-bolder">
                       Dirbant su savo protu jūs jausite daugiau energijos ir geros savijautos pokytį savo kūne jau po pirmos sesijos, o didžiausi pokyčiai išorėję bus pastebimi po 3 mėnesių.
                    </p>
                </div>
                <div className={`col-sm-12 col-xl-5 ps-xl-5 d-flex align-items-center justify-content-center text-center`}>
                    <div>
                        <img src={monicaProductsImg} alt="Monica" className={style.monicaImg}/>
                    </div>
                    <StickyContactMessage />
                </div>
            </div>
        </div>
    )
}