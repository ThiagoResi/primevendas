
var mysql = require('mysql'); 
var connection = mysql.createConnection({ host : 'localhost', user : 'root', password : '210557trc*'}); 

connection.query('CREATE DATABASE primevendas_database;', (error, result, fields) =>{
    if (error) {
        console.log("Erro: " + error);
    }
    else{
        console.log('Banco Criado com sucesso');
    }
});
connection.query('use primevendas_database;', (erro, result) => {
    if (erro) {
        console.log(erro);
    }
    else{
        console.log('Banco selecionado com sucesso');
    }
})

connection.query('create table tb_stock ( ID int NOT NULL auto_increment primary key, Nome_produto varchar(30), quantidade int, preco varchar(10));', (erro, result) => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log('tabela Criada com sucesso');
    }
})
connection.query("use primevendas_database;", (erro, result) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log("Banco selecionado com sucesso");
    }
});

module.exports = connection;