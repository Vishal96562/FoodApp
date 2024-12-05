import React from 'react'
import { useCart, useDispatchCard } from '../components/ContextReducer'
import trash from "../img/deleteImg.svg"
function Cart() {

    let dispatch = useDispatchCard()
    let data = useCart();
    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3' style={{ color: "white" }} >The Cart is Empty!</div>
            </div>
        )
    }

    const handleCheckout = async () => {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:9000/api/orderdata", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        })
        if (response.status === 200) {
            dispatch({ type: "DROP" })
        }
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)

    return (
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md' >
                <table className='table' >
                    <thead className='fs-4' style={{ color: "green" }}>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>
                            <th scope='col'>Amount</th>
                        </tr>
                    </thead>

                    <tbody style={{ color: "white" }}>
                        {data.map((food, index) => (
                            <tr key={food.name}>
                                <th scope="row">{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td><button type='button' className='btn p-0'><img src={trash} alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><h1 className='fs-2 ' style={{ color: "white" }}>Total Price:{totalPrice}/-</h1></div>
                <div>
                    <button className='btn bg-success mt-5' onClick={handleCheckout}>Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default Cart