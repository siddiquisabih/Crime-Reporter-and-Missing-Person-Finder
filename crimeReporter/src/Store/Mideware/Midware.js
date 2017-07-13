import AuthAction from "../../Store/Actions/AuthAction"
import * as firebase from 'firebase'

class Midware {

    static RegisterUser(userDetail) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.createUserWithEmailAndPassword(userDetail.email, userDetail.pass).then(() => {
                dispatch(AuthAction.RegisterAction())
            })
        }
    }


    static LoginUser(userDetail) {
        return (dispatch) => {
            
            let adminId ="check1@gmail.com"
            let auth = firebase.auth();
            auth.signInWithEmailAndPassword(userDetail.email, userDetail.pass).then(() => {
                if(userDetail.email === adminId){
                    dispatch(AuthAction.OpenAdminPanel())
                }
                else{

                dispatch(AuthAction.LoginAction())
                }
            })
        }
    }


    static SendCrimeFormInfo(crimeDetail) {
        return (dispatch) => {
            let database = firebase.database().ref('/').child("Crime Report Details")

            let data = {
                userData: crimeDetail
            }
            database.push(data)
            dispatch(AuthAction.SendCrimeDataAction())
        }
    }



    static SendMissingFormInfo(MissingDetail) {
        return (dispatch) => {
            let database = firebase.database().ref('/').child("Missing person Details")

            let data = {
                missing: MissingDetail
            }
            database.push(data)
            dispatch(AuthAction.sendMissingAction())
        }
    }

    static FetchCrimeData() {
        return (dispatch) => {

            let crimeData = [];
            let database = firebase.database().ref("Crime Report Details")

            database.on("value", (object) => {

                let keys = object.val();
                for (var a in keys) {
                    crimeData.push(keys[a].userData)
                }

                dispatch(AuthAction.GetCrimeData(crimeData))
            })

        }
    }

    static FetchMissingPersonData() {
        return (dispatch) => {

            let missingDataArry = [];
            let database = firebase.database().ref("Missing person Details")
            database.on("value", (object) => {
                let keys = object.val();
                for (var a in keys) {
                    missingDataArry.push(keys[a].missing)
                }
                dispatch(AuthAction.GetMissingData(missingDataArry))
            })
        }
    }




}
export default Midware