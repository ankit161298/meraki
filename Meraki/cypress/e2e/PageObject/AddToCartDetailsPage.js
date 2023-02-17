class AddToCartPage {
    getCheckOut() {
        return cy.get('.clearfix > .pull-right > .btn');
    }
}

export default AddToCartPage;