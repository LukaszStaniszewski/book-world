import React from "react";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {ReactComponent as GoogleIcon} from '../../resources/google-icon.svg'

import FormInput from "../../components/form-input/form-input.component";
import './sign-in-page.styles.scss'
import { signInWithEmailAndPassword } from "@firebase/auth";



class SignInPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const{email, password} = this.state
        try{
            await signInWithEmailAndPassword(auth, email, password)
        }catch(error){
            console.error(error)
        }
        

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const { value, name} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const {history} = this.props
        return( 
    <section className='sign-in-page'>
        <div className='sign-in-page__google-sign-in'>
            <span className='sign-in-page__google-sign-in--title'>Kontynuuj z:</span>
            <div className='sign-in-page__google-sign-in__frame'>
                <button className='sign-in-page__google-sign-in__frame--button'  onClick={signInWithGoogle}>Zaloguj się z Google</button>       
                <GoogleIcon className='sign-in-page__google-sign-in__frame--icon'></GoogleIcon>
            </div>
        </div>
       <div className='sign-in-page__left'>
           <span>Zaloguj się</span>  
            <form className='sign-in-page__left--form' onSubmit={this.handleSubmit}>
             
                <FormInput
                    type='email' 
                    name='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='E-mail'
                    required 
                /> 
                
                
                <FormInput
                    type='password'
                    name='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='Hasło'
                    required
                
                />
    
                <button className='sign-in-page__left--form--submit-button' type='submit'>Zaloguj się</button>
                
    
            </form>
            
       </div>
        <div className='sign-in-page__right'>
            <h3>Zarejestruj się</h3>
            <p>Otrzymasz liczne dodatkowe korzyści:</p>
            <ul className='sign-in-page__right--ul'> 
                <li>podgląd statusu realizacji zamówień</li>
                <li>przechowywanie przedmiotów w schowku </li>
                <li>brak konieczności wprowadzania swoich danych przy kolejnych zakupach</li>
                <li>możliwość otrzymania rabatów i kuponów promocyjnych</li>
            </ul>
            <button className='sign-in-page__left--form--submit-button' onClick={() => history.push('/sign-up')}>Zarejestruj się</button>
        </div>   
    </section>
            )
    }
}

export default withRouter(SignInPage);