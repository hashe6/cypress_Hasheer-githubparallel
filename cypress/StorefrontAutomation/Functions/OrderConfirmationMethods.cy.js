import OrderConfirmationPageElements from '../../ObjectRepository/OrderConfirmation.cy';

class OrderConfirmationMethods {
    static orderConfirm() {
        OrderConfirmationPageElements.OrderConfirmationUpdate().should('exist').then(($value) => {
            const text = $value.text()
            cy.log("Order Confirmed " + text);
        });


    }

    static OrderNum() {
        cy.wait(2000)
        OrderConfirmationPageElements.OrderNumberCapture().should('exist').then(($value) => {
            let text1 = new Array()
            text1 = $value.text().split("#")[1].split(" has")[0]
            cy.wrap(text1).as('OrderNumber')
        });
    }
}

export default OrderConfirmationMethods;
