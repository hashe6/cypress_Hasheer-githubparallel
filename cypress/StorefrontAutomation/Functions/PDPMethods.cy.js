import PDPPageElements from '../../ObjectRepository/PDPPage.cy';
import HomePageElements from '../../ObjectRepository/HomePage.cy.js';

class PDPMethods {

  static addProductToCartFromPDP(productName) {
    PDPPageElements.ProductName().should('have.text',productName)
    PDPPageElements.AddToCartButton().click({ force: true })
    cy.wait(6000); // wait for 6 seconds
  }

  static goToCartFromPDP(productName) {
    PDPPageElements.ProductName().should('have.text',productName)
    HomePageElements.GlobalCartIcon().click()
    cy.wait(2000); // wait for 2 seconds
  }
  
}

export default PDPMethods;
