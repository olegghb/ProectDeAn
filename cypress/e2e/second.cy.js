// Тестирование страницы товара: Проверка корректного отображения информации о товаре.
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
  
  describe('Second test', () => {
    it('Should display correct data from backend', () => {
        cy.visit(Cypress.env("base_url"));

        // Click on the product image to go to the product details page
        cy.get(':nth-child(1) > .product-item > .product-thumb > a > img').click();

        cy.url().then((url) => {
            // Parse the URL to extract the product ID
            const urlParts = url.split('/');
            const productId = urlParts[urlParts.length - 1];
            cy.log(productId);

            // Request product data from the backend using the extracted product ID
            cy.request("GET", `${Cypress.env("backend")}/fetch-products/${productId}`).then(res => {
                const body = res.body;
                console.log(body);

                // Verify the product title
                cy.get('.main-title').invoke("text").then(text => {
                    expect(text.trim()).to.eq(body.title);
                });

                // Verify the product price
                cy.get('.product-single-info > .prices > .price').invoke("text").then(text => {
                    const price = text.replace("$", "").trim();
                    expect(parseFloat(price)).to.eq(body.price);
                });

                // Verify the product image URL
                cy.get('.lightbox-image > img').invoke('attr', 'src').then(src => {
                    expect(src).to.eq(body.image);
                });

                // Verify the product description
                cy.get('p').invoke('text').then(text => {
                    expect(text.trim()).to.eq(body.description);
                });

                // Verify the product code
                cy.get('.product-single-meta > ul > li').invoke("text").then(text => {
                    expect(text).to.contain(body.product_code);
                });
            });
        });
    });
});