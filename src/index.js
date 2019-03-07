import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


//this is for requests coming from application
axios.interceptors.request.use(requestSettings => {
    console.log(requestSettings);

    // Edit request settings can be changed and then returned
    return requestSettings; //we blocking request if we do not do return
}, error => {
    console.log(error); //we can for instanse log it and forward futher
    return Promise.reject(error); //we need this to be able to hadle in the app within catch
});

//this is for responses coming from server
axios.interceptors.response.use(responseSettings => {
    console.log(responseSettings);

    // Edit response settings can be changed and then returned
    return responseSettings; //we blocking request if we do not do return
}, error => {
    console.log(error); //we can for instanse log it and forward futher
    return Promise.reject(error); //we need this to be able to hadle in the app within catch
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
