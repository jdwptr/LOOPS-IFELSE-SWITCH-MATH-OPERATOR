//1. COMPARISON OPERATOR (unutk ke CONDITIONAL STATEMENT-> if...else..)
// Comparison operator => hasilnya juga boolean true or false
//mathematic comparison : >, <, <=, >=, ==, ===, !=
//PERBANDINGAN DATA NUMBER
console.log(10 > 10) //false
console.log(10 >= 10) //true
console.log(8 == 9) //false
console.log(1 != 0) //true

//equality => == atau ===
console.log(7 == 8) //false
console.log(7 === 8) //false

//PERBANDINGAN UNUTK STRING
console.log('saya' == 'kamu') //false (karena dua kata yg berbeda makanya false)
console.log('saya' === 'kamu') //false
console.log('aku' == 'aku') //true
console.log('aku' === 'aku') //true

console.log('6' < '7') //true krn string angka dikonvert

//PERBANDINGAN 2 DATA BERBEDA 
console.log(0 == false) // true, krn false= 0
console.log(1 == true) // true, krn true =1
console.log(19 == '19') // true 
//NOTE: PERBANDINGAN MENGUTAMAKAN VALUE BUKAN TIPE DATA
//STRIC EQUALITY (== vs ===)
// == digunakan untuk membandingkan 2 tipe data yang berbeda
console.log(0==false) //true
console.log("1"==1) //true

// === digunakan untuk membandingkan data dengan tipe yang sama
console.log(0===false) // false
console.log("1"===1) //false
