describe('Login Page', () => {
    it('loads the login page', () => {
      cy.visit('http://localhost:3000');  // Visit the local app
      cy.contains('Login');  // Ensure the page contains the login form
    });
  
    it('shows success message on correct login', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[name="username"]').type('admin');  // Type in username
      cy.get('input[name="password"]').type('password');  // Type in password
      cy.get('button').click();  // Click the submit button
      cy.contains('Login successful!');  // Verify the success message
    });
  
    it('shows error message on incorrect login', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[name="username"]').type('wronguser');  // Type in wrong username
      cy.get('input[name="password"]').type('wrongpass');  // Type in wrong password
      cy.get('button').click();  // Click the submit button
      cy.contains('Invalid credentials. Please try again.');  // Verify the error message
    });
  });
  