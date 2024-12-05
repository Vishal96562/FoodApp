import Modal from '../Modal';
import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../screen/Cart';
import { useCart } from './ContextReducer';
const Navbar = () => {

    const [cartView, setCartView] = useState(false)
    const data = useCart();
    const naivgate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("authToken")
        naivgate("/");

    }
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1" to="">Food</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-7" aria-current="page" to="/">Home</Link>
                            </li>

                            {
                                (localStorage.getItem("authToken")) ?
                                    <li className="nav-item">
                                        <Link className="nav-link active fs-7" aria-current="page" to="/MyOrder" >My Orders</Link>
                                    </li> : ""
                            }
                        </ul>
                        {(!localStorage.getItem("authToken")) ?

                            <div className='d-flex'>
                                <Link className="btn  text-success bg-white mx-1" to="/Login">Login</Link>

                                <Link className="btn text-success bg-white mx-1" to="/createuser">SignUp</Link>
                            </div> :
                            <div>
                                <div className="btn text-success bg-white mx-2" onClick={() => setCartView(true)}>
                                    My Card
                                    <Badge pill bg='danger'>{data.length}</Badge>
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)}> <Cart></Cart>  </Modal> : ""}

                                <div className="btn text-danger bg-white mx-2" onClick={handleLogout}>Logout</div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;