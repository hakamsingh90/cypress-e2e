describe('Authentication with SSO', function(){

    beforeEach(() => {
        Cypress.Cookies.defaults({
            preserve: /[\s\S]*/
        });
    })

    it('Should get SSO authentication cookie',() => {

        cy.visit('https://qa-internet.bgp.onl/')

        // redirects to WebSSO sign in page
        cy.url()
            .should('include','https://bgp-lower-pool.auth.ap-southeast-1.amazoncognito.com')

        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername').type('public')
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword').type('Let$BeC001')
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > .btn').click()

        cy.contains('COOKIE_OK').should('be.visible')
    })
})