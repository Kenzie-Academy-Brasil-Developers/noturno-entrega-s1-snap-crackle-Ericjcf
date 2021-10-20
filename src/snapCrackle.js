// versão sem primo
function snapCrackle(maxvalue) {

  let retorno = []
  for (let indice = 1; indice <= maxvalue; indice++) {
    if (indice % 2 != 0) {
      if (indice % 5 == 0) {
        retorno.push('SnapCrackle')
      }else{
        retorno.push('Snap')
      }
    }
    if (indice % 2 == 0){
      if (indice % 5 == 0) {
        retorno.push('Crackle')
      }else{
        retorno.push(indice)
      }
    }
  }
  retorno = retorno.join(", ")
return retorno;
}
console.log(snapCrackle(10))

// teste da versão com primo