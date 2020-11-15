//LOOP PART 2 : PATTERNS => NESTED LOOP (loop didalam loop)

//FOR (...) {..}
//for (let start = 0; starts < 10; start ++) {
    //console.log('start :', start)
//}

//CASE : tampilkan pattern berikut untuk n-baris, n=4
// *            |i = 0, j = 0 \n
// * *          |i = 1, j = 0, 1 \n                
// * * *        |i = 2, j = 0, 1, 2 \n
// * * * *      |i = 3, j = 0, 1, 2, 3 \n

//case :
// * * * * (4x4)
// * * * *
// * * * *
// * * * *
let n = 4
let pattern1 = ''

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) {
        pattern1 += '*'
    }
    pattern1 += '\n'
}
console.log(pattern1)

//case :
// *             |i = 0, j = 0 \n
// * *          |i = 1, j = 0, 1 \n                
// * * *        |i = 2, j = 0, 1, 2 \n
// * * * *
let pattern2 = ''

for (let i = 0; i < n; i++) { //unutk menentukan mau looping brp kali ( < n) 
    for (let j = 0; j <= i; j++) { //(i++ di cek setelah inside loop beres)
        pattern2 += ' * '
    }
    pattern2 += '\n'
}
console.log(pattern2)

//case :
// * * * *  | i = 4, j = 0,1,2,3
// * * *    | i = 3, j = 0,1,2
// * *      | i = 2, j = 0,1
// *        | i = 1, j = 0
let pattern3 =''
for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        pattern3 = ' * '
    }
    pattern3 += '\n'
}
console.log(pattern3)

//case 3 (n = 4)
//      *
//    * * *
//  * * * * *
//* * * * * * *
let pattern4 = ''
for (let i = 0; i < 4; i++) {
    //untuk isi spasi
    for (let j = 0; j < n - i - 1; j++) {
        pattern4 += ' '
    }
    //untuk isi bintang
    for (let k = 0; k < 2 * i + 1; k++) {
        pattern4 += '*' 
    }
    //untuk pindah baris
    pattern4 += '\n'
}
console.log(pattern4)