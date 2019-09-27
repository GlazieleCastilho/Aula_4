let valor1 = Number(prompt("Digite um numero"));
let op = prompt("Escolha o operador");
let valor2 = Number(prompt("Digite um número"));

if (op == "Somar") {
  let res = parseInt(valor1) + parseInt(valor2);
  document.write(`${res}`);
} else {
  if (op == "Subtrair") {
    let res = valor1 - valor2;
    document.write(`${res}`);
  } else {
    if (op == "Multiplicar") {
      let res = valor1 * valor2;
      document.write(`${res}`);
    } else {
      let res = valor1 / valor2;
      document.write(`${res}`);
    }
  }
}
