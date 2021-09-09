import React from 'react'

export const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron mb-0" style={{ backgroundColor: "#1E202D", padding: "2.5em 2.5em" }}>
                <div className="container-fluid " style={{ color: "whitesmoke" }}>
                    <div className="row">
                        <div className="col-md-3">
                            <img width="254" height="165" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4qivuqyviy3la2xqufn" />
                        </div>
                        <div className="col-md-6">
                            <h2 style={{ fontWeight: "300", fontSize: "32px", margin: "0", maxWidth: "538px" }}>The Belgian Waffle Co.</h2>
                            <div>
                                <div className="m-2 des">Desserts, Beverages</div>
                                <div className="m-2 des">Kllpauk, Kilpauk</div>
                            </div>
                            <div style={{ display: 'inline-block' }}>
                                <div style={{ display: 'inline-block', padding: "0 35px" }}>
                                    <div><i class="bi bi-star-fill"></i> 4.5</div>
                                    <div style={{ fontSize: "70%" }}>100+ Ratings</div>
                                </div>
                                <div style={{ display: 'inline-block', padding: "0 35px", borderLeft: "1px solid", borderRight: "1px solid" }}>
                                    <div>--min</div>
                                    <div>Delivery Time</div>
                                </div>
                                <div style={{ display: 'inline-block', padding: "0 35px" }}>
                                    <div>$20</div>
                                    <diiv>Cost for two</diiv>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div style={{ display: "inline-block", paddingRight: "10px", paddingLeft: "10px" }}>OFFER</div>

                            <div style={{
                                display: "block",
                                border: "1px solid", height: "80%", paddingTop: "20px", paddingLeft: "20px", fontSize: "95%"
                            }}>
                                < div style={{ display: "flex", alignItems: "center" }}>
                                    <span> <i className="bi bi-patch-check-fill mr-2"></i></span>
                                    20% off upto Rs 50 | use code TRYNEW</div>

                                <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
                                    <span>  <i className="bi bi-patch-check-fill mr-2"></i></span>
                                    20% off upto Rs 50 | use code TRYNEW
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="d-flex justify-content-around" style={{ marginTop: "-15px" }} >
                            <form style={{ display: "inline-block" }}>
                                <input type="text" placeholder="Search" />
                            </form>
                            <div style={{ display: "inline-block", backgroundColor: "white", padding: "0.5em 0.5em" }}><i className="bi bi-suit-spade-fill mr-3"></i>Pure Veg</div>
                            <div style={{ display: "inline-block", backgroundColor: "white", padding: "0.5em 0.5em" }}><i className="bi bi-suit-heart-fill mr-3"></i>Favourite</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Jumbotron