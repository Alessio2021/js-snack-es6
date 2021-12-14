// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(razzo(array, 1, 20));

// FUNCTION

function razzo(array, min, max) {
    let newArray = array.filter((element) => {
        return element < max && element > min
    });

   return newArray
}
