import { createUserWithEmailAndPassword } from "@firebase/auth";
import React from "react";
import { auth, CreateUserProfileDocument, signInWithGoogle } from "../../firebase/firebase.utils";

import {ReactComponent as GoogleIcon} from '../../resources/google-icon.svg'
import FormInput from "../../components/form-input/form-input.component";

import './sign-up-page.styles.scss'

class SignUp extends React.Component {
constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('hasła się nie są identyczne')
            return
        }

        try{
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await CreateUserProfileDocument(user, {displayName})
            this.setState({displayName: '', email: '', password: '', confirmPassword: ''})
        }catch(error){
            console.error(error);
        }
        
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <section className='sign-up-page'>
               
                <div className='sign-up-page__main'>
                    <div className='sign-up-page__main__google-sign-in'>
                        <button className='sign-up-page__main__google-sign-in--button' onClick={signInWithGoogle}>Zaloguj się z Google</button>
                        <GoogleIcon className='sign-up-page__main__google-sign-in--icon'></GoogleIcon>
                    </div>
                    <form className='sign-up-page__main--form' onSubmit={this.handleSubmit}>
                        <h3 className='sign-up-page__main--form--title'>Rejestracja</h3>
                        <FormInput 
                            type='text'
                            name='displayName'
                            value={this.state.displayName}
                            handleChange ={this.handleChange}
                            label='imię/nick'
                            required
                        />
    
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
    
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={this.state.confirmPassword}
                            handleChange={this.handleChange}
                            label='Powtórz hasło'
                            required
                        />
    
                        <button className='sign-up-page__main--form--submit-button' type='submit'>Zarejestruj się</button>
                        
                    </form>
                </div>
            </section> 
        )
    }
   
}

export default SignUp;