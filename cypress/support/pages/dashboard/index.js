const el = require('.elements').ELEMENTS

class Dashboard{
    accessCheckInSection(){
        cy.get(el.accessCheckIn).click()
    }

    accessCheckOutSection(){
        cy.get(el.accessCheckOut).click()
    }

    verifyDashboardScreen(){
        cy.get(el.logo).should('be.visible')
        cy.contains('Student Check In').should('be.visible')
        cy.contains('Foo Bar').should('be.visible')
    }
}

export default new Dashboard