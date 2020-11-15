//OPERATOR
//1. ARITHMATIC OPERATOR : Op. matematika (+ - , / ,  * , **pangkat , %modulus)
console.log(1 + 50) //51
console.log(25 + 25) //50
console.log(90 - 8) //82
console.log(66 / 6) // 11
console.log(5 * 5) //25
console.log(2**4) // 2x2x2x2

//%MODULUS (SISA BAGI)
console.log(5 % 3) // 2
console.log(25 % 6) // 1

// =>OPERASI BEDA TIPE DATA:
console.log('hello' + 100) // jwbnnya string hello100

//selain operasi +, jika dua tipe data melakukan operasi aritmatika,
//akan ada konversi otomati s=> semua data hrs jd number
//string dunia dan string indah itu sama sama NaN
console.log('dunia' / 'indah') // jwbnnya NaN
console.log('aku' - 99) //NaN
console.log('39' - 8) //31

//Boolean(true atau false) kalau dikonversi jd number true=1 false=0
console.log(65 * true) 

console.log(76 + '1' * false) // 76 (kayak mat biasa) krn arithmatic operator

console.log('99' + '1') // 991
console.log('99' - '1') //98

//UNDEFINED
console.log(undefined + 100) // jdnya NaN

//2. UNARY OPERATOR
//increment (++) dan decrement (--) (simbol didepan dibelakang sama aja)
//++ , -- , += , -=
//untuk angka 
let number = 2
number++ //number saya naikan 1
console.log(number) //jd number nya sudah 3
number++ //tambah 1 lagi
console.log(number) //number jadi 4

number-- //dikurangi 1
console.log(number) // hasilnya 3

//BY DEFAULT INCREMENT +1 , DECREMENT -1
// kalo mau naik 3kali 4 kali pakai (+=)
let genap = 50
genap+= 1 //genap = genap + 1
console.log(genap) // 51

genap-= 1 // genap - 1
console.log(genap) //50

genap += 5 // genap + 5
console.log(genap) // 55

genap*= 100 // genap *100
console.log(genap) //5500

genap/= 10 //genap / 10
console.log(genap) // 550

genap%= 2 // genap % 2
console.log(genap) // 0 karena gada sisanya

//CASE : saya mau hitung 5 pangkat 6
console.log(5**6) // 15625 / 5x5x5x5x5x5

//hitung akar dari 25 (karena akar tdk trmsk arithmetic JS)
//kita gunakan tools bawaan node.js yaitu 
//MATH OBJECT => tools u/ melakukan operasi aritmetik
//liat di developer.mozilla.org
console.log(Math.sqrt(25)) // hit. akar

console.log(Math.pow(5, 6)) // hit. 5 pangkat 6

console.log(Math.abs(-10)) // -10 jadi 10 krn absolute value

console.log(Math.round(2.57)) // dibulatin jd 3
console.log(Math.round(2.33)) // dibulatin jd 2

console.log(Math.floor(2.57)) //pembulatan ke bawah jd 2
console.log(Math.ceil(2.11)) // pembulatan ke atas jd 3


