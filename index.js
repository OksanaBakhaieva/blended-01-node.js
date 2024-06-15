import express from 'express';

const server = express();

server.get('/', (request, response) => {
    response.send('<h1>Home page</h1>')
})
server.get('/contacts', (request, response) => {
    response.send('<h1>Contacts page</h1>')
})

export default server;

