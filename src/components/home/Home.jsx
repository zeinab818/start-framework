import React from 'react'
import home from '../../assets/avataaars.svg'
import '../home/home.css'
export default function Home() {
    return (
        <>
            <div className="home">
                <div className="container py-5 d-flex justify-content-center align-items-center flex-column">
                    <div className="images w-25 py-3 d-flex justify-content-center ">
                        <img src={home} alt="home"  className='w-75'/>
                    </div>
                    <div className="content">
                        <h1 className='text-uppercase'>start Framework</h1>
                    </div>
                    <div className="star  d-flex justify-content-center align-items-center flex-row">
                        <div className="line">
                        </div>
                        <div className="icon px-4">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className="line">

                        </div>
                    </div>
                    <div className="dd py-3">
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
        </>
    )
}
