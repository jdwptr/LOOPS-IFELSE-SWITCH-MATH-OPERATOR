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

//=> DATA TYPE CONVERSION : konversi dari satu data type ke data type lainnnya

//1. KONVERSI TO STRING : tidak merubah original
//-> METHOD:
//- .toString()
//- apapun ditambah string = string (mau string didepan atau dibelakang)
//- template string literal ; `..`

//=> CARA KE 1
//=> NUMBER TO STRING
let ganjil = 3 // number
let stringGanjil = ganjil.toString() // diubah jd string (dibikin var baru aja)
console.log(typeof ganjil)
console.log(stringGanjil)
console.log(typeof stringGanjil)

//=> BOOLEAN TO STRING
let salah = false
let benar = true
let strSalah = salah.toString() // -> "false" 'false' `false`
console.log(typeof strSalah)

//=> CARA KE 2 DAN KE 3 : AUTOMATIC CONVERSION
console.log(typeof(ganjil + "")) //apapun ditambah string jadi string
console.log(typeof("ini kata" + 10)) //string
//console.log(typeof ganjil) //ini ganjil tetep 3 (number) ga berubah
ganjil = ganjil.toString() // update value & data type
console.log(typeof(benar + ``))
console.log(typeof (`${benar}`))
console.log(angka + kata) //hasilnya pasti = 100purwadhika

//2.KONVERSI KE NUMBER : parseInt() / parseFloat()=>menghasilkan value dan tipe data
//kalo berhasil, menghasilkan value nya number, kalo bkn number trs dikonversi disini jd not number
let strGenap = "26" //string
let nomorGenap = parseInt(strGenap) // hasilnya tipe data number (int), value nya nomor 26
console.log(nomorGenap)
console.log(typeof nomorGenap)

let floatGenap = parseFloat(strGenap) //untuk pecahan
console.log(floatGenap)
console.log(typeof floatGenap)

let strGanjil = "25.99"
console.log(parseFloat(strGanjil))
console.log(parseInt(strGanjil))

//CASE => nilai/value yg dikonversi bukan angka yg benar ("dua puluh lima", "2B" , true , "2.65A" , "100+")
//HASIL KONVERSI ANGKA TDK BENAR : TIPE DATA NUMBER TAPI VALUE NaN
// ANGKA BENAR -> ('25',"76","7.89")
let angkaSalah = '59' //string biasa
let numberAngkaSalah = parseInt(angkaSalah)
console.log(numberAngkaSalah)
console.log(typeof numberAngkaSalah)

let grade = '100a'
let gradeNumber = parseInt(grade)
console.log(gradeNumber)
console.log(typeof gradeNumber)

console.log(parseInt(benar))

//JIKA ANGKA TIDAK BENAR DEPANNYA BERUPA ANGKA BENAR, MAKA KONVERSI AKAN MENGAMBIL ANGKA PERTAMA YG BENAR
let angkaSemiBenar = '2B'
let angkaAgakBenar = '100ABC'
console.log(parseInt(angkaSemiBenar)) //angka yg bisa diconvert didepan diambil
console.log(parseInt(angkaAgakBenar))

//3. KONVERSI KE BOOLEAN : Boolean()
//tipe data jd boolean, value : true atau false
let sekolah = 'purwadhika'
let strKosong = ''
let numberBenar = 25
let tidakPunyaNilai //undefined

console.log(Boolean(sekolah))
console.log(Boolean(strKosong))
console.log(Boolean(numberBenar))
console.log(Boolean(tidakPunyaNilai))

//YG JADI TRUE SAAT DIKONVERSI KE BOOLEAN
//String => 'purwadhika', 'andi', '568hja' , ' ' => bukan string kosong
//Angka/Number
// [] array kosong
// {} object kosong

//YG JD FALSE SAAT DIKONVERSI KE BOOLEAN
//string kosong => `` , '' , ""
//NULL
//UNDEFINED
//NaN
console.log(Boolean(NaN))

