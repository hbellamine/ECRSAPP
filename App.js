import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import EcrsNavigator from './navigation/EcrsNavigator'
import authReducer from './store/reducers/auth'


const rootReducer = combineReducers({
  auth: authReducer

});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));




export default function App() {

  return (<Provider store={store}><EcrsNavigator /></Provider> )
    
  
}


