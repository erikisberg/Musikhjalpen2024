const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});