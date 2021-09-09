import React, { useState } from 'react'
import Modal from "react-modal"
export const ProductCard = ({ r }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const { description, price, alt, img } = r
    const handleClick = () => {

    }
    return (
        <>
            <div className="d-flex justify-content-between">
                <div>
                    <div className="mb-2"><i className="bi bi-circle-square" style={{ color: "green" }}></i></div>
                    <div className="mb-2"><h6>{description}</h6></div>
                    <div style={{ fontSize: "90%" }}>
                        <div className="mb-2">{price}</div>
                        <div classname="mb-2" style={{ color: "gray" }}>{alt}</div>
                    </div>
                </div>

                <div className="d-flex justify-content-center" style={{ flexDirection: "column", alignItems: "center" }}>
                    <div>  <img onClick={() => setModalVisible(true)} style={{ borderRadius: "10px" }} width="140" height="90" src={img} />
                    </div> <Modal isOpen={modalVisible}
                        onRequestClose={() => setModalVisible(false)}

                        style={{
                            overlay: {
                                position: 'fixed',
                                top: "40px",
                                left: "300px",
                                right: "300px",
                                bottom: "40px",

                            },
                            content: {
                                position: 'absolute',
                                top: '40px',
                                left: '40px',
                                right: '40px',
                                bottom: '40px',
                                border: '1px solid #ccc',
                                background: '#fff',
                                overflow: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                borderRadius: '4px',
                                outline: 'none',
                                padding: '20px'
                            }
                        }}>
                        <div className="d-flex justify-content-center" style={{ flexDirection: "column", alignItems: "center" }}>
                            <img width="350" height="150" src={img} style={{ borderRadius: "10px", padding: "3px" }} />
                            <div style={{ display: "block" }} >
                                <button onClick={handleClick} className="btn btn-sm btn-outline-secondary pl-4 pr-4" style={{ display: "block", marginTop: "-15px", textAlign: "center", color: "darkgreen", backgroundColor: "white" }}><h6>ADD</h6></button>
                            </div>
                            <div style={{ alignItems: "center", fontSize: "70%" }}>
                                <div className="mb-2"><i className="bi bi-circle-square" style={{ color: "green" }}></i></div>
                                <div className="mb-2"><h6>{description}</h6></div>
                                <div style={{ fontSize: "90%" }}>
                                    <div className="mb-2">{price}</div>
                                    <div classname="mb-2" style={{ color: "gray" }}>{alt}</div>
                                </div>
                            </div>
                        </div>  </Modal>
                    <div style={{ display: "block", marginTop: "-5px", textAlign: "center", }} >
                        <button onClick={handleClick} className="btn btn-sm btn-outline-secondary pl-4 pr-4" style={{ display: "block", marginTop: "-15px", textAlign: "center", color: "darkgreen", backgroundColor: "white" }}><h6>ADD</h6></button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ProductCard