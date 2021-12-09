import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHiddenStatus } from "../../redux/cart/cart.selector";
import CartToggle from "../cart-toggle/cart-toggle.component";
import CartDropdown  from "../cart-dropdown/cart-dropdown.component";


import './header.styles.scss'

const Header = ({currentUser, hidden}) => (
    <header className="header">
        <div className="header__menu">
            
        </div>
        <div className="header__overlay">
        
        </div>
        <nav className="header__nav">
            

            <ul className="header__nav--links">
                <li className="header__nav--links__item">
                    <Link to='/' className="header__nav--links__item--category link-color" link-text="Sklep">
                        Sklep
                    </Link>
                </li>

                <li className="header__nav--links__item">
                    <Link to='/' className="header__nav--links__item--contact link-color" link-text="Kontakt">
                        Kontakt
                    </Link>
                </li>
                
                <li className="header__nav--links__item">
                        {
                            currentUser ?( 
                            <div className="header__nav--links__item--sign-in link-color" onClick={() => auth.signOut()} >Wyloguj się</div>
                            ):(
                            <Link className="header__nav--links__item--sign-out link-color" to='/sign-in' link-text="Zaloguj się">Zaloguj się</Link>)

                        }  
                </li>

                <li className="header__nav--links__item">
                    <Link  className="header__nav--links__item--sign-up link-color" link-text="Rejestracja" to='/sign-up'>
                         Rejestracja
                    </Link>
                </li>

                <div className="header__nav--links__cart">
                    <CartToggle></CartToggle>
                </div>

              
                
            </ul>
           
        </nav>
                {
                    hidden ? null : <CartDropdown></CartDropdown>
                }
    </header>
)

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectHiddenStatus(state)
})

export default connect(mapStateToProps)(Header);