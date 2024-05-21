//Тестирование поиска товаров
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      });

      describe('User Login', () => {
    it('Поиск товара по его названию', () => { 
        cy.visit(Cypress.env("base_url")+"/shop");
        // Вводим название товара в поле поиска
        cy.get('input').type('pedigree');
        // Нажимаем кнопку поиска
        cy.get('form > button').click();
        // Проверяем, что результаты поиска отображаются
        cy.get('.pagination-line > :nth-child(2)').should('contain', '6');
        cy.get(':nth-child(1) > .product-item > .product-info > .title > a').each(($item,index, $list)=> {
            cy.wrap($item).should('contain.text', 'Pedigree');
        });
    });
    it('Проверка отображения сообщения об отсутствии результатов при поиске несуществующего товара', () => {
        cy.visit(Cypress.env("base_url")+"/shop");
        // Вводим название товара в поле поиска
        cy.get('input').type('test');
        // Нажимаем кнопку поиска
        cy.get('form > button').click();
        // Проверяем, что результаты поиска отображаются
        cy.get('.pagination-line > :nth-child(2)').should('contain', '0');
    });

      });