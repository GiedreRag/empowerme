import style3 from '../css/Global.module.css';

export function Packages() {
    const handleContactClick = () => {
        window.location.href = '/susisiekti';
    };

    return (
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Pirmas</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">€10<small className="text-body-secondary fw-light">/mėn</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Pirmas</li>
                            <li>Antras</li>
                            <li>Trečias</li>
                            <li>Ketvirtas</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-outline-dark">Pirkti</button>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Antras</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">€15<small className="text-body-secondary fw-light">/mėn</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Pirmas</li>
                            <li>Antras</li>
                            <li>Trečias</li>
                            <li>Ketvirtas</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-outline-dark">Pirkti</button>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Trečias</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">€20<small className="text-body-secondary fw-light">/mėn</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Pirmas</li>
                            <li>Antras</li>
                            <li>Trečias</li>
                            <li>Ketvirtas</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-outline-dark">Pirkti</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div
                    className={style3.stickyContact}
                    onClick={handleContactClick}
                    role="button"
                    tabIndex={0}
                >
                    30 minučių nemokama sesija!
                </div>
            </div>
        </main>
    )
}