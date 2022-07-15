const el = require('.elements').ELEMENTS

class CheckOut{
    inpuLastMobileFourDigits(){
        cy.get(el.mobileDigits).clear().type('9050')
    }
    
    inpuLastPinFourDigits(){
        cy.get(el.pinDigits).clear().type('9999')
    }

    checkOutDigits(){
        cy.get(el.checkOutButton).click()
    }

    selectRole(){
        cy.get(el.parentRole).click()
    }
}

export default new CheckOut()