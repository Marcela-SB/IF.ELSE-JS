function Q1() {
  var peso, altura;

  peso= prompt("Qual o seu peso?");
  altura= prompt("Qual a sua altura?");

  if ((peso>=80) && (altura<1,65)) {
    document.write("<p id='anormal'>Sobrepeso... Cuidado com a saúde!</p>")
  }
  else if ((peso<50) && (altura<1,35)) {
    document.write("<p id='anormal'>Magreza... Cuidado com a saúde!</p>");
  }
  else{
    document.write("<p id='normal'>Peso normal... Continue cuidando da saúde!</p>");
  }
}
