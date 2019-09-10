var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.use(express.json);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ status: "success", message: "Welcom to testing api" });
});

app.post('/add', (req, res) => {
    var { num1, num2 } = req.body;
    var add = (num1, num2) => {
        return num1 + num2;
    };
    res.json({
        status: "success",
        message: "Welcom to testing api",
        result: add(num1, num2)
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
})

module.exports = app;