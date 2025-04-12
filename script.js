function contagemMedalhas() {
    let lista = [];
  
    while (true) {
      let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");
  
      if (pais.toLowerCase() === "sair") {
        break;
      }
  
      let ouro = parseInt(prompt("Número de medalhas de ouro: "));
      let prata = parseInt(prompt("Número de medalhas de prata: "));
      let bronze = parseInt(prompt("Número de medalhas de bronze: "));
  
      let total = ouro + prata + bronze;
      lista.push({ pais: pais, total: total });
    }
  
    if (lista.length > 0) {
        
      lista.sort((a, b) => b.total - a.total);

      console.log("#Ranking de medalhas:");
      for (let item of lista) {
        console.log(`#${item.pais}: ${item.total} medalhas`);
      }
    } 
  }
  
  contagemMedalhas();  