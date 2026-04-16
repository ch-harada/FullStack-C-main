document.getElementById("d1").innerHTML = "Boladao";

// let nome = prompt("digite seu nome");
// let idade = prompt("digite sua idade");
// let ano = 2026;

// let anonasc = ano - idade;

// document.getElementById("resp_ex1").innerHTML = "Olá " + nome + ", seu ano de nascimento é " + anonasc;

function alerta(){
    alert("AAAAAAAAAAAAAAAAAAAAAAHHHHHHH");
}
alerta();

function soma(a,b){
    return a + b
}

resp = soma()
document.getElementById("soma").innerHTML = resp

function exemplo2(){
    let x = parseInt(document.getElementById("in_ex").value);

    for(let i =1; i <= x; i++){
        console.log(x + i);
    }

    document.getElementById("resp_ex2").innerHTML = x;
}


function exemplo3(){
    let a = parseInt(document.getElementById("in1_ex3").value);
    let b = parseInt(document.getElementById("in2_ex3").value);
    let resp = soma(a,b);
    document.getElementById("resp_ex3").innerHTML = resp;
}

function exemplo4(){
    let a = parseInt(document.getElementById("in1_ex4").value);
    let b = parseInt(document.getElementById("in2_ex4").value);
    if(a < 0 || b < 0){
        let resp = soma(a,b);
        document.getElementById("resp_ex4").innerHTML = resp;
    }
    else{
        let resp = a * b;
        document.getElementById("resp_ex4").innerHTML = resp;
    }
}