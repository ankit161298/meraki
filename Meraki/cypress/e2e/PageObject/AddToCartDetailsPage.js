class AddToCartPage {
    addToCartDetailsPage() {
        return cy.visit('https://probuyerkart.com/?route=checkout/cart');
    }
    getCheckOut() {
        return cy.get('.clearfix > .pull-right > .btn');
    }
    checkOut() {
        return this.getCheckOut().click();
    }
}

export default AddToCartPage;