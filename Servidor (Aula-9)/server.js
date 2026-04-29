require("colors");

var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("views", "./Views");
app.set("view engine", "ejs");
app.use(express.static("./Public"));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando...".rainbow);

app.get("/", function(req, res){

    res.redirect("naoindex.html");

})

app.get("/inicio", function(req, res){

    var text = req.query.text;
    var number = req.query.numero;
    var check = req.query.cb;
    var radio = req.query.rd;

    console.log(text,number,check,radio);  

    res.redirect("Aula-8");

})

app.post("/inicio", function(req,res){
    var text = req.body.text;
    var number = req.body.numero;
    var check = req.body.cb;
    var radio = req.body.rd;

    console.log(text,number,check,radio);  
    console.log("Requisição feita por POST");

})

app.post("/cadastro", function(req, res){

    var nome = req.body.nome;
    var login = req.body.login;
    var senha = req.body.senha;

    console.log(nome,login,senha)

    res.render("resposta.ejs", {resposta: "Sucesso pae ta logado"})

})

app.get("/for", function(req, res){

    var qtde = req.query.qtde;
    res.render("exemplo_for.ejs", {qtde})

    console.log(qtde)

})