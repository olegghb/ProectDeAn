//Проверка успешного входа пользователя с правильными учетными данными.
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});
describe('User Login', () => {
    it('should successfully log in with valid credentials', () => {
      cy.visit(Cypress.env("base_url")+"/account-login");
  
      // Введите корректные учетные данные
      cy.get('#username').type('correctUsername');
      cy.get('#password').type('correctPassword');
  
      // Нажмите кнопку входа
      cy.get(':nth-child(3) > .form-group > .btn-login').click();
  
      // Ожидайте, что перенаправление на домашнюю страницу или отображение сообщения об успешном входе
      cy.url().should('include', '/account'); 
    });
  
    it('should not navigate to account', () => {
      cy.visit(Cypress.env("base_url")+"/account-login");
  
      // Введите некорректные учетные данные
      cy.get('#username').type('wrongUsername');
      cy.get('#password').type('wrongPassword');
  
      // Нажмите кнопку входа
      cy.get(':nth-child(3) > .form-group > .btn-login').click();

      cy.url().should('not.equal', '/account'); 
    });
  });
  