import {BasePage} from "../basePage";

const REGISTER_EMAIL_FIELD = "#email_create"
const REGISTER_BUTTON = "#SubmitCreate"
const MR_CHECKBOX = "#id_gender1"
const FIRST_NAME_FIELD = "#customer_firstname"
const LAST_NAME_FIELD = "#customer_lastname"
const EMAIL_FIELD = "#email"
const PASSWORD_FIELD = "#passwd"
const DAYS_DROPDOWN = "#days"
const MONTHS_DROPDOWN = "#months"
const YEARS_DROPDOWN = "#years"
const NEWSLETTER_CHECKBOX = "#newsletter"
const SPECIAL_OFFERS_CHECKBOX = "#optin"
const ADDRESS_FIELD = "#address1"
const CITY_FIELD = "#city"
const STATE_DROPDOWN = "#id_state"
const ZIP_CODE_FIELD = "#postcode"
const PHONE_NUMBER_FIELD = "#phone_mobile"
const FINISH_REGISTRATION_BUTTON = "#submitAccount"

export class AuthPage extends BasePage {

    static registerRandomAccount(){
        let email = "Testing" + Math.floor((Math.random() * 1000)) + "@testing.com"
        this.type(REGISTER_EMAIL_FIELD,email)
        this.click(REGISTER_BUTTON)
        cy.get("#account-creation_form" , {timeout: 30000}).should("be.visible")
        this.check(MR_CHECKBOX)
        this.type(FIRST_NAME_FIELD,"Tester")
        this.type(LAST_NAME_FIELD, "Testinger")
        this.hasValue(EMAIL_FIELD,email)
        this.type(PASSWORD_FIELD,"Password123")
        this.select(DAYS_DROPDOWN,1)
        this.select(MONTHS_DROPDOWN,1)
        this.select(YEARS_DROPDOWN,1)
        this.check(NEWSLETTER_CHECKBOX)
        this.check(SPECIAL_OFFERS_CHECKBOX)
        this.type(ADDRESS_FIELD,"Address street 123")
        this.type(CITY_FIELD,"RandomVille")
        this.select(STATE_DROPDOWN,1)
        this.type(ZIP_CODE_FIELD,"45633")
        this.type(PHONE_NUMBER_FIELD, "9091001")
        this.click(FINISH_REGISTRATION_BUTTON)
    }
}