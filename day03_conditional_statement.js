//CONDITIONAL STATEMENTS (if...else...)
//kita perlu melakukan tasks atau perintah berdasarkan kondisi (comparison/perbandingan)

//SYNTAX:
/* if (conditional) {
perintah didalam {} akan dijalankan jika kondisi terpenuhi = true
} else {//kondisi tidak terpenuhi = false atau jika semua kondisi tidak memenuhi
}
*/

//CASE: 
//aku mau mengecek apakah angka ini ganjil atau genap (check ganjil genap)
let angka = 20

//CEK ANGKA GENAP DULU
if (angka % 2 == 0) {
    console.log('ini angka genap')
} else {
    console.log('ini angka ganjil')
}

//CASE :
//CHECK ANGKA NEGATIF
//aku mau mengecek apakah angka lebih besar dari 0
let number = 9
if (number >0) {
    console.log('ini angka positif')
} else {
    console.log("ini angka negatif")
}

//CASE : MULTIPLE CONDITION (kondisi lebih dr satu)
//MENAMPILKAN GRADE
//Mau mengecek nilai, kalau misalkan anak yg nilainya diatas 
//excellent >=80
//good >=60
//bad <=60
let nilai = 15
if (nilai >=80) { //kondisi pertama
    console.log('Excellent')
} else if (nilai >= 60) { //kondisi kedua
    console.log('Good')
} else {
    console.log('Bad')
}

//ELSE tidak membutuhkan kondisi

//CASE : Check apakah umurnya >18 atau <18 untuk masuk bioskop, untuk nonton film action 18+
//input : tahun lahirnya aja
//output : umur >18 boleh masuk, umur <18 tidak boleh masuk
let tahunLahir = 1998

//hitung umur
let date = new Date() //get waktu sekarang
let umur = date.getFullYear () - tahunLahir

//check kondisi
if (umur <18) {
    console.log('Tidak Boleh Masuk')
} else {
    console.log ('Boleh Masuk')
}

//CONDITIONAL USING SWITCH...CASE...
//sama saja dengan if else
//SYNTAX:
/*switch(parameter) {
    case kondisi :
        jalankan perintah
        break
    case kondisi2
        jalankan perintah
        break
    case kondisi3
        jalankan perintah
}
*/

//CASE mengecek profesi
let job = 'mengemudi'
/*
if (job == 'mengajar') {
    console.log('profesinya adalah guru')
} else if (job == 'mengemudi') {
    console.log('profesinya adalah supir')
} else {
    console.log('tidak ada pekerjaan')
}
*/

//ke Switch Case
switch(job) {
    case 'mengajar' :
        console.log('profesinya adalah guru')
        break
    case 'mengemudi' :
        console.log('profesinya adalah supir')
        break
    default :
        console.log('tidak ada pekerjaan')
}