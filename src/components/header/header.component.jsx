import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHiddenStatus } from "../../redux/cart/cart.selector";
import CartToggle from "../cart-toggle/cart-toggle.component";
import CartDropdown  from "../cart-dropdown/cart-dropdown.component";


import './header.styles.scss'
import { clearCart } from "../../redux/cart/cart.action";

class Header extends React.Component  {
    state = {
        active: null,
        categoriesActive: null,
        dropdownMenu: null,
    }
    
    

    handleClick = () => {
    const active = 'header__hamburger--active'
    if (this.state.active == null) {
      return this.setState({active: active})   
    }return this.setState({active: null})
    }

    handleClickOverlay = () => {
    const click = 'header__overlay__categories-menu--active'
    
    if (this.state.categoriesActive == null) {
        return this.setState({categoriesActive: click})   
    }return this.setState({categoriesActive: null})    
    }
    
    onMouseEnter = () => {
        this.setState({dropdownMenu: 'hover-dropdown-menu-active'})
    }
    onMouseLeave = () => {
        this.setState({dropdownMenu: null})
    }
   
    render() {
    const {currentUser} = this.props
    const {hidden} = this.props
    const {clearCart} = this.props;
    return (
    
    <header className="header">
        <button className={`header__hamburger ${this.state.active} `} onClick={this.handleClick} >
            <span className="header__hamburger__box">
                <span className="header__hamburger__box__inner"></span>
            </span>
        </button>
        <aside className={`header__overlay ${this.state.active}`}>
            
            <div className={`header__overlay__categories-menu ${this.state.categoriesActive}`} onClick={this.handleClickOverlay}>
                <div className="header__overlay__categories-menu--title" after-text={this.state.categoriesActive ? "ᐱ" : "ᐯ"}>KATEGORIE 

                
                </div>
                <Link className="header__overlay__categories-menu--link" link-text="Fantasy" to='/fantasy'>Fantasy</Link>
                <Link className="header__overlay__categories-menu--link" link-text="Science-fiction" to='/sciencefiction'>Science-fiction</Link>
                <Link className="header__overlay__categories-menu--link" link-text="Literatura obyczajowa" to='/literaturaobyczajowa'>Literatura obyczajowa</Link>
                <Link className="header__overlay__categories-menu--link" link-text="Kryminał, thriller" to='/criminal'>Kryminał, thriller</Link>
                <Link className="header__overlay__categories-menu--link" link-text="Biografie, pamiętnik" to='/biography'>Biografie, pamiętnik</Link>
                <Link className="header__overlay__categories-menu--link" link-text="Horror" to='/horror'>Horror</Link>
                
            </div>
            <Link className="header__overlay--link" to='/sign-in' link-text="Zaloguj się">Zaloguj się</Link>
            <Link className="header__overlay--link" to='/sign-up' link-text="Rejestracja">Rejestracja</Link>
        </aside>
        
        <nav className={`header__nav ${this.state.dropdownMenu}` } >
        <div className={`hover-dropdown-menu ${this.state.dropdownMenu}`} onMouseLeave={this.onMouseLeave}>
            <Link className="hover-dropdown-menu--link" link-text="Fantasy" to='/fantasy'>Fantasy</Link>
            <Link className="hover-dropdown-menu--link" link-text="Science-fiction" to='/sciencefiction'>Science-fiction</Link>
            <Link className="hover-dropdown-menu--link" link-text="Literatura obyczajowa" to='/literaturaobyczajowa'>Literatura obyczajowa</Link>
            <Link className="hover-dropdown-menu--link" link-text="Kryminał, thriller" to='/criminal'>Kryminał, thriller</Link>
            <Link className="hover-dropdown-menu--link" link-text="Biografie, pamiętnik" to='/biography'>Biografie, pamiętnik</Link>
            <Link className="hover-dropdown-menu--link" link-text="Horror" to='/horror'>Horror</Link>
        </div>  
            
            <Link className="header__nav__logo" to='/'>
            <img className="header__nav__logo--image" src="https://i.ibb.co/D42cBcw/book.png"></img>
                <div className="header__nav__logo--name" > 
                    <div className="first-word">Book</div>
                    
                    <div className='second-word'>world</div>
                </div>
                
            </Link>

            <ul className="header__nav--links">
                <li className="header__nav--links__item">
                    <Link to='/' className="header__nav--links__item--category link-color"  link-text="Sklep">
                        Sklep
                    </Link>
                </li>

                <li className="header__nav--links__item">
                    <Link to='/' className="header__nav--links__item--category link-color " onMouseEnter={this.onMouseEnter} link-text='Kategorie ᐱ'>
                        Kategorie ᐯ
                    </Link>
                </li>
                
                <li className="header__nav--links__item">
                        {
                            currentUser ?( 
                            <a href="#" className="header__nav--links__item--sign-in link-color" link-text="Wyloguj się" onClick={()=>{auth.signOut(); clearCart()}} >Wyloguj się</a>
                            ):(
                            <Link className="header__nav--links__item--sign-out link-color" to='/sign-in' link-text="Zaloguj się">Zaloguj się</Link>)

                        }  
                </li>

                <li className="header__nav--links__item">
                    <Link  className="header__nav--links__item--sign-up link-color" link-text="Rejestracja" to='/sign-up'>
                         Rejestracja
                    </Link>
                </li>
                
            </ul>

                <div className="header__nav__cart">
                    <CartToggle></CartToggle>
                </div>    
           
        </nav>

        

                {
                    hidden ? null : <CartDropdown></CartDropdown>
                }
    </header>
    )
            }
}

const mapDispachToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectHiddenStatus(state)
})

export default connect(mapStateToProps, mapDispachToProps)(Header);