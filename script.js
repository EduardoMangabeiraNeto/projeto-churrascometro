/*carne - 400g por pessoa + de 6h = 650g
cerveja - 1200ml por pessoa +  de 6h = 2000ml
refrigerante/água - 1000ml por pessoa + de 6h = 1500ml
crianças valem 0,5*/

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;

  let qtdCerveja = cervejaPP(duracao) * adultos;

  let qtdTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne </p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtdCerveja / 355
  )} Latas de Cerveja </p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalBebidas / 2000
  )} Pet's de 2l de Bebidas </p>`;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
