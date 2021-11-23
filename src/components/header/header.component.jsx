import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";


import './header.styles.scss'

const Header = ({currentUser}) => (
    <header className="header">
        <div className="header__menu">
            
        </div>
        <div className="header__overlay">

        </div>
        <nav className="header__nav">
            <ul className="header__nav--links">
                <li className="header__nav--links__item">
                    <Link to='/' className="header__nav--links__item--category" link-text="Kategorie">
                        Kategorie
                    </Link>
                </li>

                <li className="header__nav--links__item">
                        {
                            currentUser ?( 
                            <div className="header__nav--links__item--sign-in" onClick={() => auth.signOut()} >Wyloguj się</div>
                            ):(
                            <Link className="header__nav--links__item--sign-out" to='/sign-in' link-text="Zaloguj się">Zaloguj się</Link>)

                        }  
                </li>

                <li className="header__nav--links__item">
                    <Link  className="header__nav--links__item--sign-up" link-text="Rejestracja" to='/sign-up'>
                         Rejestracja
                    </Link>
                </li>

                <div className="header__nav--cart">
                    <button>Moje Zakupy</button>
                </div>
                
            </ul>
           
        </nav>
        
    </header>
)



export default Header;