
describe('bgs portal test',() =>{

    it('Log into BGP with CorpPas', () =>{
             cy.visit('https://qa-internet.bgp.onl/')

        // cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername').type('public')
        // cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword').type('Let$BeC001')
        // cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > .btn').click()
        //cy.get('#login-button',{timeout: 2000}).should('be.visible')

            cy.get('#login-button').click()

            cy.get('#entityId').type('BGPQETECH')
            cy.get('#userId').type('S1234567A')
            cy.get('#userRole').type('Acceptor')
            cy.get('#userFullName').type('Tan Ah Kow')
            cy.get('form > .btn').click()
    })

    it('Verify grant page', () =>{

        cy.get('#dashboard-menubox-app-apply-grant > .col-sm-12 > .dashboard-action-card',{timeout: 10000}).should('be.visible')
        cy.get('#dashboard-menubox-app-apply-grant > .col-sm-12 > .dashboard-action-card > .dashboard-action-text-wrapper > .dashboard-action-title').click()

        cy.get('#IT',{timeout: 20000}).should('be.visible').click()
        cy.get("#grant-wizard > div.bgp-applyquestion-taxonomy.col-sm-12 > div > div > div:nth-child(1) > div > label > div > div").should('be.visible').click()
        cy.get('#Market\\ Readiness\\ Assistance\\ 2').should('be.visible').click()
        cy.get('#go-to-grant').should('be.visible').click()
        cy.get('#keyPage-form-button').should('be.visible').click()

    })

    it('Fill details in EligibilityPage ', () =>{

        cy.get('#react-eligibility-sg_registered_check-true').click()
        cy.get('#react-eligibility-turnover_check-true').click()
        cy.get('#react-eligibility-global_hq_check-true').click()
        cy.get('#react-eligibility-new_target_market_check-true').click()
        cy.get('#react-eligibility-started_project_check-true').click()

        cy.get('#save-btn').click()
        cy.get('#next-btn').click()

    })

    it('Fill details in ContactDetailsPage ', () =>{

        cy.get('#react-contact_info-name').type("John")
        cy.get('#react-contact_info-designation').type("Quality Analyst")
        cy.get('#react-contact_info-phone').type("+65000034993")
        cy.get('#react-contact_info-primary_email').type("testabcd@gmail.com")
        cy.get('#react-contact_info-secondary_email').type("abctest@gmail.com")
        cy.get('#react-contact_info-correspondence_address-copied').click()
        cy.get('#react-contact_info-copied').click()

        cy.get('#save-btn').click()
        cy.get('#next-btn').click()
    })


    it('Fill details in proposal ', () =>{

        cy.get('#react-project-title').type("Software")
        cy.get('#react-project-start_date').type("18 Sep 2022")
        cy.get('#react-project-end_date').type("30 Sep 2022")
        cy.get('#react-project-description').type("Machine Leanrning")

        cy .get('div.Select-control:first').click().get('.Select-option:contains(Market Entry)').click();
        cy.wait(1000)
        cy.get('.Select-placeholder').click().get('.Select-option:contains(Singapore)').click();

        cy.get('#react-project-is_first_time_expand-true').click()

         cy.get('#save-btn').click()
         cy.get('#next-btn').click()
    })

    it('Fill details in BusinessImpact ', () =>{

        cy.get('#react-project_impact-fy_end_date_0').type("18 Sep 2022")
        for (let i = 0; i < 4; i++) {
            cy.get("#react-project_impact-overseas_sales_"+i).type("1000")
        }
        for (let i = 0; i < 4; i++) {
            cy.get("#react-project_impact-overseas_investments_"+i).type("100000")
        }
        cy.get('#react-project_impact-rationale_remarks').type("Reason for sales")
        cy.get('#react-project_impact-benefits_remarks').type("Benefit")

        cy.get('#save-btn').click()
        cy.get('#next-btn').click()
    })

    it('Fill details in Cost ', () =>{

        cy.get('#react-project_cost-office_rentals-accordion-header').click()
        cy.get('#react-project_cost-office_rentals-add-item').click()
        cy.get('#react-project_cost-office_rentals-0-description').type("this is office rent")

        cy.get('#react-project_cost-office_rentals-0-rental_duration').type("1.0")
        cy.get('#react-project_cost-office_rentals-0-amount_in_billing_currency').type("1000")

        cy.get('#save-btn').click()
        cy.get('#next-btn').click()
    })

    it('Fill details in Declare and Review ', () =>{

        cy.get('#react-declaration-criminal_liability_check-false').check()
        cy.get("#react-declaration-civil_proceeding_check-false").check()
        cy.get("#react-declaration-insolvency_proceeding_check-false").check()
        cy.get("#react-declaration-project_incentives_check-false").check()
        cy.get("#react-declaration-other_incentives_check-false").check()
        cy.get("#react-declaration-project_commence_check-false").check()
        cy.get("#react-declaration-related_party_check-false").check()
        cy.get("#react-declaration-debarment_check-false").check()
        cy.get("#react-declaration-covid_safe_check-true").check()
        cy.get("#react-declaration-covid_safe_ques_check-true").check()
        cy.get("#react-declaration-consent_acknowledgement_check").check()


        cy.get('#save-btn').click()
        cy.get('#review-btn').click()
        cy.get('#react-declaration-info_truthfulness_check').click()
        cy.get('#submit-btn').click()
    })

    it('Verify details( RefID, agencyDetails, status) after submitting the Form', () =>{
        cy.get(':nth-child(2) > .key-status-section > tbody > :nth-child(1) > .value').contains('22')
        cy.get(':nth-child(2) > .value').contains("Submitted")
        cy.get('.value > :nth-child(1)').contains("Enterprise Singapore")
        cy.get('.back-text').click()

    })

    it('Verify RefID under Processing Tab', () =>{
        cy.get('.is-active').click()
        cy.get('#dashboard-menubox-app-apply-grant > .col-sm-12 > .dashboard-action-card',{timeout: 10000}).should('be.visible')
        cy.get('#grants > :nth-child(3) > .dashboard-tab-container > .nav > :nth-child(3) > a').should('be.visible').click()
        cy.wait(1000)
        cy.get('#db-apps-processing > .tab-content > :nth-child(1) > :nth-child(1)').click()
        cy.get('#db-apps-processing > .tab-content > :nth-child(1) > :nth-child(1)').contains('22')
        cy.get('#logout-button > span').click()

    })

})

