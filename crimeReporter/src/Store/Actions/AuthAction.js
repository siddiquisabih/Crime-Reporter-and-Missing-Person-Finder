class AuthAction {

    static login = "login"
    static register = "register"
    static dataSend = "dataSend"
    static missingData = "sent"
    static getCrimeData = "crimeData"
    static getMissingData = "missData"

    static openAdminPanel = "openAdminPanel"

    static LoginAction() {
        return {
            type: AuthAction.login
        }
    }

    static RegisterAction() {
        return {
            type: AuthAction.register
        }
    }


    static SendCrimeDataAction() {
        return {
            type: AuthAction.dataSend
        }
    }


    static sendMissingAction() {
        return {
            type: AuthAction.missingData
        }
    }


    static GetCrimeData(value) {
        return {
            type: AuthAction.getCrimeData,
            data: value
        }
    }


    static GetMissingData(value) {
        return {
            type: AuthAction.getMissingData,
            data: value
        }
    }


    static OpenAdminPanel() {
        return {
            type: AuthAction.openAdminPanel
        }
    }




}
export default AuthAction