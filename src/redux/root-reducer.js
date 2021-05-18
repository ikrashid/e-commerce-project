import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //local storage from window browser
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';
const persistConfig = {
    key: 'root',
    storage,
    whilelist: ['cart'] //only reducer we want to persist
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);

