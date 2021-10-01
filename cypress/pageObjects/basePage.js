export class BasePage {

    static isVisible(selector) {
        cy.get(selector).should("be.visible")
    }

    static click(selector) {
        cy.get(selector).should("be.visible").click()
    }

    static type(selector , text) {
        cy.get(selector).type(text)
    }

    static hasText(selector , text) {
        cy.get(selector).should("have.text",text)
    }

    static doesNotExist(selector) {
        cy.get(selector).should("not.exist")
    }

    static check(selector) {
        cy.get(selector).check()
    }

    static hasValue(selector , value) {
        cy.get(selector).should("have.value" , value)
    }

    static select(selector,option) {
        cy.get(selector).select(option)
    }
}