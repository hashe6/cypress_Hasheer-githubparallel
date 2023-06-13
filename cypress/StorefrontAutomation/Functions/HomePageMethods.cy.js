import HomePageElements from '../../ObjectRepository/HomePage.cy.js';
import PLPPageElements from '../../ObjectRepository/PLPPage.cy.js';
import APIMethods from './APIMethods.cy.js'

class HomePageMethods {

  static loginApplication(user, pass) {
    cy.visit(Cypress.env('url'));
    cy.title().should('eq', "Home | RATAN TATA");
    HomePageElements.SignInLink().click();
    HomePageElements.UserName().type(user);
    HomePageElements.Password().type(pass);
    HomePageElements.SignInButton().click();
    cy.wait(6000); // wait for 6 seconds
    
  }

  static searchProduct(item) {
   
    HomePageElements.SearchBox().should('be.visible').type(item);
    HomePageElements.SearchIcon().should('be.visible').click({force: true});
    PLPPageElements.PLP_ProductCard().should('be.visible');
    PLPPageElements.PLP_ProductCard().first().should('exist'); // checking if 1st element of product card is present
    APIMethods.getUniqueId()
    cy.get('@uniqueId').then((value) => {
      cy.wait(3000);
      cy.visit(Cypress.env('url')+value);

    });
    
    // cy.wait(5000);
    // cy.scrollTo('bottom');
    // cy.wait(3000);
    // cy.get('a.product-name')
    // .invoke('removeAttr', 'target')
    // .click();
  
  }

  static viewTopOffers() {
    HomePageElements.TopOffersLabel().click();
  }

  static viewGlobalCart() {
    HomePageElements.GlobalCartIcon().click();
  } 

}

export default HomePageMethods;
