import React, { useEffect, useRef, useState } from 'react';
import Food from '../img/image.png'
import { useDispatchCard, useCart } from './ContextReducer';
const Card = (props) => {

    let dispatch = useDispatchCard();
    let data = useCart();

    let options = props.options;
    // for storing and sending default value of card 
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const priceRef = useRef()

    let priceOptions = Object.keys(options);

    const handleAddtoCard = async () => {

        let food = null;
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        if (food) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty, img: props.foodItem.img })
                return;
            }
            else {
                await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.foodItem.img })
                return;
            }
        }
        await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.foodItem.img })
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value);
    })
    return (

        <div>
            <div className="card mt-5 border border-2 border-secondary" style={{ "width": "18rem" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
                <div className="card-body" style={{ "background": " #465c6887" }}>
                    <h5 className='card-title'>{props.foodItem.name}</h5>
                    {/* <p className="card-text"> and make up the bulk of the card's content.</p> */}
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>

                        <div className='d-inline h-100 fs-1.25'>
                            {finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-success justify-content center ms-2' onClick={handleAddtoCard}>Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default Card;