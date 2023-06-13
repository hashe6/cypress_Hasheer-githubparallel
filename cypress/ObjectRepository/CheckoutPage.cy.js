class CheckoutPageElements
{

    static TextContains(data)
    {
        return cy.xpath("(//*[contains(text(),'" + data + "')])[1]");
    }
    static DeliveryDetailsPgHeading()
    {
        return cy.xpath("(//*[contains(text(),'Choose Your Delivery Method')])[1]");
    }
    static AddNewAddress()
    {
        return cy.xpath("//button[contains(text(),'Add New Address')]");
    }
    static AddressTitle()
    {
        return cy.get('.mb-3 > .form-control')
    }
    static ContactName()
    {
        return cy.xpath("//*[@name='contactPerson']");
    }
    static HouseName()
    {
        return cy.xpath("//*[@name='addressLine1']");
    }
    static PhoneNumber()
    {
        return cy.xpath("//*[@name='phone']");
    }
    static AreaName()
    {
        return cy.xpath("//*[@name='area']");
    }
    static CityName()
    {
        return cy.xpath("//*[@name='city']");
    }
    static PostCode()
    {
        return cy.xpath("//*[@name='postCode']");
    }
    static ChooseCountry()
    {
        return cy.xpath("//*[@id='country']");
    }
    static CountryValueUAE()
    {
        return cy.xpath("//*[@class='dropdown-item'][contains(text(),'United Arab Emirates')]");
    }
    static ChooseState()
    {
        return cy.get('#state > .text-start');
    }
     static StateSharjahEmirate()
   {
        return cy.xpath("//*[@class='dropdown-item'][contains(text(),'Sharjah Emirate')]");
   }
    static SaveAdrressButton()
    {
        return cy.xpath("//*[contains(text(),'Save Address')]");
    }
    static CheckBoxCOD()
    {
        return cy.xpath("//input[@id='cod']//parent::div");
    }
    static ProceedToPay()
    {
        return cy.get('.btn-summary > .btn');
    }
    
    // static AddressTitleValue(data)
    // {
    //     return cy.xpath();
    // }

}

export default CheckoutPageElements;