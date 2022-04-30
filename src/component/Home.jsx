import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img className="card-img" src="/assets/bg.jpg" alt="Background"
                height="1000px"/>

                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container"></div>
                        <h5 className="card-title display-3 fw-bolber mb-0">NEW ARRIVALS!</h5>
                        <p className="card-text lead fs-2">CHECK OUT FOR ALL THE TRENDS</p>
                    </div>
            </div>
            <Products/>
        </div>
    )
}

