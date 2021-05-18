import React, {Component} from 'react';
import FormInput from '../formInput/FormInput';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './signUp.scss';
import CustomButton from '../customButton/CustomButton';

class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmedPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmedPassword} = this.state;

        if(password!=confirmedPassword){
            alert('Passwords don\'t match');
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmedPassword: ''
            })
        }catch(error){
            console.error(error);
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const {displayName, email, password, confirmedPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit = {this.handleSubmit}>
                    <FormInput type='text' 
                               name='displayName' 
                               handleChange = {this.handleChange} 
                               value={displayName}  
                               label='Display Name'
                               required
                    />
                    <FormInput type='email' 
                               name='email' 
                               handleChange = {this.handleChange} 
                               value={email}  
                               label='Email'
                               required
                    />
                    <FormInput type='password' 
                               name='password' 
                               handleChange = {this.handleChange} 
                               value={password}  
                               label='Password'
                               required
                    />
                    <FormInput type='password' 
                               name='confirmedPassword' 
                               handleChange = {this.handleChange} 
                               value={confirmedPassword}  
                               label='Confirm Password'
                               required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;