
const lista1 = [      //lista en desorden
    500,
    100,
    200,
    400000000,
];

const lista1Ordenada = lista1.sort(  //funcion ordenar la lista de acuerdo a unicode
    function (a, b) {  //compara los elementos a y b 
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });

const mitadLista1Ordenada = parseInt(lista1Ordenada.length / 2);
function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;
if (esPar(lista1Ordenada.length)) {
    const elemento1 = lista1Ordenada[mitadLista1Ordenada - 1];
    const elemento2 = lista1Ordenada[mitadLista1Ordenada];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    mediana = promedioElemento1y2;
} else {
    mediana = lista1Ordenada[mitadLista1Ordenada]
}