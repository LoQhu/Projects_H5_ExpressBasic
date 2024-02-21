// Example project for serverside scripting
//const http = require('http'); // no longer using http - using express instead
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//Replacing the http server with express implementation
// const server = http.createServer((req, res) => {

//     res.write('Hello my many Worlds!');
    

//     res.end();
// });

// server.listen(3003, () => {
//     console.log('Server is running on port 3003');
// });

app.listen(3003, () => {
    console.log('Server is running on port 3003');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});