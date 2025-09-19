{
  const nome = "Ana"; //O valor Ana não pode mudar, const primitiva congelada. Const trava o rotulo variavel.
  nome = "Carlos";
  console.log(nome);
}
// quando um valor é um primitivo (string, numero, boolean), esse espaço é fixo e imutavel.
// Ja em arrays e objetos, o 'conteudo interno', pode mudar mas o ponteiro continua apontando pro meesmo lugar.
{
  let idade = 20; // Nesta variavel o valor pode ser alterado.
  idade = +5; // aqui somo 5 ao valor dentro da variavel.
  console.log(Idade);
}
//O valor muda sem erro.
// Existe diferença pratica de const para let.

let mensagem = "Fora";
{
  let mensagem = "Dentro";
  console.log(mensagem);
}
console.log(mensagem);

//troca de var por let
var mensagem = "fora";
{
  var mensagem = "Dentro";
  console.log(mensagem);
}
console.log(mensagem);
//A variavel dentro do escopo foi sobrescrita, por que ele substitui a variavel que estava fora.
//escopo de function vs escopo de bloco
function exemplo() {
  let valor = "42";
  console.log("Dentro", valor);
}
exemplo();
console.log("Fora", valor); //"dentro 42"
//fora da funçao ERRO!

