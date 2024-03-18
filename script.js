var botao = document.getElementById("botao")
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email=document.getElementById("email")
var email=document.getElementById("Telefone")
var email=document.getElementById("CEP")
var email=document.getElementById("Logradou")
var email=document.getElementById("Numero")
var email=document.getElementById("Complemeto")
var email=document.getElementById("Bairro")
var email=document.getElementById("Cidade")
var email=document.getElementById("Estado")

function alertar(){
    //alert("o nome inserido foi" + nome);

   saida.innerText = "nome:" + nome.value +
   "\n E-mail:" +email.value
   "\n E-mail:" + Telefone.value
   "\n E-mail:" + cep.value
   "\n E-mail:" + logradou.value
   "\n E-mail:" + numero.value
   "\n E-mail:" + complemento.value
   "\n E-mail:" + Bairro.value
   "\n E-mail:" + Cidade.value
   "\n E-mail:" + Estado.value

   ;

}  

