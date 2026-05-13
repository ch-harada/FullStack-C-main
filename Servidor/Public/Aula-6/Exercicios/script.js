function random(){
    let x = Math.floor(Math.random()* 51);
    document.getElementById("resp_exe1").innerHTML = x;
}

function ex2(){
    let x = parseInt(document.getElementById("in1_ex2").value);
    if (x>=0 && x<=10){
        let y = "Insuficiente";
        document.getElementById("resp_exe2").innerHTML = y;
    }
    if (x>10 && x<=15){
        let y = "Bom";
        document.getElementById("resp_exe2").innerHTML = y;
    }
    if (x>15){
        let y = "Muito Bom";
        document.getElementById("resp_exe2").innerHTML = y;
    }
}
