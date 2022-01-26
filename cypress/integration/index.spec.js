describe("Main", () => {
  it("It shoudl load the main page", () => {
    // Start from the index pageProps
    cy.visit("/")

    // Find the title of the page
    cy.get("h1").contains("Franklin")

    // Find links for socials with href attributes
    // Find Github link
    cy.get('a[href*="https://www.github.com/makyfj"]')
    // Find Linkedin link
    cy.get('a[href*="https://www.linkedin.com/in/franklin-jara-fj"]')
    // Find Resume link
    cy.get('a[href*="files/FranklinJaraResume.pdf"]')

    // Find paragraph with information about me
    // Find paragraph with information about toolkit

    // Find the footer
    cy.get("p").contains("Franklin Jara")
    cy.get("p").contains("Software Engineer")
  })
})
