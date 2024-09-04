let reloj = document.getElementById("reloj");
let hora = "";
let minutos = "";
let segundos = "";

relojActivo();
setInterval(relojActivo, 1000);

function relojActivo(){
    let fecha = new Date();
    horaBruto = fecha.getUTCHours();
    minutosBruto = fecha.getUTCMinutes();
    if(minutosBruto < 10){
        minutos = '0' + minutosBruto;
    }
    else{
        minutos = minutosBruto;
    }
    segundosBruto = fecha.getUTCSeconds();
    if(segundosBruto < 10){
        segundos = '0' + segundosBruto;
    }
    else{
        segundos = segundosBruto;
    }
    reloj.textContent = `${horaBruto}:${minutos}:${segundos}`;
}