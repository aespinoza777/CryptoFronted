import {combineReducers} from 'redux';
import coinsReducer from './coinsReducer';
import coinExchangesReducer from './coinExchangesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    coins: coinsReducer, 
    coinExchanges: coinExchangesReducer, 
    user: userReducer
})

export default rootReducer