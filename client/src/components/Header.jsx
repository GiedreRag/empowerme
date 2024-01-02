import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-middle align-items-center mb-4 border-bottom">
                <Link to="/" className="mb-md-0 me-md-auto">
                    <img 
                        src="https://media.canva.com/1/image-resize/1/500_500_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vNzVsWS9NQUVfUGRvNzVsWS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAALMkqn08CI_8u_P4iI9Wia3dLSeR1rXMHFzP_4T8Zc0j&amp;exp=1704199119&amp;x-canva-quality=screen&amp;csig=AAAAAAAAAAAAAAAAAAAAANudEeF02Rgevzm1xaBHT2veiLsZrFlbMH03sWd-ENZH" 
                        alt="logo of Monica Empower"
                        style={{ width: '110px', height: 'auto'}}
                    />
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link text-body-secondary">START HERE</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link text-body-secondary">MY STORY</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link text-body-secondary">SESSIONS WITH ME</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link text-body-secondary">CONTACT ME</Link></li>
                </ul>
            </header>
        </div>
    );
}