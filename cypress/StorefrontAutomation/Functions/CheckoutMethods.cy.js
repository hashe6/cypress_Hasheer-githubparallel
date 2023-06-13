import CheckoutPageElements from '../../ObjectRepository/CheckoutPage.cy';

class CheckOutMethods {

  static addShippingAddress() {
    
    cy.fixture('TestData').then((data) => {

      CheckoutPageElements.DeliveryDetailsPgHeading().should('exist');
      CheckoutPageElements.AddNewAddress().should('exist').click();
      cy.wait(2000);
      CheckoutPageElements.AddressTitle().type(data.AddressTitle);
      CheckoutPageElements.ContactName().should('exist').type(data.ContactName);
      CheckoutPageElements.HouseName().should('exist').type(data.HouseName);
      CheckoutPageElements.PhoneNumber().should('exist').type(data.MobileNum);
      CheckoutPageElements.AreaName().should('exist').type(data.AreaName);
      CheckoutPageElements.CityName().should('exist').type(data.TownName);
      CheckoutPageElements.PostCode().should('exist').type(data.PostCode);
      CheckoutPageElements.ChooseCountry().should('exist').click();
      CheckoutPageElements. CountryValueUAE().should('be.visible').click();
      CheckoutPageElements.ChooseState().should('exist').click();
      CheckoutPageElements.StateSharjahEmirate().should('be.visible').click();
      CheckoutPageElements.SaveAdrressButton().should('exist').click();
      
    });

  }
  static PlaceCOD()
  {
    CheckoutPageElements.CheckBoxCOD().should('be.visible').click();
    cy.wait(2000);
    CheckoutPageElements.ProceedToPay().should('be.visible').click();
    cy.wait(4000);
  }
    
}

export default CheckOutMethods;
