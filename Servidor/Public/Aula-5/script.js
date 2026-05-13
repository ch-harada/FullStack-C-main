// console.log("hello world");
// let entrada = prompt("Digite um numero");
// console.log(entrada);
// for(let i=0; i < 10; i++){
//     window.alert(i)
// }

// console.log("Atividade 1")
// for(let i = 1; i<=100; i++){
//     if (i % 2 != 0){
//         console.log(i)
//     }  
// }
// console.log("Atividade 2")
// for(let i = 1; i<=500; i++){
//     if (i % 5 == 0){
//         console.log(i)
//     }  
// }
let entrada = prompt("Digite um número inteiro positivo")
// for(let i=entrada; i>0; i--){
//     console.log(i)
// }
var acum = 1
entrada2= entrada
for(let i=1; i!=entrada; i++){
    acum = acum*entrada2
    entrada2= entrada2 - 1
    console.log(acum)
}


