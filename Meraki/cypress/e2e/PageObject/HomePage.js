class Home {
    openUrl() {
        return cy.visit('https://probuyerkart.com/');
    }
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
    clickProduct() {
        return this.getProduct().first().click();
    }
    selectColor() {
        return this.getIframeBody().find('span.option-value').first().click();
    }
    clickAddToCart() {
        return this.getIframeBody().find('a#button-cart').click();
    }
    clickCart() {
        return this.getCart().invoke('show').click();
    }
}

export default Home;