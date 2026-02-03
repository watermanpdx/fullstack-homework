const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect(302, '/form');
});

app.get('/form', (req, res) => {
  // User input form
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`
    <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="email" required><br>
        <label for="comments">Comments:</label>
        <input type="text" id="comments" name="comments" placeholder="leave a message" ><br>
        <label for="newsletter">Sign-up for the newsletter?</label>
        <input type="checkbox" id="newsletter" name="newsletter" value="newsletter"><br><br>

        <button type="submit">Submit</button>
    </form>`);
});

app.post('/submit', (req, res) => {
  // Response to form submission

  // Extract and format input data
  let { name, email, comments, newsletter } = req.body;
  comments = comments !== '' ? comments : 'n/a';
  newsletter = newsletter
    ? 'Yes, sign me up for the newsletter.'
    : 'No, thank you.';

  // Respond back with submitted data
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Comments: ${comments}</p>
    <p>Newsletter: ${newsletter}</p>
    `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
