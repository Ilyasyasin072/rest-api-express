const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
const port = process.env.PORT;
const routes = require('./routes/router');

// const cors = require('cors')

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json({
    limit: "8mb",
}));

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", process.env.DOMAIN); // update to match the domain you will make the request from
    
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    
    next();
  });

app.get('/', (req, res) => {
    res.send('App is working')
})

app.use('/api', routes)

app.listen(process.env.PORT, () => {
    console.log(`Running http://localhost:${port}`);
})

module.exports = {
    app
}