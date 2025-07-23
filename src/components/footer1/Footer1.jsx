import React from 'react'
import '../footer1/footer1.css'

export default function Footer1() {
    return (
        <>
            <div className="footer-1">
                <div className="container py-3 ">
                    <div className="row py-5 g-4">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="location d-flex justify-content-center align-items-center flex-column">
                                <h1 className='text-upper title'>location</h1>
                                <p>2215 John Daniel Drive</p>
                                <p className='pt-2'>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="web d-flex justify-content-center align-items-center flex-column">
                                <h1 className='text-upper title'>AROUND THE WEB</h1>
                                <div className="icons d-flex justify-content-between align-items-center">
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-linkedin-in"></i>
                                    <i class="fa-solid fa-globe"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="freelance text-center  d-flex justify-content-center align-items-center flex-column">
                                <h1 className='text-upper title'>ABOUT FREELANCER</h1>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
