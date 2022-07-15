/// <reference types="cypress" />

import dash from '../support/pages/dashboard'
import checkout from '../support/pages/check-out'
import child from '../support/pages/select-children'

describe('Check-out flow', () => {
    it('Check Out a kid as a parent', () => {
        dash.verifyDashboardScreen()
        dash.accessCheckOutSection()

        checkout.inpuLastMobileFourDigits()
        checkout.inpuLastPinFourDigits()
        checkout.checkOutDigits()
        checkout.selectRole()

        child.verifyChildrenSectionScreen()
        child.selectCheckOutChildren()
        child.checkOutChildren()
        child.verifyCheckOutSuccess()
    });
});