import React, { useState } from 'react';
import '../Contact/contact.css';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function submit(e) {
        e.preventDefault();
        const { name, email, age, password } = formData;

        if (!name || !email || !age || !password) {
            setError('Please fill in all fields');
            setSuccess('');
        } else {
            setError('');
            setSuccess('Message sent successfully! 🎉');
            setFormData({
                name: '',
                email: '',
                age: '',
                password: ''
            });
        }
    }

    return (
        <>
            <div className="contact py-5">
                <div className="container py-5 d-flex justify-content-center align-items-center flex-column">
                    <h1 className='text-uppercase text-center'>contact section</h1>
                    <div className="star pb-5 d-flex justify-content-center align-items-center flex-row">
                        <div className="line"></div>
                        <div className="icon px-4">
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="line"></div>
                    </div>

                    <div className="form w-50">
                        <form onSubmit={submit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingName"
                                    placeholder="userName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingName">UserName:</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingInput">UserEmail:</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="floatingAge"
                                    placeholder="UserAge"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingAge">UserAge:</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingPassword">UserPassword:</label>
                            </div>

                            {error && <p className="text-danger">{error}</p>}
                            {success && <p className="text-success">{success}</p>}

                            <button type="submit" className='btn btn-success'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
