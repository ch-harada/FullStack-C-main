require("colors");

var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://dbUser:SenhaBolada@cluster0.v1dast6.mongodb.net/?appName=Cluster0"

const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");

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

app.post("/cadastrar_user", function(req,res){
    var data = { dbnome: req.body.nome_bd, dblogin: req.body.login_bd, dbsenha: req.body.senha_bd};

    usuarios.insertOne(data, function(err){
        if (err) {
            res.render("resposta_usuario.ejs", {resposta: "Erro ao cadastrar usuário!"})
        }else{
            res.render("resposta_usuario.ejs", {resposta: "Usuário cadastrado com sucesso!"});
        };
    });

});

app.post("/logar_user", function(req,res){
    var data = { dblogin: req.body.login_bd, dbsenha: req.body.senha_bd};

    usuarios.find(data).toArray(function(err, items){
        console.log(items);
        if(items.length == 0) {
            res.render("resposta_usuario", {resposta: "Usuário/Senha não encontrados!"})
        } else if (err){
            res.render("resposta_usuario", {resposta: "Erro ao logar usuário"})
        } else {
            res.render("resposta_usuario", {resposta: "Usuário logado com sucesso!"})
        };
    });

});