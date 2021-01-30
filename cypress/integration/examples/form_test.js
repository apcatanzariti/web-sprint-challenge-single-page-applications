describe('Lambda Eats', () => {
    beforeEach(() => {
        // arbitrary code you want to run before test starts
        cy.visit('http://localhost:3001/pizza');
    });

    //can do our selector const variables here
    const nameInput = () => cy.get('input[name="name"]');
    const sizeInput = () => cy.get('select[name="size"]');
    const pepperoniInput = () => cy.get('input[name="pepperoni"]');
    const olivesInput = () => cy.get('input[name="olives"]');
    const baconInput = () => cy.get('input[name="bacon"]');
    const extraInput = () => cy.get('input[name="extra"]');
    const button = () => cy.contains('Send My Pizza!');
    const specialInput = () => cy.get('input[name="instructions"]');

    // our tests go here
    it('making sure tests work', () => { 
        expect(1 + 2).to.equal(3);
    });

    it('making sure the inputs work and the button behaves correctly', () => {
        // should initialize with a disabled button
        button().should('be.disabled');
        // type into name field and button should still be disabled
        nameInput().type('Example Person');
        button().should('be.disabled');
        // select a pizza size and the button should enable itself
        sizeInput().select('Large');
        button().should('not.be.disabled');
        // check all the boxes to make sure they work
        pepperoniInput().check();
        olivesInput().check();
        baconInput().check();
        extraInput().check();
        // type in the special instructions box to make sure it works
        specialInput().type('Send your cutest doggo');
        // submit the form
        button().click();

    })
});