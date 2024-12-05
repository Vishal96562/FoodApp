import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
const Login = () => {

    const [credentials, setcredentials] = useState({ email: "", password: "" });  //instead use useRef

    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:9000/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: credentials.email, password: credentials.password, }) // backend me yhi body jayega
        })
        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert("Enter valid Credentials");
        }
        if (json.success) {
            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken", json.authToken);
            navigate("/");
        }
    }

    const onChange = (e) => {

        setcredentials({ ...credentials, [e.target.name]: e.target.value }) //event.target.value come form DOM(document object module)
    }

    return (
        <>
            <div><Navbar></Navbar></div>
            <div className='card mt-5 mx-auto border border-danger' style={{ width: "30rem", height: "28rem", background: "beige", padding: "22px 5px" }}>
                <div className='card-body'>
                    <h3 className='card-title text-center'>LOGIN</h3>
                    <div className='container'>
                        <form onSubmit={handleSubmit}>
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
                            <button type="submit" className=" m-3 btn btn-success">Submit</button>
                            <Link to="/createuser" className=" m-3 btn btn-danger ">NewUser</Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
};

export default Login;
