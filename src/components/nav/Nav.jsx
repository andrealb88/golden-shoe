import React, { useContext } from 'react' 
import { Link } from "react-router-dom";
import { CounterContext, CartContext } from '../../context/AppContext'
import Dropdown from '../dropdown/Dropdown'
import Button from '../button/Button'
import './Nav.css'


const Header = () => {
    let count = useContext(CounterContext)
    let [cart, setCart] = useContext(CartContext)

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow ">
                <Link to='/'><img className="logo ml-3" src='./images/g-shoe-new-logo.jpg' alt='logo' /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto pt-4 mr-2">
                        <Link to='/'>
                            <li className="nav-item active">
                                <p>Home</p>
                            </li>
                        </Link>

                        <Link to='/products'>
                            <li className="nav-item">
                                <p>Products</p>
                            </li>
                        </Link>

                        <li className="nav-item">
                            {/* cart dropdown */}
                            <div className="dropdown m-0 p-0 dropleft">
                                <button className="btn m-0 p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div class="cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></div>
                                    <div className="counter">
                                        <p className='count'>{count[0]}</p>
                                    </div>
                                </button>

                                <div className="dropdown-menu mt-4" aria-labelledby="dropdownMenuButton">
                                    <div className='items'>
                                        {
                                            cart.length ? (
                                                cart.map((item) => {
                                                    return (
                                                        <Dropdown key={item.id} item={item} />
                                                    )
                                                })
                                            )
                                                :
                                                <p>Your cart is empty</p>
                                        }
                                    </div>

                                    <div className="dropdown-item bbtn-droopdown">
                                        <div className="moreProd">
                                            <Link to='/checkout'>
                                                <Button value='Go To CheckOut' />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;