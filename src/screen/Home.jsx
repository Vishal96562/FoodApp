import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Carousel from '../components/carousel';
import foodimage1 from '../img/image1.png'
import foodimage2 from '../img/image2.png'
import foodimage from '../img/image.png'
const Home = () => {

    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([])
    const [search, setSearch] = useState("")

    const loadData = async () => {
        let response = await fetch("http://localhost:9000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);

    }
    useEffect(() => {
        loadData();
    }, [])


    return (
        <>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{
                    objectFit: "contain !important", display: "block",
                    margin: "auto"
                }}>
                    <div className="carousel-inner">
                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div class="d-flex justify-content-center">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} />
                                {/* <button class="btn btn-outline-success bg-success text-white" type="submit">Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active" style={{ filter: "brightness(30%)", width: "100%", maxHeight: "300px" }}>
                            <img src={foodimage} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" style={{ filter: "brightness(30%)", width: "100%", maxHeight: "300px" }}>
                            <img src={foodimage1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" style={{ filter: "brightness(30%)", width: "100%", maxHeight: "300px" }}>
                            <img src={foodimage2} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container'>
                {
                    foodCat != [] ?
                        foodCat.map((data) => {
                            return (<div className='row mb-3'>
                                <div key={data._id} className=' fs-3 m-3'>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {
                                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                    <Card foodItem={filterItems}
                                                        options={filterItems.options[0]}
                                                    ></Card>
                                                </div>)
                                        })
                                }
                            </div>
                            )
                        })
                        : <div>"""""</div>
                }
            </div>
            <div><Footer /></div>
        </>
    )
};

export default Home;