let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 == num2) {
    console.log("a soma dos dois numeros é: " + (num1 + num2));
} else if (num1 !== num2) {
    console.log('a multiplicação dos dois numeros é: ' + num1 * num2);
} else {
    console.log("Os dois números são iguais.");
}