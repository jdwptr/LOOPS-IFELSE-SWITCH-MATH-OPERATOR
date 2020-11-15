//LOOP / PENGULANGAN :
//Kadang kita ingin mengeksekusi kode yg sama berulang ulang kali

//CASE : Tolong buat program untuk menampilkan output berupa 'Hello World" sebyk 7kali
let pesan = 'Hello World'
/*console.log(pesan)
console.log(pesan)
console.log(pesan)
console.log(pesan)
console.log(pesan)
console.log(pesan)
console.log(pesan)*/

//MISAL klien minta diulang 1000 kali, susah maintainnya
//diciptakan LOOPING agar maintainnya ga susah
// 3 MACAM LOOP : while, do...while , for(...)

//1ST LOOP : WHILE
//while (batas loop / kondisi) {
    //execute code
//}

//UNTUK WHILE :
// define initial condition as starting point
// kenapa? tiap mulai ada start nya
// startinh point nya di define di variabel
let start = 0 // define variable with value 0 as starting poiint
// let start = 1 // kalo start dari satu, while (start <= 10) => (1,2,3,...,10)

//loop 10x
while (start < 10) { //KONDISI DLM KURUNG KURAWAL AKAN JALAN KALAU KONDISI DEPANNYA TRUE
    //tergantung kode yg mau dijalankan
    console.log('start :' ,start)

    //perlu adanya increment, atau LOOPING STEP
    start++ //Kalau tidak ada increment, infinite loop krn start selalu 0
}
// 0, 1, 2,..., 9
// setelah loop berhenti, maka dia akan selesai dan memproses program yg di bawahnya

//FOR (...) {..}
for (let start = 0; starts < 10; start ++) {
    console.log('start :', start)
}


let i = 0
while (i < 7) {
    //setiap kali looping
    // kondisi dlm () hrs true agar kode di {} jalan
    console.log(pesan)
    i++ //increment
}

//CASE : MAU MENAMPILKAN 1-50
let j = 1
while (j <= 50) {
    console.log(j)
    j++
}

//CASE : menampilkan angka 1-25, tetapi kenaikan angkanya 2 (1,3,5,7,9,...,25)
let k = 1
while (k <= 25) {
    console.log(k)
    k+=2
}

//2ND LOOP : do...while...
let l = 0
do {
    console.log('Hello')
    l++
} while (l < 5)

//BEDANYA WHILE VS DO..WHILE..
//WHILE     : Cek kondisi dlm () jika true, maka LOOPING baru jalan
//DO WHILE  : Jalankan kode/perintah, baru cek kondisi di dlm WHILE ()

let m = 9
do {
    console.log('Hore')
    m++
} while (m < 9)

//3RD LOOP : for (..)
//mirip dgn while namun kondisi ditulis dalam satu baris di for (...) (Kyk WHILE tapi sebaris)
for (let o = 0; o < 5; o++) {
    console.log(`loop ke ${o}`)
}

//INFINITE LOOP => kita mau menjalankan program berulang ulang tanpa berhenti,sampe user memberhentikan
//                  program

//while (true) {
   // console.log('infinite')
//}

//BREAK AND CONTINUE
//BREAK     : syntax u/ memberhentikan loop (stop loop)
//CONTINUE  : continue looping => program akan di skip lgsg check loop condition
let p = 2
while (p < 50) {
    console.log(p)
    //check kondisi
    if (p >= 10) {
        //stop looping kalo p >= 10
        break
    }
    //increment
    p+=2
}

let q = 0
while (q < 10) {
    //check kondisi
    if (q % 2 != 0) {
        q++
        //check kondisi 
        //jika hsl bagi 2 dari q != 0
        //maka loop akan skip
        //program stlh syntax CONTINUE akan di skip
        continue
    } //else { //gapake else juga bisa
    console.log(q)
    q++
    
}

//2nd FORM USING FOR
for (let r = 0; r < 0; r++) {
    if (r % 2 != 0) {
        continue
    }
    console.log(r)
}

// q=0 | 0<10 | !continue | console.log(0) | 0++ => 1
// q=1 | 1<10 | 1++ => 2
// q=2 | 2<10 | !continue | console.log(2) | 2++ => 3
// q=3 | 3<10 | 3++=> 4
//...
// q=8 | 8<10 | !continue | console.log(8) | 8++ => 9
// q=9 | 9<10 | 9++ => 10
// q=10 | 10<10 => false => loop end


//NESTED LOOP : LOOP INSIDE LOOPING
for (let a = 0; a < 5; a++) { //OUTSIDE LOOP 
    for (let b = 0; b < 5; b++) { //INSIDE LOOP 
        console.log(`loop outside ke ${a} dan loop inside ke ${b}`)
    }
}

//NOTE : INSIDE LOOP AKAN JALAN SAMPAI SELESAI DULU, BARU OUTSIDE LOOP JALAN