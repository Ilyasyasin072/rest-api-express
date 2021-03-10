const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
const port = process.env.PORT;
const routes = require('./routes/router');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json({
    limit: "8mb",
}));

app.get('/', (req, res) => {
    res.send('App is working')
})

app.use('/api', routes)

app.listen(process.env.PORT, () => {
    console.log(`Example App http://localhost:${port}`);
})

module.exports = {
    app
}