//2 main data type in javascript
/*1. Primitive Data👍
    - string : "..." '...' `...`
    - number : int, BigInt, infinity, NaN
    - boolean : true or false
    - null : 
    - undefined 
    */
/*2. Reference Data👍
    - array
    - object
    - date
    - etc. 
    */

//DATA TYPES LANJUTAN:
//=> BOOLEAN : data type yg hanya punya 2 valule (true or false)
let boolean = true
boolean = false

//Not Type Value (Null & Undifiend)
//=> NULL : non value type, tapi punya value, value nya null (biasanya sblmnya sudah ada) 
//(isinya selain string, number boolean), trmsk salah satu object JS tapi punya value

//=> UNDEFINED : value belum terisi / belom ada value
let number //belom diisi value, jd value awalnya = UNDEFINED

// BGMN CARA CHECK DATA TYPE
//=> typeof
let angka = 100
let pecahan = 3.14
let kata = "purwadhika"
let idunno = null

console.log(typeof(number))
console.log(typeof(angka))
console.log(typeof pecahan) //bisa kyk gini nulisnya
console.log(typeof kata)
console.log(typeof idunno)

//=>bedanya nulis typeof pake () dan tidak pake ()
//kalo pake kurung:
console.log(typeof "hello") //karena udah ketauan string
console.log(typeof(number + angka)) //yg didlm kurung dieksekusi dulu baru didefinisikan datanya
//krn number diatas gada nilai, jd kosong ditambah number, jadinya number (misal kosong + 10 = ya 10)

