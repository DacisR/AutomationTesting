import {MainPage} from "../../pageObjects/pages/mainPage";
import {AuthPage} from "../../pageObjects/pages/authPage";
import {MyAccountPage} from "../../pageObjects/pages/myAccountPage";

context("Authentification cases" , () => {

    it.only("Registering a new random account" , () => {
        MainPage.goToAuthentificationPage()
        AuthPage.registerRandomAccount()
        MyAccountPage.verifyUserName()
    })

    it("Login with a registered user" , () => {
        MainPage.logInStandartUser()
    })

})