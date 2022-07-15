const el = require('.elements').ELEMENTS

class CheckIn{
    inpuLastMobileFourDigits(){
        cy.get(el.mobileDigits).clear().type('9050')
    }
    
    inpuLastPinFourDigits(){
        cy.get(el.pinDigits).clear().type('9999')
    }

    checkInDigits(){
        cy.get(el.checkinButton).click()
    }

    selectRole(){
        cy.get(el.parentRole).click()
    }
}

export default new CheckIn()