// node-app/app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files like CSS or JS
app.use(express.static(path.join(__dirname, 'public')));

// Home route that renders the login form
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Login Page</title>
            <link rel="stylesheet" type="text/css" href="/styles.css">
        </head>
        <body>
            <h1>Login</h1>
            <form action="/login" method="POST">
                <div>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </body>
        </html>
    `);
});

// Route to handle form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        res.send('<h1>Login successful!</h1>');
    } else {
        res.send('<h1>Invalid credentials. Please try again.</h1>');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
