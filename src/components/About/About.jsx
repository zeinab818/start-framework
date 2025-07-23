import React from 'react'
import '../About/about.css'
export default function About() {
    return (
        <>
            <div className="about py-5">
                <div className="container py-5 d-flex justify-content-center align-items-center flex-column">
                    <h1 className='text-uppercase text-center'>about component</h1>
                    <div className="star  d-flex justify-content-center align-items-center flex-row">
                        <div className="line">
                        </div>
                        <div className="icon px-4">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className="line">

                        </div>
                    </div>
                    <div className="row py-5 g-5">
                        <div className="col-lg-6 col-12">
                            <div className="inner">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="inner">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
