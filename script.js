 //Criando scripts em JavaScript

        //Mensagem de boas vindas
        //alert ("Sejam todos bem vindos a nossa aula de JavaScript");

        // Criando uma variável de armazenamento para o nosso prompt

        var nome_usuario;

        // Criando uma interação com o usuário
        /*nome_usuario = prompt("Seja bem vindo a aula de JavaScript, qual é o seu nome", "Digite o seu nome");
        alert("Seja bem vindo(a) " + nome_usuario);*/

        //Trabalhando com variáveis dentro do JavaScript e inseriu um valor
        var nome = "Sejam bem vindos a ";
        var empresa = "Gama Academy";

        document.write(nome + empresa + "<br> com o professor Ricardo A. Bontempo <br>");

        // Criando somente uma variável sem valor agregado
        var num1, num2, soma, subtracao, divisao, multiplicacao;

        // Agregando um valor a variável
        num1 = 5;
        num2 = 6;

        //alert (nome+empresa);


        document.getElementById("mensagem").innerHTML = ("testando")

        //Calculando as variáveis 
            soma = num1 + num2;
            subtracao = num1 - num2;
            multiplicacao = num1 * num2;
            divisao = num1 / num2;

            
        document.write(`A soma de ${num1} e ${num2} é ${soma} <br>`);
        document.write(`A subtração de ${num1} e ${num2} é ${subtracao} <br>`);
        document.write(`A multiplicação de ${num1} e ${num2} é ${multiplicacao} <br>`);
        document.write(`A divisão de ${num1} e ${num2} é ${divisao} <br>`);

        function resultados_calculados() {
            alert("Olá --- :)")
        }

        const frutas = ["laranja", "melancia", "uva", "pera"];
        document.getElementById("frutas").innerHTML = frutas;

        alert (frutas.length())

        alert("Número de vezes que estamos rodando " + contador)
        for (contador = 0; contador<frutas.length; contador++){
            alert("Número de vezes que estamos rodando " + contador)
          alert("Fruta " + contador + "-" + frutas[contador])  

        }