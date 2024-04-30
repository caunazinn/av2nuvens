const express = require("express"); 
const app = express(); 

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
})

app.get("/primeirarota", function(req,res){
    res.send("<h1>Essa é a primeira rota do trabalho!</h1>");
})

//rota com parametro localhost:3000/consulta/joao
app.get("/venda/:parametro", function(req,res){
    res.send("numero da venda:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/seunome/:nome?", function(req,res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>o nome indicado no parametro é: " + nome + " !</h1>");
    }else{
        res.send("nenhum nome no parametro! ");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){ 
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
