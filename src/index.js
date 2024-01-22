import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider } from '@auth0/auth0-react';
import {store} from './redux/store';
import {Provider} from 'react-redux'
import { updateCartFromLocalStorage } from './redux/cartSlice'; //delete if doeasn work



const storedCartItems = localStorage.getItem('cart');
if(storedCartItems){
  store.dispatch(updateCartFromLocalStorage(JSON.parse(storedCartItems)))
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-0iiz3ltupfwws1at.us.auth0.com"
    clientId="qNWN31ExH4l0aAb47AmVm6jyCvZwn8iP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
