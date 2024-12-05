import foodimage1 from '../img/image1.png'
import foodimage2 from '../img/image2.png'
import foodimage from '../img/image.png'

const Carousel = () => {

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

            <div className="carousel-inner">
                <div className='carousel-caption' style={{ zIndex: "10" }}>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success bg-success text-white" type="submit">Search</button>
                    </form>
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
    )
}

export default Carousel;