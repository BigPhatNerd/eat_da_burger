const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const exhbs = require("express-handlebars");

const routes = require('./controller/burgers_controller');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', exhbs({ defaultLayout: "main" }));
app.set("view engine", 'handlebars');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}!`)
});