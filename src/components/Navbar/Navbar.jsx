import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container text-uppercase py-4">
                    <Link className="navbar-brand text-uppercase" to="">start Framework</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="portfolio">portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">contact</Link>
                            </li>
        
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
