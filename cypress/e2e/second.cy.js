// Тестирование страницы товара: Проверка корректного отображения информации о товаре.
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
  
  describe('Second test', () => {
    it('Should display correct data from backend', () => {
        cy.visit(Cypress.env("base_url"));
        cy.get(':nth-child(1) > .product-item > .product-thumb > a > img').click();
        const productId = "65d217cc0e443b9844719634";

        cy.request("GET", `${Cypress.env("backend")}/fetch-products/${productId}`).then(res => {
            const body = res.body;
            console.log(body);

            cy.get('.main-title').invoke("text").then(text=> {
                expect(text).to.eq(body.title);
            });
            

            cy.get('.product-single-info > .prices > .price').invoke("text").then(text => {
                const price  = text.replace("$", "");
                expect(+price).to.eq(body.price);
            });

            cy.get('.lightbox-image > img').invoke('attr', 'src').then(src => {
                expect(src).to.eq(body.image);
            });

            cy.get('p').invoke('text').then(text => {
                expect(text).to.eq(body.description)
            })

            cy.get('.product-single-meta > ul > li').invoke("text").then(text => {
                expect(text).to.contain(body.product_code)
            })
            



        })

    })
  })