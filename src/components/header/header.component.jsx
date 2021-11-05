import React from "react";
import { Link } from "react-router-dom";

import './header.styles.scss'

const Header = () => (
    <header className="header">
        <div className="header__menu">
            
        </div>
        <div className="header__overlay">

        </div>
        <nav className="header__nav">
            <ul className="header__nav--links">
                <li className="header__nav--links__item">
                    <a href='#' className="header__nav--links__item--category" link-text="Kategorie">
                        Kategorie
                    </a>
                </li>

                <li className="header__nav--links__item">
                    <a href='#' className="header__nav--links__item--sign-in" link-text="Zaloguj się">
                        Zaloguj się
                    </a>
                </li>

                <li className="header__nav--links__item">
                    <a href='#' className="header__nav--links__item--sign-up" link-text="Rejestracja">
                         Rejestracja
                    </a>
                </li>

                <div className="header__nav--cart">
                    <button>Moje Zakupy</button>
                </div>
                
            </ul>
           
        </nav>
        
    </header>
)



export default Header;