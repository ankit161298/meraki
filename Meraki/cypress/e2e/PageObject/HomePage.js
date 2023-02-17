class Home {
    getProduct() {
        return cy.get('div.buttons-wrapper');
    }
    getIframeBody() {
        // get the document
        return cy
            .get('body > div.popup-wrapper.popup-options > div.popup-container > div > div > iframe')
            .its('0.contentDocument').should('exist')
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }
    getCart() {
        return cy.get('div#cart');
    }
}

export default Home;