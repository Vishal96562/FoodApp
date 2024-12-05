import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Signup() {

    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:9000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        })
        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert("Enter valid Credentials");
        }
    }

    const onChange = (e) => {

        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div><Navbar></Navbar></div>
            <div className='card mt-5 mx-auto border  border-danger' style={{ width: "35rem", height: "33rem", background: "beige", padding: "22px 5px" }}>
                <div className='card-body'>
                    <h3 className='card-title text-center'>SIGN-UP</h3>
                    <div className='container'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">User Name</label>
                                <input type="text"
                                    className="form-control"
                                    name='userName'
                                    value={credentials.name}
                                    onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name='email'
                                    value={credentials.email}
                                    onChange={onChange}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name='password'
                                    value={credentials.password}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    name='geolocation'
                                    value={credentials.geolocation}
                                    onChange={onChange}
                                />
                            </div>
                            <button type="submit" className=" m-3 btn btn-success">Submit</button>
                            <Link to="/Login" className=" m-3 btn btn-danger ">Already a user</Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Signup