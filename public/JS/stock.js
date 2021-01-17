const { unwatchFile } = require("fs");
var connection = require("../JS/connect-database");
var list = document.querySelector("#list-group-item");

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
sleep(2000);

function selectbase() {
  connection.connect((erro) => {
    if (erro) {
      console.log("Erro ao conectar ao banco, erro: " + erro);
    }
  });
  list.innerHTML = "";
  var buscar_nome = document.querySelector("#nome_produto");
  // debugger

  console.log(buscar_nome);

  setTimeout(() => {}, 3000);

  connection.query(
    "SELECT * FROM tb_stock where Nome_produto like '%" +
      buscar_nome.value +
      "%';",
    function (error, results, fields) {
      buscar_nome.value = "";
      setTimeout(() => {
        if (error) {
          console.log("Este é o erro: " + error);
          alert("Produto Não Encontrado");
        }
        //  for(var i = 0; i <= results; i++){
        //    console.log(results[i]);
        //  }
        var i = 0;
        while (i <= results.length) {
          var li = document.createElement("li");
          list.appendChild(li);
          li.classList.add("list-group-item");

          li.innerHTML = results[i].Nome_produto + "R$: " + results[i].preco;
          i++;
        }
      }, 3000);
    }
  );
}
