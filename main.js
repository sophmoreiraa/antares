document.addEventListener ("click" , showcolor );

document.getElementById ( "botao" ).addEventListener ( "click" , shownome );

document.getElementById ( "btn-soma" ).addEventListener ( "click" , soma );

document.getElementById ( "btn-dividir" ).addEventListener ( "click" , dividir );


function showcolor () 
{
    document.body.style.backgroundColor = "red";
}

function shownome ()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é:" + usuario;
    document.getElementById("nome").value = "";
}

function soma ()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML = parseFloat (num1 ) + parseFloat (num2);
}

function dividir ()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("resultado21").innerHTML = parseFloat (num1 ) / parseFloat (num2);
}