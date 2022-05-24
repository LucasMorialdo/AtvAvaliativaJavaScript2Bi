function atv1() {

    var num1, divisivel;

    num1 = prompt("Digite um número inteiro: ");

    if ((num1 % 2 == 0) || (num1 % 7 == 0)) {
        divisivel = "Esse número é divisível por 2 OU por 7";
    } else {
        divisivel = "Esse número não é divisível por 2 OU por 7";
    }

    document.getElementById("resultado").innerHTML = divisivel;
}
function atv2() {

    var num1, diaSemana;

    num1 = Number(prompt("Digite um número inteiro: "));

    switch (num1) {
        case 1:
            diaSemana = "Domingo";
            break;
        case 2:
            diaSemana = "Segunda-feira";
            break;
        case 3:
            diaSemana = "Terça-feira";
            break;
        case 4:
            diaSemana = "Quarta-feira";
            break;
        case 5:
            diaSemana = "Quinta-feira";
            break;
        case 6:
            diaSemana = "Sexta-feira";
            break;
        case 7:
            diaSemana = "Sábado";
            break;
        default:
            diaSemana = "Inválido";
            break;
    }

    document.getElementById("resultado").innerHTML = "O dia correspondente é: " + diaSemana;
}
function atv3() {

    var num1, i, s = "";

    num1 = Number(prompt("Digite um número inteiro: "));

    for (i = 1; i < 11; i++) {
        var resultado = num1 * i;
        s += "<br>" + num1 +  " * " + i + " = " + resultado;
    }

    document.getElementById("resultado").innerHTML = s;
}
function atv4() {
    var totalFolhas = 0, resultado = 0.0, varAux = 0;

    totalFolhas = Number(prompt("Digite o número de cópias desejado"));

    if (totalFolhas > 100){
        varAux = totalFolhas;

        resultado = 100 * 0.25;

        varAux = varAux - 100;

        resultado += varAux * 0.20;
    }

    document.getElementById("resultado").innerHTML = "O total a ser pago por " + totalFolhas + " cópias é: R$" + resultado;
}
function atv5(){

    var totalSalario = 0.0, financiamentoPretendido = 0.0, resultado;

    totalSalario = Number(prompt("Digite o salário total: "));

    financiamentoPretendido = Number(prompt("Digite o valor do financiamento desejado: "));

    if ((totalSalario * 5) <= financiamentoPretendido) {
        resultado = "Financiamento concedido!";
    } else {
        resultado = "Financiamento negado!";
    }


    document.getElementById("resultado").innerHTML = resultado + "<br>" + "Obrigado por nos consultar!";
}