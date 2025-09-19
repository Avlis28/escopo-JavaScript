//Primeiro codigo 
console.log('Hello World!');

// entendendo escopo global e local
// escopo com var 
 if (true) {
    var fruta = 'maçã';
    console.log(fruta);
 }
    console.log(fruta); // a variável fruta está visível aqui fora do bloco if

// escopo com let respeitando o bloco
    if (true) {
        let cor = 'azul';
        console.log(cor);
    }
    console.log(cor); // a variável cor não está visível aqui fora do bloco if

// escopo com const respeitando o bloco
    if (true) {
        const animal = 'cachorro';
        console.log(animal);
    }
    console.log(animal); // a variável animal não está visível aqui fora do bloco if

// escopo de função
function teste() {
   let numero = '4';
    console.log(numero); // a variávelvnumero está visível aqui dentro da função
}
teste();
console.log(numero); // a variável numero não está visível aqui fora da função


//const com objtos mutaveis 
const lista = ['maçã', 'banana', 'laranja'];
lista.push('uva'); // Adiciona um novo item ao array
console.log(lista); // ['maçã', 'banana', 'laranja', 'uva'] 

lista = ['abacaxi']; // Isso causará um erro, pois estamos tentando reatribuir a constante



