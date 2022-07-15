/// <reference types="cypress" />

import dash from '../support/pages/dashboard'
import checkin from '../support/pages/check-in'
import child from '../support/pages/select-children'

describe('Check-in flow', () => {
    it('Check In a kid as a parent', () => {
        dash.verifyDashboardScreen()
        dash.accessCheckInSection()

        checkin.inpuLastPinFourDigits()
        checkin.inpuLastPinFourDigits()
        checkin.checkInButton()
        checkin.selectRoleParent()

        child.verifyChildrenSectionScreen()
        child.selectCheckInChildren()
        child.checkInChildren()
        child.verifyCheckInSuccess()
    });

    it('Check In a kid as a staf', () => {
        dash.verifyDashboardScreen()
        dash.accessCheckInSection()

        checkin.inpuLastPinFourDigits()
        checkin.inpuLastPinFourDigits()
        checkin.checkInButton()
        checkin.selectRoleStaff()

        child.verifyChildrenSectionScreen()
        child.selectCheckInChildren()
        child.checkInChildren()
        child.verifyCheckInSuccess()
    });
});
