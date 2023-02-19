/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import Login from './PageObject/LoginPage';
import Checkout from './PageObject/GuestCheckoutPage';
import AddToCartPage from './PageObject/AddToCartDetailsPage';

describe('Checkout a product as logined user', () => {

    const home = new Home();
    const login = new Login();
    const checkout = new Checkout();
    const addToCartDetailsPage = new AddToCartPage();
    before(() => {
        home.openUrl();
    })

    it('Ordering Product as User', () => {
        // Selecting the First Product
        home.clickProduct();
        cy.wait(4000);

        //Handling the PopUp Iframe
        home.selectColor();
        home.clickAddToCart();
        cy.wait(4000);

        //Clicking on cart
        home.clickCart();

        //Retircting to AddtoCart Page
        addToCartDetailsPage.addToCartDetailsPage();

        //Clicking on Checkout
        addToCartDetailsPage.checkOut();

        //Loging in
        login.loginCheckBox();
        login.email();
        login.passWord();
        login.clickLoginButton();
        cy.pause();

        // //Check Out Details

        // checkout.selectGuest();
        // checkout.firstName();
        // checkout.lastName();
        // checkout.email();
        // checkout.phoneNumber();
        // checkout.company();
        // checkout.address1();
        // checkout.address2();
        // checkout.city();
        // checkout.pinCode();
        // checkout.country();
        // checkout.zone();
        // checkout.cashOnDelivery();
        // checkout.privacyPolicy();
        // checkout.termsNdCond();
        // checkout.placeOrder();
    });

});