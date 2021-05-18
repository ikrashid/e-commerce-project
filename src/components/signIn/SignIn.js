import React, {Component} from 'react';
import FormInput from '../formInput/FormInput';
import './SignIn.scss'
import CustomButon from '../customButton/CustomButton';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch(error){
            console.log(error);
        }
        
    }

    handleChange = (event) =>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput name="email" type="email" label="email" value={this.state.email} required handleChange={this.handleChange}/>

                    <FormInput name="password" type="password" label="password" value={this.state.password} required onChange={this.handleChange}/>
                    <div className='buttons'>
                        <CustomButon type="submit" value="Submit Form">Sign In</CustomButon>
                        <CustomButon onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButon>
                    </div>
                </form>
                
            </div>
        )
    }
}


export default SignIn;