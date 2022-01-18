import React from 'react'
import './Heading.css'

const Heading = ({ checkOut, personalInformation, trendingShoes }) => {
    return (
        <div className="heading">
            {!personalInformation ?
                <>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    {checkOut ?
                        <h2 id='checkout'>YOUR CART</h2>
                        :
                        trendingShoes ?
                            <h2 id='title'>TRENDING SHOES</h2>
                            :
                            null
                    }

                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </>
                :
                <h2>PERSONAL INFORMATION</h2>
            }
        </div>
    )
}

export const Heading2 = ({ addressInformation }) => {
    return (
        <div className="heading">
            {
                addressInformation ?
                    <h2><span>A</span> DDRESS <span>I</span> NF<span className="o">O</span>RMATION</h2>
                    :
                    <h2><span>P</span> LACE <span>O</span> R<span className="o">D</span>ER</h2>
            }
        </div>
    )
}
export default Heading;