class PDPPageElements
{

    static ProductName()
    {
        return cy.xpath("//h1[contains(@class,'title')]");
    }
    static AddToCartButton()
    {
        return cy.xpath("(//button[contains(text(),'Add to Cart')])[1]");
    }
}

export default PDPPageElements;