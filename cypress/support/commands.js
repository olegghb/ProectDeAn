// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const mongoose = require('mongoose');

Cypress.Commands.add('connectdb', (collection)=>{
    return mongoose.connect("mongodb+srv://olegbotnarenco13:123qweasdzxc@cluster0.ij1qshr.mongodb.net/baza1?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true}, function(err){
    if(err) return console.log(err);
    if(!err){
        console.log("Сервер ожидает подключения...");
    };
});
})