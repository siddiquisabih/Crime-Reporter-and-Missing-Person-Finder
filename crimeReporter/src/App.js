import React , {Component} from "react"
import {Button , Container, Text} from "native-base"
import Login from "./User Register And Login/LoginUser"
import Register from "./User Register And Login/RegisterUser"
import * as firebase from "firebase"
import store from "./Store"
// import Routes from "../src/Routing/Routes"
import {Provider} from "react-redux"

import Route from "../src/Routing/Navigation"


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9ivdDiTIiR7u1wqr7RPpHw_LPnHLRlmU",
    authDomain: "crime-reporter-119c4.firebaseapp.com",
    databaseURL: "https://crime-reporter-119c4.firebaseio.com",
    projectId: "crime-reporter-119c4",
    storageBucket: "crime-reporter-119c4.appspot.com",
    messagingSenderId: "886069020256"
  };
  firebase.initializeApp(config);


class App extends Component{
    render(){
        return(
            <Provider store={store} >
           
           <Route/>
           
           </Provider>
        )
    }

}
export default App