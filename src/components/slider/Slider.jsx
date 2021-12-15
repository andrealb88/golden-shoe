
import React from 'react'
import './Slider.css'
import Button from '../button/Button'

const Slider = () => {
    return (
        <div className="main-image">
            <div class="img-content">
                <div style={{backgroundImage:url("../../assets/apparel-footwear-shoe-clothing.jpg")}}></div>
                <p>THINKING OF BUYING A SHOES</p>
                <h2>
                    Trending <br /> Shoes
                </h2>
                <Button value='Shop Now'/>
            </div>
        </div>
    )
}

export default Slider;