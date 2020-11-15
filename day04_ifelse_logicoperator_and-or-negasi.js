//REVIEW IF...ELSE...
//dipakai u/ menjalankan perintah sesuai kondisi
//if(..) akan jalan saat kondisi yg ada didlm kurung nilainya TRUE,
//saat nilainya true, maka kode dikurung{} akna dijalankan
//else(..) akan jalan saat semua kondisi yg ada di if tidak terpenuhi, atau nilainya FALSE

//CASE : menentukan season/musim berdasarkan input bulan
//4 musim : panas, dingin, gugur, semi

//CASE : menentukan apakah nilai tersebut habis dibagi 5
let nilai = 34
if (nilai % 5 === 0) { //kondisi k ita check apakah nilai habis dibagi 5 => true or false
    console.log('nilai habis dibagi lima')
}   else {
    console.log('nilai tidak habis dibagi lima')
}

//SWITCH & CASE : HANYA MELAKUKAN EQUAL COMPARISON (===) DATA YG DICOMPARE HARUS BOOLEAN
//switch(..) akan mengambil value dr parameter yg ada di case(...)
//case akan jalan kalau kondisinya TRUE
//NOTE : 

let job = 'mengemudi'
switch (job) {
    case 'mengajar': //job === mengajar => 'mengemudi' === 'mengajar'
        console.log('profesinya adalah guru')
        break
    case 'mengemudi': // job===mengemudi
        console.log('profesinya adalah supir')
        break
    default : //selain kondisi diatas
        console.log('tidak ada kerjaan')
}

//IMT SOLVE 13
let massa = 69 //kg
let tinggi = 1.78 //m
let imt = massa/(tinggi**2)
console.log('IMT :', imt)

switch (true) { 
    //data yg ditaro mau dicompare harus BOOLEAN, krn number === false jadinya pasti false
    case (imt > 39.9) : //true === (IMT > 39.9) => true === false => false
        console.log('obesitas')
        break
    case (imt >= 30) : //=> true === false => false
        console.log('sangat berlebih')
        break
    case (imt > 25) : //=> true === false => false
        console.log('berlebih')
        break
    case (imt > 18.5) : //=> true === false => true
        console.log('berat badan ideal')
        break
    default : //
        console.log('berat badan kurang')
}


//LOGIC OPERATOR: 
//(&& = AND):
//dua duanya harus true (true && true)->True,
// selain itu (true&&false)->false (false&&true)->false (false&&false)->false

//(|| = OR)
//(!! = NEGASI/KEBALIKAN)
//HASIL PERBANDINGAN PAKAI LOGIC OPERATOR HASILNYA PASTI BOOLEAN
//jika didalam if(...) ada dua kondisi yg dipertimbangkan / di cek didlm ()
//CASE : siswa boleh masuk kedlm kampus jika membawa tas dan sepatu
let bawaTas = true
let bawaSepatu = true

if (bawaTas && bawaSepatu) {
    console.log('boleh masuk kampus')
} else {
    console.log('tidak boleh masuk kampus')
}

//NOTE : DALAM LOGIC OPERATOR, unutk ksemua value akan dikonversi jd boolean dan di compare
//contoh :
// console.log('aku'&&'dia') // => TRUE -> yg ditampilkan string kanan
// console.log('aku suka' && '') // =>FALSE munculnya dia

//SPECIAL CASE : OUTPUT
//jika nilai sblh kiri FALSE, maka output : kiri
//jika nilai sblh kiri TRUE, maka output : kanan
console.log(0 && 1) //=> 0 == TRUE
console.log(1 && 1) //=> 1 == TRUE
console.log(1 && 'dia') // => dia
console.log(0 && 'dia') // => 0

//(|| = OR)
//NOTE : nilai akan TRUE jika salah satu ada yg TRUE
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

//CASE : bawa sepatu atau bawa tas boleh masuk
if (bawaSepatu || bawaTas) {
    console.log('boleh masuk')
} else {
    console.log('tidak boleh masuk')
}

//(!! = NEGASI/KEBALIKAN)
//MEMBALIKKAN NILAI / VALUE
//kalau misalkan kita lakukan operasi NEGASI thdp value => data type
//value & data type nya akan dikonversi ke boolean -> true atau false
console.log(!true) //false
console.log(!false) //true
console.log(!0) //true, karena 0 di boolean itu false
console.log(!1) //false, karena 1 di boolean adlh true
console.log(!'') //true

//CASE : menampilkan grade siswa berdasarkan nilai
// A = 80-100
// B = 70-80
// C = 50-70
// D = 40-50
// E = 0-40

let nilaiStudent = 87
if (nilaiStudent >= 80 && nilaiStudent <= 100) {
    console.log('Grade A')
} else if (nilaiStudent >= 70 && nilaiStudent <= 80) {
    console.log('Grade B')
} else if (nilaiStudent >= 50 && nilaiStudent <= 70) {
    console.log('Grade C')
} else if (nilaiStudent >= 40 && nilaiStudent <= 50) {
    console.log('Grade D')
} else {
    console.log('Grade E')
}

//SPECIAL CASE :
//INCOMPARABLE UNDEFINED
console.log(undefined > 0) //false
console.log(undefined < 0) //false
console.log(undefined == 0) //false
console.log(undefined == undefined) //false, karena INCOMPARABLE

