import React,{useEffect} from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,} from '@fortawesome/free-solid-svg-icons'
import "./Header.css";

function Header(props) {



    return (
        <div>
            <header className="header">
                <div>
                    <h1>
                        <Link to="/" className="logo">
                            Electronic Shop
                        </Link>
                    </h1>
                </div>
                <div className="header-links">
                   <ul>
                       <li>
                           <Link to="/">Home</Link>
                       </li>
                   </ul>
                   <ul>
                       <li>
                           <Link to="/signup">Signup</Link>
                       </li>
                   </ul>
                   <ul>
                       <li>
                           <Link to="/cart" className="cart">
                           {props.cartItems?.length}
                           <FontAwesomeIcon icon={faShoppingCart} />
                           </Link>
                       </li>
                   </ul>
                </div>
            </header>
        </div>
    )
}
export default Header;