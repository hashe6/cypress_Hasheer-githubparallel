import CartPageElements from '../../ObjectRepository/CartPage.cy.js';

class CartMethods {

  static validateCart(ProductName) {
    CartPageElements.CartPageHeading().should('exist');
    CartPageElements.TextContains(ProductName).should('exist');
  }

  static checkoutFromCart() {
    CartPageElements.CheckoutButton().click()
  }
  
}

export default CartMethods;
