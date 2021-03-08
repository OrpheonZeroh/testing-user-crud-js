const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
const { posts } = require("./endpoints");
const { authenticate } = require('./middlewares')
const services = require('./services')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const postHandlers = posts(services);
app.post("/", authenticate, postHandlers.post);


app.listen(port, () => console.log(`Server Running ${port}!`));

module.exports = app