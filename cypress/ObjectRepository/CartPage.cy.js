class CartPageElements
{
    static CartPageHeading()
    {
        return cy.xpath("(//*[contains(text(),'My Cart')])[1]");
    }

    static CheckoutButton()
    {
        return cy.xpath("//button[contains(text(),'CHECKOUT')]");
    }

    static TextContains(data)
    {
        return cy.xpath("(//*[contains(text(),'" + data + "')])[1]");
    }

}

export default CartPageElements;