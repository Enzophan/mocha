var express = require('express');
var app = express();

app.use(express.json);

app.get('/', (req, res) => {
    res.json({ status: "sucess", msg: "Welcom to testing api" });

}
);

app.post('/add', (req, res) => {
    var { num1, num2 } = req.body;
    var add = (num1, num2) => {
        return num1 + num2;
    };
    res.json({
        status:"sucess",
        msg:"Welcom to testing api",
        result: add(num1,num2)
    });
});

var PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log("Server start on PORT: " + PORT))

module.exports = app;