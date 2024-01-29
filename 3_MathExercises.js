document.addEventListener('DOMContentLoaded',f_main);

function f_main()
{
    //Exercici 1

    document.getElementById('boto').addEventListener('click', f_ex1);

    //Exercici 2

    document.getElementById('boto2').addEventListener('click',f_ex2);

    //Exercici 3

    document.getElementById('boto3').addEventListener('click',f_ex3);

    //Exercici 4

    document.getElementById('boto4').addEventListener('click',f_ex4);
}

function f_ex1()
{
    let n = document.getElementById('num').value;

    if( !isNaN(n) && n == Number(n).toFixed(3) ){
        let meitat = n / 2;
        let quadrat = Math.pow(n, 2);
        let cub = Math.pow(n, 3);
        let arrel = Math.sqrt(n);

        document.getElementById('resultats').textContent = "Meitat: " + meitat.toFixed(3) + " - Quadrat: " + quadrat.toFixed(3)  + " - Cub: " + cub.toFixed(3)  + " - Arrel: " + arrel.toFixed(3) ;
    }else{
        document.getElementById('resultats').textContent = "El numero no es valid";
    }
}

function f_ex2()
{
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let n3 = document.getElementById('num3').value;

    if( isNaN(n1) || isNaN(n2) || isNaN(n3) || n1.trim() == '' || n2.trim() == '' || n3.trim() == '' ){
        document.getElementById('gran').textContent = "";
        document.getElementById('petit').textContent = "";

        alert("Les dades no son valides");
    }else{
        let max = Math.max(n1, n2, n3);
        let min = Math.min(n1, n2, n3);

        document.getElementById('gran').textContent = "El mes gran: " + max;
        document.getElementById('petit').textContent = "El mes petit: " + min;
    }
}

function f_ex3()
{
    let numeros = [];
    let numeros_ordenats = [];
    let reintegrament = Math.round(Math.random() * (9 - 0) + 0);

    for (let i = 0; i < 6; i++){
        let n = Math.round(Math.random() * (49 - 1) + 1);

        for(let j = 0; j < numeros.length; j++){
            if(n == numeros[j]){
                n = Math.round(Math.random() * (49 - 1) + 1);

                j--;
            }
        }
        numeros[i] = n;
    }


    for (let i = 0; i < 6; i++ ){
        let n = Math.min.apply(null, numeros);
        let eliminat = false;

        for (let j = 0; j < 6 && !eliminat; j++){
            if (numeros[j] == n){
                numeros[j] = 50;
                eliminat = true;
            }
        }

        if (n < 10){
            n = "0" + n;
        }
        numeros_ordenats[i] = n;
    }


    alert("Aposta Generada \n \n" + numeros_ordenats + "\n \n Reintegrament: " + reintegrament);
}

function f_ex4()
{
    let quiniela = [];

    for (let i = 0; i< 15; i++){
        let n = Math.round(Math.random() * (2 - 0) + 0);

        if(n == 0){
            quiniela[i] = "X";
        }else{
            quiniela[i] = n;
        }
    }

    document.getElementById('quiniela').textContent = quiniela;
}