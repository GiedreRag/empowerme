import StickyContactMessage from '../components/StickyContactMessage';
import spaImg from '../assets/emp.spa.jpg';
import style from '../components/Packages.module.css';

export function Packages() {

    return (
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-1 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">3 Day 1-to-1 Transformational Retreat in London UK</h4>
                            </div>
                            <div className="row row-cols-1 row-cols-lg-2 p-3">
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">€1,988</h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li class="mb-3">Now is the best time to experience the breakthrough in your life!</li>
                                        <li class="mb-3">Find the key to mastering your mind & life to have greater freedom, balance, and inspiration.</li>
                                        <li class="mb-3">2 nights, and 3 days of one-to-one personal sessions with you at your private transformational retreat.</li>
                                        <li class="mb-3">Transform, experience & know how to use human transformation tools for the rest of your life!</li>
                                        <li class="mb-2">The sessions will take place in the restaurant and your room.</li>
                                    </ul>
                                    <p>
                                        For more information and to book, visit {' '}
                                        <a href="https://bookretreats.com/r/3-day-1-to-1-transformational-retreat-in-london-uk" target="_blank" rel="noopener noreferrer">
                                            bookretreats.com
                                        </a>
                                    </p>
                                    {/* <button type="button" className="w-30 btn btn-lg btn-outline-dark me-2">Daugiau informacijos</button> */}
                                    {/* <button type="button" className="w-30 btn btn-lg btn-outline-dark">Pirkti</button> */}
                                </div>
                                <div className="p-4 d-flex align-items-center justify-content-center text-center">
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