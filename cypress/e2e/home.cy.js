describe('Home Page Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=9GLryxGbI4IPesd7tXkh0KKw9VAuZMNE', {
      method: 'GET',
      fixture: '../fixtures/home.json'
    })
  })
  it("Should display the home page with the correct components", () => {
    cy.get('.home-page').contains('h1', 'Home')
    cy.get('.global-header').contains('h1', 'NYT Sports')
    cy.get('.home-page').contains('h2', 'Filter By Sport')
    cy.get('.filter-option').contains('All Sports')
    cy.get('.article-card').should('have.length', '2')
    cy.get('.article-container > :nth-child(1)').contains('p', 'Sport: ncaabasketball')
    cy.get('.article-container > :nth-child(1)').contains('p', 'He Was Billed as the Next LeBron. But Will Emoni Bates Make It at All?')
    cy.get('.article-container > :nth-child(1)').contains('p', 'By Billy Witz')
    cy.get(':nth-child(1) > .image-container > .article-image').should('be.visible')
  })
  it("Should allow a user to filter articles by sport", () => {
    cy.get('.filter-option').select('football')
    cy.get('.article-card').should('have.length', '1')
    cy.get('.article-container > :nth-child(1)').contains('p', 'Sport: football')
  })
})