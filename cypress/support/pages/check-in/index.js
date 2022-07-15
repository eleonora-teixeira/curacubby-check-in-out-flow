const el = require('.elements').ELEMENTS

class CheckIn{
    inpuLastMobileFourDigits(){
        cy.get(el.mobileDigits).clear().type('9050')
    }
    
    inpuLastPinFourDigits(){
        cy.get(el.pinDigits).clear().type('9999')
    }

    checkInButton(){
        cy.get(el.checkinButton).click()
    }

    selectRoleParent(){
        cy.get(el.parentRole).click()
    }

    selectRoleStaff(){
        cy.get(el.staffRole).click()
    }
}

export default new CheckIn