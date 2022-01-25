import {combineReducers} from 'redux';
import coinsReducer from './coinsReducer';
import coinExchangesReducer from './coinExchangesReducer';
import userReducer from './userReducer';
import accountsReducer from './accountsReducer';

const rootReducer = combineReducers({
    coins: coinsReducer, 
    coinExchanges: coinExchangesReducer, 
    user: userReducer,
    accounts: accountsReducer
})

export default rootReducer