const el = require('.elements').ELEMENTS

class SelectChildren{
    
    selectCheckInChildren(){
        cy.get(el.children).click()
    }

    checkInChildren(){
        cy.get(el.checkinButton).click()
    }

    selectCheckOutChildren(){
        cy.get(el.inChildren).click()
    }

    checkOutChildren(){
        cy.get(el.checkOutButton).click()
    }

    verifyChildrenSectionScreen(){
        cy.contains('Select Your Children').should('be.visible')
    }

    verifyCheckInSuccess(){
        cy.contains('Success!').should('be.visible')
        cy.contains('You successfully checked in').should('be.visible')
    }

    verifyCheckOutSuccess(){
        cy.contains('Success!').should('be.visible')
        cy.contains('You successfully checked out').should('be.visible')
    }
}

export default new SelectChildren