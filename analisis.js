const salariosCol = colombia.map(
    function (personita) {
        return personita.salario;
    }
);
const salarioColOrdenado = salariosCol.sort(
    function(salarioA, salarioB) {
        salarioA - salarioB;
    }
);
function esPar(numerito) {
    return (numerito % 2 === 0 );   
}

function calcularMediaAritmetica(lista) {   
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0,  nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salarioColOrdenado);


//mediana del top 10


const spliceStart = (salarioColOrdenado.length * 90) / 100;
const spliceCount = salarioColOrdenado.length - spliceStart;

const salariosColTop10 = salarioColOrdenado.splice(
    spliceStart,
    spliceCount,
);


const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
