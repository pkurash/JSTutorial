var numeroSecreto = parseInt(Math.random() * 10 + 1);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if ( chute == numeroSecreto ) {
    elementoResultado.innerHTML = "voce acertou";
  } else if ( chute > 10 || chute < 0 ) {
    elementoResultado.innerHTML = "voce deve digitar um numero de 0 a 10";
  } else {
    elementoResultado.innerHTML = 
     "Errou, o numero secreto era " + numeroSecreto;
  }
}
