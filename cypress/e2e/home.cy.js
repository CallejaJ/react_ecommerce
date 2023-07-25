describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/')
  });

  it('Elemento p contiene texto', () => {
    cy.get('#test1').should('have.text', 'Diseños personalizados, diferentes estilos y estructuras para vivir en el hogar de tus sueños.');
  })

  it('Click en el boton carrito me dirige al carrito', () => {
    cy.get('#test2').click()
    cy.location('pathname').should('eq', '/carrito')

  })
})

