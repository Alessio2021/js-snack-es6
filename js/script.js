// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

const array = [12, 14, 52, 87, 54, 2, 97, 4, 45, 69, 81];

console.log(razzo(array, 1, 5));

// FUNCTION

function razzo(array, min, max) {
    let newArray = array.filter((element, index) => {
        return index < max && index > min
    });

   return newArray
}
