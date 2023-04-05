document.addEventListener ("click" , showcolor );

document.getElementById ( "botao" ).addEventListener ( "click" , shownome );

function showcolor() 
{
    document.body.style.backgroundColor = "red";
}

function shownome ()
{
    let ususario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é:" + ususario;
    document.getElementById("nome").value = "";
}