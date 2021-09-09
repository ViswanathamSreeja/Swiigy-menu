import React from 'react'

export const Jumbo = () => {
    return (
        <>
            <div className="jumbotron mb-0" style={{ padding: "3.5em 3.5em", color: "gray" }} >
                <div className="row">
                    <div className="col"   >
                        <div style={{ textAlign: "center", color: "black" }}><h6>ADDRESS</h6></div>

                        <div className="m-4" style={{ borderBottom: "3px solid " }}></div>
                        <div className="pt-4" style={{ textAlign: "center" }}>The Belgian Waffle Co., Door No.10, Harleys Rd , Kilpauk,Chennai-10 Corp ward-103.</div>
                    </div>
                    <div className="col" >
                        <div style={{ textAlign: "center", color: "black" }} ><h6>CUISINES</h6></div>
                        <div className="m-4" style={{ borderBottom: "3px solid " }}></div>
                        <div className="pt-4" style={{ textAlign: "center" }}>Desserts,Beverages</div>

                    </div>

                </div>
                <div className="row mt-3 " style={{ justifyContent: "center" }}>
                    <img height="40px" width="60px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_162,h_80/fssai_final_edss9i" />
                </div>
                <div className="row mt-3" style={{ justifyContent: "center" }}>
                    <h6>  License No. 12418002005840</h6>
                </div>

            </div >
            <div className="jumbotron mb-0" style={{ backgroundColor: "black", padding: "3.5em 3.5em" }} >
                <div className="d-flex justify-content-around" style={{ color: "white", fontWeight: "500", fontSize: "80%" }}>
                    <div  >
                        <ul style={{ listStyle: "none", cursor: "pointer" }}>
                            <li style={{ color: "grey", marginBottom: "7px" }}>COMPANY</li>
                            <li>About us</li>
                            <li>Team</li>
                            <li>Careers</li>
                            <li>Swiggy blog</li>
                            <li>Bug Bounty</li>
                            <li>Swiggy Super</li>
                            <li>Swiggy Corporate</li>
                            <li>Swiggy Instamart</li>
                        </ul>
                    </div>
                    <div >
                        <ul style={{ listStyle: "none", cursor: "pointer" }}>
                            <li style={{ color: "grey", marginBottom: "7px" }}>CONTACT</li>
                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>
                        </ul>
                    </div>
                    <div >
                        <ul style={{ listStyle: "none", cursor: "pointer" }}>
                            <li style={{ color: "grey", marginBottom: "7px" }}>LEGAL</li>
                            <li>Terms & Conditions</li>
                            <li>Refund & Cancellation</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Offer Terms</li>
                            <li>Phishing & Fraud</li>
                        </ul>
                    </div>
                    <div >
                        <ul style={{ listStyle: "none", cursor: "pointer" }}>
                            <li><img width="110px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" /></li>
                            <li className="mt-4"><img width="110px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" /></li>
                        </ul>
                    </div>


                </div>
                <div style={{ backgroundColor: "gray" }}><hr /></div>
                <div classname="container">
                    <p style={{ fontWeight: "500", color: "gray", fontSize: "80%" }}>We Deliver to</p>
                </div>
                <div className="d-flex justify-content-around " style={{ color: "white", fontWeight: "500", fontSize: "80%" }}>
                    <div>
                        <ul style={{ listStyle: "none", cursor: "pointer" }}>

                            <li>Adilabad</li>
                            <li>Ananthapur</li>
                            <li>Bihar</li>
                            <li>Banswada</li>

                        </ul>
                    </div>
                    <div >
                        <ul style={{ listStyle: "none", cursor: "pointer" }}>
                            <li>Calcutta</li>
                            <li>Dehradun</li>
                            <li>Dundigal</li>
                            <li>Gurugram</li>
                        </ul>
                    </div>
                    <div >
                        <ul style={{ listStyle: "none", cursor: "pointer" }}>
                            <li>Gangtok</li>
                            <li>Gauhati</li>
                            <li>Haryana</li>
                            <li>Hampi</li>

                        </ul>
                    </div>
                    <div >
                        <ul style={{ listStyle: "none", cursor: "pointer" }}>
                            <li>Nagaland</li>
                            <li>Nagpur</li>
                            <li>Puri</li>
                            <li>Pune</li>

                        </ul>
                    </div>


                </div>
            </div>


        </>
    )
}
export default Jumbo
