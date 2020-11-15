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

    //=>STRING -> teks biasa, cirinya, dibuat menggunakan ".." , '..' , cara baru pake `..` (backtick)
    let nama = "jane" //string
    nama = 'alien'
    nama = `Alyen`

    let usia = '20' //jadi teks biasa aka STRING
    let hobby = 'dance'
    let job = 'coder'

    console.log('nama saya ' + nama +', ' + 'usia : ' + usia)

    //string template literal
    //kalau mau akses variable pake string ${}
    console.log(`nama saya : ${nama} dan usia saya ${usia}`)

    //STRING PROPERTY AND METHODS -> properti dan metode untuk memanipulasi string
    //string cuma punya 1 properti ->length , untuk menghitung panjang string
    let kenalan ="nama saya adalah " + nama
    console.log(kenalan)
    console.log(kenalan.length)

    //methods
    console.log(kenalan.toLowerCase())
    console.log(kenalan.toLocaleUpperCase())
    console.log(kenalan.repeat(2))

    let sekolah = "Purwadhika"
    console.log(sekolah)
    console.log(sekolah.indexOf("P")) //0 karena java mulai dari 0
    console.log(sekolah.indexOf("p")) //-2 karena gada p kecil
    console.log(sekolah.indexOf("a")) //a di nomor berapa
    console.log(sekolah.slice(4)) //motong 4 karakter dari depan
    console.log(sekolah.slice(0,3)) //motong 3 karakter dari string ke 0
    console.log(sekolah.charAt(5)) //mencari karakter pada indeks ke 5

    console.log(kenalan.includes('tidak')) //mencari ada atau nggaknya kata tidak di variabel kenalan
    console.log(kenalan.includes('nama'))
    
    console.log(sekolah.substring(0, 3)) //bedanya sama slice adalah, kalau di slice dia bikin string baru tapi isinya ga diubah tetep purwadhika
                                        //kalau substring tidak merubah variablenya juga
    console.log(sekolah)

    //reference

    //NUMBER adalah angka
    //NUMBER punya kategori lagi :
    //- int
    //- BigInt
    //- infinity (Special data type)
    //-NaN (Not a Number) (Special data type)

    let usiaku = 19 //number
    let angka = 0.5 //floating number
    let takhingga = Infinity
    let idunno = NaN

//NUMBER juga punya PROPERTY dan METHODS
//METHODS
console.log(angka.toFixed()) //pembulatan angka
console.log(usiaku.toExponential()) //jadi bentuk eksponensial
console.log(isNaN(angka)) //false
console.log(isNaN(idunno))  //true
console.log(isFinite(angka))  //true
console.log(isFinite(takhingga))  //false

//DATA TYPES LANJUTAN:
//=> BOOLEAN

