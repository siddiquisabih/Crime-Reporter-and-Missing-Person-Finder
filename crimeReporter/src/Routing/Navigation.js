import { StackNavigator } from "react-navigation"

import Login from "../User Register And Login/LoginUser"
import Register from "../User Register And Login/RegisterUser"

import Menu from "../Menu"
import Sidebar from "./Drawer"

import CrimeForm from "../Issue/Crime"
import People from "../Issue/MissingPerson"

import CrimeList from "../Lists/CrimeDetailList"
import MissingList from "../Lists/MissingPersonList"

import AdminMenu from "../AdminPanel/MenuPage"

const Route = StackNavigator({

    HomeComponent: {
        screen: Sidebar
    },

    LoginComponent: {
        screen: Login
    },
    RegisterComponent: {
        screen: Register
    },
    MenuComponent:{
        screen : Menu
    },
    CrimeFormComponent:{
        screen : CrimeForm
    },
    PeopleComponent : {
        screen : People
    },
    CrimeListComponent:{
        screen : CrimeList
    },
    MissingListComponent:{
        screen : MissingList
    },

//admin Route


adminPanelComponent : {
    screen : AdminMenu
}


})

export default Route