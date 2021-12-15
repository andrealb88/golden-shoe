
import React from 'react'
import './Slider.css'
import Button from '../button/Button'
import shoe from '../../assets/shoe.jpg'

const Slider = () => {
    return (
        <div className="main-image">
            <div class="img-content">
                 <div styles={{backgroundImage:`url(${shoe})`}}></div> 
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