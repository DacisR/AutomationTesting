import {BasePage} from "../basePage";

const HEADER_LOGIN_BUTTON = ".login"

export class MainPage extends BasePage {

    static goToAuthentificationPage(){
        this.click(HEADER_LOGIN_BUTTON)
    }

    static logInStandartUser() {

    }

}