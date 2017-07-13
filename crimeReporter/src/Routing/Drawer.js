import {DrawerNavigator} from "react-navigation"

import Home from "../../src/Home"

import CrimeList from "../Lists/CrimeDetailList"
import MissingList from "../Lists/MissingPersonList"

const Sidebar= DrawerNavigator({

Home : {
    screen : Home
},

CrimeList : {
    screen : CrimeList
},

MissingList  : {
    screen : MissingList
},



})

export default Sidebar