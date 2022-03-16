
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrada(lado){
    return lado * lado;
}
console.groupEnd();

//codigo del triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

//Codigo circulo
console.group("Circulo");
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();
