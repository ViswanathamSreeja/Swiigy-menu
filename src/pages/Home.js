import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Jumbo from '../components/Jumbo'
export const Home = () => {
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [all, setAll] = useState(false)
    useEffect(() => {
        setAll(true)
    }, [])

    const loadRec = () => {
        setAll(false)
        setName("Recommended")
        setProducts(Recommended)
    }
    const loadfav = () => {
        setName("Favourite")
        setAll(false)

        setProducts(Favourite)
    }
    const loadWaff = () => {
        setAll(false)
        setName("Waffles")
        setProducts(Waffles)
    }
    const loadLess = () => {
        setAll(false)
        setName("Less Sugar Weffles And Pancakes")
        setProducts(LessSugar)
    }
    const loadCakes = () => {
        setAll(false)
        setName("Cakes")
        setProducts(Cakes)
    }
    const handleRec = () => {
        loadRec()
    }
    const handleFav = () => {
        loadfav()
    }
    const handleWaff = () => {
        loadWaff()
    }
    const handleLess = () => {
        loadLess()
    }
    const handleCakes = () => {
        loadCakes()
    }
    const MouseOver = (e) => {
        e.target.style.color = "darkorange"

    }
    const MouseOut = (e) => {
        e.target.style.color = ""
    }

    const Recommended = [
        { description: "3 Belgian Chocolate Milk Waffle + 1 Free Delight", price: "$15", alt: "Buy belgian chocolate waffle & select 1 free waffle or pancake from our top picks", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/hx6fkyp8f31inriphn01" },
        { description: "Belgian Chocolate Milk Waffle", price: "$14", alt: "Classic crispy waffle + melted belgian milk chocolate. Simplicity at its best.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d3wpzqrefyxrqurk5yfl" },
        , { description: "Butterscotch Crunch Waffle", price: "$13", alt: "Classic crispy waffle + crunchy butterscotch fudge. Go on indulge.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/rnxqpsq1e3i6ayc9udbw" },
        , { description: "Classic crispy waffle + melted chocolate infused with coffee crumbs", price: "$15", alt: "Coffee Mocha Waffle", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fet9xehlekysxdt2skwv" },
        , { description: "Naked Nutella Waffle", price: "$15", alt: "Classic crispy waffle + premium european chocolate hazelnut ", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/k3jdccpbgwul18fjljxv" },

    ]
    const Favourite = [
        { description: "3 Belgian Chocolate Dark Waffle + 1 Free Delight", price: "$15", alt: "Buy belgian chocolate waffle & select 1 free waffle or pancake from our top picks", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y658cs8btjpjv3hyaqnm" },
        { description: " 3 Belgian Chocolate Milk Waffle + 1 Free Delight", price: "$14", alt: " Buy belgian chocolate waffle & select 1 free waffle or pancake from our top picks", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/hx6fkyp8f31inriphn01" },
    ]
    const Waffles = [
        { description: "Honey Butter Waffle", price: "$15", alt: "Classic crispy waffle + warm melted butter with a golden honey drizzle. An american classic.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zsshvj3atjd12bxvlmur" },
        { description: "Maple Butter Waffle", price: "$14", alt: "Classic crispy waffle + warm melted butter with maple syrup drizzle. An american classic.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/moflo6jdqiikzgxvfar1" },
        { description: "Strawberry Creamcheese Waffle", price: "$13", alt: "Classic crispy waffle + strawberry compote layered with philadelphia style cream cheese. Deliciously tart.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/pphic2rhouetgrm1ycsz" },
        { description: "Blueberry Creamcheese Waffle", price: "$15", alt: "Double the chocolate,less than half the calories 67% less sugar with signature dark chocolate batter + melted belgian milk chocolate", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/boqkmqhqlseazwedsyrh" },
        { description: "Belgian Chocolate Milk Waffle", price: "$15", alt: " Classic crispy waffle + melted belgian milk chocolate. Simplicity at its best.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/rnxqpsq1e3i6ayc9udbw" },]
    const LessSugar = [
        { description: "67% Less Sugar Belgian Chocolate Milk Waffle", price: "$15", alt: "67% less sugar for the conscious chocoholic in a classic crispy waffle + melted belgian milk chocolate.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/k3jdccpbgwul18fjljxv" },
        { description: "67% Less Sugar Belgian Chocolate Dark Waffle", price: "$14", alt: "Classic crispy waffle + blueberry compote layered with philadelphia style cream cheese. Deliciously tart.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/urgeamo1nkasrdl6lsjk" },
        , { description: "67% Less Sugar Chocolate Overload Milk Waffle", price: "$15", alt: "67% less sugar for the conscious chocoholic in a classic crispy waffle + melted belgian dark chocolate.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jslrolhpo8bjegajmvuj" },
    ]
    const Cakes = [
        { description: "Kiki And Oreo Cream Waffle Cake (Double Layer)", price: "$15", alt: "Signature dark chocolate double layer waffle cake layered inside and out with creamy white, milk and dark melted belgian chocolate. Triple the chocolate, triple the fun.", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vtv6o3ymfybsxleaw1zj" },
        { description: "67% Less Sugar Chocolate Overload Dark Waffle", price: "$15", alt: "Signature dark chocolate double layer waffle cake layered inside and out with creamy white, milk and dark melted belgian chocolate. Triple the chocolate, triple the fun. ", img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/rvyfvsyn2ipoesoluc45" },]

    return (
        <>

            <Jumbotron />
            <div className="row" >
                <div className="col-md-2 ml-5">
                    <div style={{ cursor: "pointer", fontSize: "90%" }}>
                        <div className="d-flex align-items-end flex-column" style={{ fontSize: "90%" }}>
                            <div style={{ color: "darkorange", fontWeight: "700" }} onClick={handleRec}>Recommended</div>
                            <div onMouseOut={MouseOut} onMouseOver={MouseOver} onClick={handleFav}>All-Time Favourite Specials</div>
                            <div onMouseOut={MouseOut} onMouseOver={MouseOver} onClick={handleWaff}>Waffles</div>
                            <div onMouseOut={MouseOut} onMouseOver={MouseOver} onClick={handleLess}>Less Sugar Waffles </div>
                            <div onMouseOut={MouseOut} onMouseOver={MouseOver} onClick={handleCakes}>Waffle Cakes</div>
                        </div>
                    </div>

                </div>
                <div style={{ borderRight: "1px solid lightgrey" }}></div>

                <div className="col-md-6 ml-3">

                    {all ? (
                        <>
                            <h2>Recommended</h2>
                            <p style={{ color: "grey" }}>{Recommended.length} items</p>
                            {Recommended.map(r => (

                                <div><ProductCard r={r} />
                                    <hr />
                                </div>

                            ))}
                            <h2 className="mt-5">All-Time Favourite Specials</h2>
                            <p style={{ color: "grey" }}>{Recommended.length} items</p>

                            {Favourite.map(r => (
                                <div><ProductCard r={r} />
                                    <hr />
                                </div>
                            ))
                            }
                            <h2 className="mt-5">Waffles</h2>
                            <p style={{ color: "grey" }}>{Recommended.length} items</p>

                            {Waffles.map(r => (
                                <div><ProductCard r={r} />
                                    <hr />
                                </div>
                            ))}
                            <h2 className="mt-5">Less Sugar Waffles And Pancakes</h2>
                            <p style={{ color: "grey" }}>{Recommended.length} items</p>

                            {
                                LessSugar.map(r => (
                                    <div><ProductCard r={r} />
                                        <hr />
                                    </div>
                                ))

                            }
                            <h2 className="mt-5">Waffel cakes</h2>
                            <p style={{ color: "grey" }}>{Recommended.length} items</p>

                            {
                                Cakes.map(r => (
                                    <div><ProductCard r={r} />
                                        <hr />
                                    </div>
                                ))

                            }
                        </>) : (
                        <>
                            <h2>{name}</h2>
                            <p style={{ color: "grey" }}>{Waffles.length} items</p>

                            {
                                products.map(r => (
                                    <div><ProductCard r={r} />
                                        <hr />
                                    </div>
                                ))
                            }
                        </>)
                    }


                </div>

                <div className="col-md-3" >
                    <div className="container-fluid">

                        <h3 style={{ color: "grey" }}>Cart Empty</h3>

                        <div><img src="data:image/jpeg;base64,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" /></div>
                        <div><p style={{ color: "grey" }}>Good food is always cooking! Go ahead, order some yummy items from the menu.</p></div>
                    </div>
                </div>
            </div >
            <Jumbo />
        </>
    )
}
export default Home