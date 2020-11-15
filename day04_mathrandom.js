//NOTE : dlm math object ada MATH.RANDOM() =>generate random number between 0 and 1

//generate with custom max range
//case : generate random number between 0-5 (5 isnt included)
let max = 5
console.log(Math.floor(Math.random() * max))

// random => 0.5 => 0.5 * 5 = 2.5 => 2
// 0.9 * 5 => 4.5 => 4
