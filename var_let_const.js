// var -> Possui escopo global.

var altura = 5;
var comprimento = 7;
if(true){
    var area = altura * comprimento;
}

console.log(area);
console.log("============================");

// let -> Possui escopo no bloco onde foi inicializada.

let a = 15;
let b = 5;
if(true){
    let b = 50;
    console.log('a dentro do if: ', a);
    console.log('b dentro do if: ', b);
}

console.log('a fora do if: ', a);
console.log('b fora do if: ', b);
console.log("============================");

// const -> É uma constante que possui escopo no bloco onde foi inicializada.

if(true){

    const x = 15;

    if(true){
        console.log('Dentro do if que esta dentro do if: ',x);
    }
    // x = 10 erro pois uma variavel constante não pode ser modificada.
    console.log('Dentro do if: ',x);

}

// console.log('Fora do if: ',x); erro pois não esta definida nesse escopo.
