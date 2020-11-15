//LOOP UNTUK PATTERN

// CASE 1 TAMPILKAN : * * * * * (HORIZONTAL)
let pattern1 = ''
for (let i = 0; i < 5; i++) {
    //setiap kali looping
    //value di variabel pattern1 akan diupdate
    pattern1 = pattern1 + '* '
}
console.log(pattern1)

//CASE 2 TAMPILKAN : pattern 1 secara VERTIKAL
let pattern2 = ''
for (let i = 0; i < 5; i++) {
    pattern2 = pattern2 + '*\n' // \n untuk membuat line baru (new line)
}
console.log(pattern2)

//CASE 3 TAMPILKAN : pattern berikut
//* * * *
//* * * *
//* * * *
//* * * *
let pattern3 = ''
for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
        pattern3 = pattern3 + '* '
    }
    pattern3 = pattern3 + '* \n'
}
console.log(pattern3)

//NOTE : Local Scope vs Global Scope
let a = 0 //Global Scope
let b = 1
//             variabel a dapat diakses di semua program didlm file ini
{  
    let b = 1 //Local Scope, variabel b hny dpt diakses dlm {}
    //console.log(b)
}
//console.log(b)