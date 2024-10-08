const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/score.html');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});