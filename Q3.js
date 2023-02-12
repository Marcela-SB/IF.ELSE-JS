function Q3() {
  var passagem= prompt("Insira o valor da passagem...");
      
  if (passagem<200) {
    document.write("<p>VIAJOU</p>");
  }
  else if (passagem>=200 && passagem<=299) {
    document.write("<p>VAI VIAJAR</p>");
  }
  else if (passagem>=300 && passagem<=349) {
    document.write("<p>TALVEZ VIAJE</p>");
  }
  else {
    document.write("<p>NÃO VIAJOU</p>");
  }
}
