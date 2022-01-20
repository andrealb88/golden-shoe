
import React from 'react'


const Button = ({value, floatRight}) => {
    return (
        <div className="button-container">
            <button className={floatRight ? "float-right btn" : 'btn'}>{value}</button>
        </div>
    )
}

export default Button;