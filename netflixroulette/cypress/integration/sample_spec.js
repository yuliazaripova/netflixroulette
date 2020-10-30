describe('App test', () => {
  it('can visit the Netflixroulette', () => {
    cy.visit('http://localhost:8080');
  });
  it('can send request', () => {
    cy.request('https://reactjs-cdp.herokuapp.com/movies?search=stars')
    .then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })
})

describe("Form test", () => {
  it("can fill the form", () => {
    cy.get("form");
    cy.get('#search-form_input')
      .type("this is the search query")
      .should("have.value", "this is the search query");
    cy.get("form").submit();
  });
});
