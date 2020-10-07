import React from 'react'
import "./Home.css"
import home_img from './img/home_img.jpg'

function Home() {
    window.scrollTo(0, 0);

    return (
        <div>
            <img src={home_img} alt=""/>
        </div>
    )
}

export default Home
