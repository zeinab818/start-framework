
import '../portfolio/portfolio.css'
import pic1 from '../../assets/poert1.png'
import pic2 from '../../assets/port2.png'
import pic3 from '../../assets/port3.png'
import React, { useState } from 'react';


export default function Portfolio() {

    const [selectedImg, setSelectedImg] = useState(null);
    const images = [pic1, pic2, pic3, pic3, pic2, pic1];

    function openImage(src) {
        setSelectedImg(src);
    }
    function closeImage() {
        setSelectedImg(null);
    }


    return (
        <>
            <div className="portfolio py-5">
                <div className="container py-5">
                <h1 className='text-uppercase text-center'>portfolio component</h1>
                    <div className="star pb-5  d-flex justify-content-center align-items-center flex-row">
                        <div className="line">
                        </div>
                        <div className="icon px-4">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className="line">

                        </div>
                    </div>
                    <div className="row py- g-5">
                        {images.map((img, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12">
                                <div className="image" onClick={() => openImage(img)}>
                                    <img className="w-100" src={img} alt="portfolio" />
                                    <div className="layer d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    {selectedImg && (
                        <div className="overlay" onClick={closeImage}>
                            <img className="popup-img" src={selectedImg} />
                            <button className="close-btn">✖</button>
                        </div>
                    )}

            </div>
            </div>
        </>
    )
}
