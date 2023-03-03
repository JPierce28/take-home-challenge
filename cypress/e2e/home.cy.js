Describe('Home Page Test', () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000')
  })
  cy.intercept('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=9GLryxGbI4IPesd7tXkh0KKw9VAuZMNE', {
    method: 'GET',
    fixture: './home.json'
  })
})