class HomePageElements {
    
    static SignInLink() {
        return cy.xpath("//span[contains(text(),'Sign In')]");
    }
    static UserName() {
        return cy.get('#username');
    }
    static Password() {
        return cy.xpath("//input[@name='password']");
    }
    static SignInButton() {
        return cy.get(":nth-child(4) > .btn");
    }
    static SearchBox() {
        return cy.xpath("//input[@type='text']");
    }
    static SearchIcon() {
        return cy.xpath("//button[@aria-label='search']");
    }
    static TopOffersLabel() {
        return cy.xpath("//h3[contains(text(),'Top Offers')]");
    }
    static GlobalCartIcon() {
        return cy.xpath("//span[contains(text(),'Cart')]");
    }
    static clickImage() {
        return cy.xpath("(//div[@class='card-body'])[1]/a");
    }

}

export default HomePageElements;
