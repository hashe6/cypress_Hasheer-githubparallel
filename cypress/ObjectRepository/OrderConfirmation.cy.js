class OrderConfirmationPageElements
{
    static OrderConfirmationUpdate()
    {
        return cy.xpath("//h5[contains(text(),'Thanks for your order!')]");
    }

    static OrderNumberCapture()
    {
        return cy.xpath("//h6[@class='mb-2']");
    }

}
export default OrderConfirmationPageElements;