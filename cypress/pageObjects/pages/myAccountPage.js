import {BasePage} from "../basePage";

const USERS_NAME_SURNAME = ".header_user_info .account span"

export class MyAccountPage extends BasePage {

    static verifyUserName(){
        this.hasText(USERS_NAME_SURNAME,"Tester Testinger")
    }
}