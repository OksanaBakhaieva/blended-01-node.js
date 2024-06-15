import express from "express";
import studentsRouter from "./routers/studentsRouter.js";

const server = express();

server.use(express.json());
server.use("/students", studentsRouter);

export default server;

/* server.get("/", (request, response) => {
  response.send("<h1>Home page</h1>");
});
server.get("/contacts", (request, response) => {
  response.send("<h1>Contacts page</h1>");
}); */
