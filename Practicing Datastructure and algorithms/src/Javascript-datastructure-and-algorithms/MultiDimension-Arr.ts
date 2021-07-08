
const temperatureOfTheWeek = [];

temperatureOfTheWeek[0] = [10, 12, 12, 15, 18, 20, 8];
temperatureOfTheWeek[1] = [7, 6, 9, 10, 12, 1, 9, 1];



/* 
    The arr = 
    [               0   1  2   3   4   5   6
        Position 0[10, 12, 12, 15, 18, 20, 8]

                   0  1  2  3   4   5  6  7
        Position 1[7, 6, 9, 10, 12, 1, 9, 1]
    ]
*/


//ITERANDO ELEMENTOS DE UNA MATRIZ

/*
EXPLICACION:
    We need to loop through all the rows and columns. To do this, we need to use a nested for
    loop in which the variable i represents rows, and j represents the columns
*/


function printMatrix(myMatrix: number[][]) {

    //Recorro el primer array
    for (var i=0; i<myMatrix.length; i++){
       
        //Recorro el segundo array
        for (var j=0; j<myMatrix[i].length; j++){
           //Imprimo [i = indice del array][j = indice de los arrays que estan dentro]
            console.log(myMatrix[i][j]);
        }
    }
}

// printMatrix(temperatureOfTheWeek);


//Multidimensional arrays


var matrix3x3x3: number[][][] = [];

    for (var i=0; i<3; i++){
         matrix3x3x3[i] = [];
            
        for (var j=0; j<3; j++){
            
            matrix3x3x3[i][j] = [];
            
            for (var z=0; z<3; z++){
                matrix3x3x3[i][j][z] = i+j+z;

                // console.log(matrix3x3x3[i][j][z]);

                //EN TOTAL 27 ELEMENTOS ES DECIR, 3X3X3;
                
            }
        }
    }


const FilterArr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// FilterArr.filter((element) => element % 2);

//Filtro por numeros pares
// console.log(FilterArr.filter((element) => element % 2 === 0));


const arr1: number[] = [1, 2 , 3];
const arr2: number[] = [4, 5, 6];
const arr3: number[] = [];

// console.log(arr3.concat(...arr1, ...arr2));


const trueArr: number[] = [ 3, 5, 7, 9 , 15 ];


const isTruthly = (numbers: any):boolean => {
    return (numbers % 2 === 0); //False 
}

// console.log(trueArr.every(isTruthly));
// console.log(trueArr.some(isTruthly));

//Every => retorna false itera si la condicion es false
//Some => retorna true itera si la condicion es true

//ITERAR TODOS LOS ELEMENTOS DEL ARRAY NO IMPORTA QUE CONDICION 
trueArr.forEach((element) => {
    // console.log(element);
    
})


for (const element of trueArr) {
    //Mismo que forEach
    // console.log(element);
    
}


//COPIAR UN ARRAY E INSERTARLO A OTRO   

const trueArr2 = Array.from(trueArr);
// console.log(trueArr2);


//CREAR UN ARRAY A PARTIR DE ARGUMENTOS DADOS

const arr_strings: string[] = Array.of('Mario', 'Pepe', 'Silvio');
// console.log(arr_strings);

//We can also use this method to make a copy of an existing array
const arr_strings_copy = Array.of(...arr_strings)
// console.log(arr_strings_copy);

//Metodo fill => llenar un array con el valor que le indiquemos
// trueArr.fill(0, 0);
// console.log(trueArr);


// console.log(
    //la funcion dentro de sort es para comparar donde A - B va a ordenar desde menor a mayor y B - A desde mayor a menor
    temperatureOfTheWeek[0].sort(function(a: number, b: number): number{
        //Menor a mayor
        //Osea si a es menor que b va primero porque da negativo
        return a - b;
    })
// );

//El codigo de arriba es el mismo que este:
/*

function compare(a, b) {
    if (a < b) {
        return -1;
    }
     if (a > b) {
         return 1;
     }
     // a must be equal to b
     return 0;
}
    numbers.sort(compare);


*/



//CUSTOM SORTING


const personsArr = [
    {name: 'Jorge', age: 30},
    {name: 'Alex', age: 40},
    {name: 'Josh', age: 20}
]

interface ArrAge{
    name: string;
    age:number;
}

function compareToAge(a:ArrAge, b: ArrAge ){
    if (a.age < b.age) {
        return -1;
    }else if(a.age > b.age){
        return 1;
    }else{
        return 0;
    }
}

// console.log(personsArr.sort(compareToAge))

const namesSort = ['Jake', 'Bryan', 'Alex', 'Max'];

function compareToNames(a:string, b:string){

    if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
    }else if(a.toLowerCase() < b.toLowerCase()){
        return 1;
    }else{
        return 0;
    }

}

// console.log(namesSort.sort(compareToNames));

const arrIndexOf = [ 2, 4 , 6, 6 ];

// console.log(arrIndexOf.indexOf(6)); // 2 => Indice del elemento que hace match con el valor pasado por los argumentos
// console.log(arrIndexOf.lastIndexOf(6)); //2 returns the index ofthe last element found that matches the argument passed


const findArr = [26, 39, 21, 45, 52];

const multipleOf13 = (element:number) => {return (element % 13 === 0) ? true : false}


// console.log(findArr.find(multipleOf13)); //Devuelve el valor que haga match con la condicion dada
// console.log(findArr.findIndex(multipleOf13)); //Devuelve el indice del valor que haga match con la condicion dada


//The includes method returns true in case an element is found in the array, and false otherwise
// console.log(findArr.includes(26)); //true


//If we want to output all the elements of the array into a single string, we can use the toString method as follows:
// console.log(findArr.toString());

//If we want to separate the elements by a different separator, such as -, we can use the join method to do just this, as follows:
console.log(findArr.join(','));

