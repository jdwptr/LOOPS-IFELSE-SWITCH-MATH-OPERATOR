//DATE OBJECT => tools u/ mengaccess waktu di komputer atau laptop
//reference dr developer mozilla
let time = Date.now() //waktu sekarang di komputer dalam milisecond dihitung sjk 1970 00.00.00
console.log(time)

let date = new Date() //unutk dpt waktu skrg (BUAT OBJECT WAKTU) yg punya info waktu saat ini
console.log(date.getTime()) // get waktu saat ini (dlm milisecond)
console.log(date.getFullYear()) //get tahun
console.log(date.getHours()) //get jam saat ini
console.log(date.getDate()) //get hari
console.log(date) // untuk tau waktu skrg

