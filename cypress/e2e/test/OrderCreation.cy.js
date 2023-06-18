import HomePageMethods from '../../StorefrontAutomation/Functions/HomePageMethods.cy.js';
import PDPMethods from '../../StorefrontAutomation/Functions/PDPMethods.cy.js';
import CartMethods from '../../StorefrontAutomation/Functions/CartMethods.cy.js';
import CheckOutMethods from '../../StorefrontAutomation/Functions/CheckoutMethods.cy.js';
import OrderConfirmationMethods from '../../StorefrontAutomation/Functions/OrderConfirmationMethods.cy.js';

describe('TestSuite', function () {

    let userdata;

    it('PlaceCODOrder', function () {

        // Login to the application using the provided email and password
        HomePageMethods.loginApplication(userdata.email, userdata.password);
        // Search for the specified product on the homepage
        HomePageMethods.searchProduct(userdata.ProductName);
        // Add the product to the cart from the Product Details Page (PDP)
        PDPMethods.addProductToCartFromPDP(userdata.ProductName);
        // Go to the cart from the Product Details Page (PDP)
        PDPMethods.goToCartFromPDP(userdata.ProductName);
        // Validate the cart, ensuring the specified product is present
        CartMethods.validateCart(userdata.ProductName);
        // Proceed to checkout from the cart
        CartMethods.checkoutFromCart();
        // Add a shipping address during checkout
        CheckOutMethods.addShippingAddress();
        // Place the order using the Cash on Delivery (COD) payment method
        CheckOutMethods.PlaceCOD();
        // Confirm the order and complete the checkout process
        OrderConfirmationMethods.orderConfirm();
        // Retrieve and display the order number 
        OrderConfirmationMethods.OrderNum();

    });
    it('PlaceCODOrder2', function () {
        cy.wait(10000)
        // Login to the application using the provided email and password
        HomePageMethods.loginApplication(userdata.email, userdata.password);
    });
    it('PlaceCODOrder6', function () {
        cy.wait(10000)
        // Login to the application using the provided email and password
        HomePageMethods.loginApplication(userdata.email, userdata.password);
    });

    before(function () {
        // runs once before all tests in the block
        cy.fixture('TestData').then(function (data) {
            userdata = data;
        });
    });
});
