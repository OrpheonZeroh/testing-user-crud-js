const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
const { users } = require("./endpoints");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const usersHandlers = users({ axios });
app.get("/", usersHandlers.get);
app.post("/", usersHandlers.post);
app.put("/:id", usersHandlers.put);
app.delete("/:id", usersHandlers.delete);

app.listen(port, () => console.log(`Server Running ${port}!`));
