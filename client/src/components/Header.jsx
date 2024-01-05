import { Link } from "react-router-dom";
import style from '../components/Header.module.css';

export function Header() {
    return (
        <div className={style.headerContainer}>
            <header className="d-flex flex-wrap justify-content-middle align-items-center mb-4 border-bottom me-2 ms-2">
                <Link to="/" className="mb-md-0 me-md-auto">
                    <img 
                        src="https://media.canva.com/1/image-resize/1/500_500_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vNzVsWS9NQUVfUGRvNzVsWS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAALMkqn08CI_8u_P4iI9Wia3dLSeR1rXMHFzP_4T8Zc0j&amp;exp=1704199119&amp;x-canva-quality=screen&amp;csig=AAAAAAAAAAAAAAAAAAAAANudEeF02Rgevzm1xaBHT2veiLsZrFlbMH03sWd-ENZH" 
                        alt="logo of Monica Empower"
                        style={{ width: '110px', height: 'auto'}}
                    />
                </Link>

                <ul className="nav nav-pills">
                    {/* <li className="nav-item"><Link to="/" className="nav-link text-body-secondary">PRADĖK DABAR</Link></li> */}
                    <li className="nav-item"><Link to="/apie-mane" className="nav-link text-body-secondary">APIE MANE</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link text-body-secondary">PRODUKTAI</Link></li>
                    <li className="nav-item"><Link to="/susisiekti" className="nav-link text-body-secondary">SUSISIEKTI</Link></li>
                </ul>
            </header>
        </div>
    );
}