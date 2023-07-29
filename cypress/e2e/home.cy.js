describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });

  it('Elemento p contiene texto', () => {
    cy.get('#test1').should('have.text', 'Diseños personalizados, diferentes estilos y estructuras para vivir en el hogar de tus sueños.');
  })

  it('Click en el boton cesta me dirige al cesta', () => {
    cy.get('#test2').click()
    cy.location('pathname').should('eq', '/cesta')
  })

  it('Navegar a login y loguear usurio', () => {
    // Prueba para verificar el login de user@mail.com y la pass 3Dreams
    cy.visit('http://localhost:5173/login');
    cy.get('input[id="email"]').type('user@mail.com')
    cy.get('input[id="password"]').type('3Dreams')
    cy.get('#login').submit()
    cy.location('pathname').should('eq', '/modelos');
  });

})

