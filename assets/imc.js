function calcularImc(){
    let input1 = document.getElementById("entrada-peso");
    let input1num = Number(input1.value)
    let input2 = document.getElementById("entrada-altura");
    let input2num2 = Number(input2.value)
    let resultado = document.getElementById("resultado")
    let res = ""

    res = Math.floor(input1num / (input2num2 * input2num2));
    if(res > 0.1 && res < 18.5){
        resultado.innerHTML = `O resultado foi ${res}, abaixo do peso.`
    }else if(res >= 18.5 && res < 24.9){
        resultado.innerHTML = `O resultado foi ${res}, Peso normal.`
    }else if(res >= 25 && res <= 29.9){
        resultado.innerHTML = `O resultado foi ${res}, Sobrepeso.`
    }else if(res >= 30 && res <= 34.4){
        resultado.innerHTML = `O resultado foi ${res}, Obesidade grau 1.`
    }else if(res >= 35 && res <= 39.9){
        resultado.innerHTML = `O resultado foi ${res}, Obesidade grau 2.`
    }else if(res > 40){
        resultado.innerHTML = `O resultado foi ${res}, Obesidade grau 3`
    }else{
        resultado.innerHTML = "Valor não encontrado."
    }
}