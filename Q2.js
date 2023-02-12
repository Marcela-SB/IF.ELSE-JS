function Q2() {
  var media, faltas;
      
  media= prompt("Insira a média do aluno...");
  faltas= prompt("Insira a quantidade de faltas do aluno...");
      
  if (media>=7 && faltas<5) {
    document.write("<p id='ap'>APROVADO</p>");
  }
  else {
    document.write("<p id='rep'>REPROVADO</p>");
  }
}
