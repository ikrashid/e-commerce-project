import React, {Component} from 'react';
import './App.css';
import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/HomePage';
import {Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndOut from './pages/signInAndSignUp/SignInAndSignUp';
// import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {setCurrentUser} from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user-selectors';
import CheckoutPage from '../src/pages/checkout/Checkout';
// import {selectCollectionsForPreview} from './redux/shop/shop-selectors';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    // const {setCurrentUser, collectionsArray} = this.props;
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{ //subscribed here, always open as long as component is mounted
      //this.setState({currentUser: user});//user persistence!!! 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          //console.log(snapShot.data()) //shows us a snapshot of whats in the database
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });console.log(this.state);
        });
      }
      

      setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth(); //this works because onAuthStateChanged returns method firebase.unsubscribe()
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signIn' render={()=> this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndOut/>)}/>        
        </Switch>
        
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
