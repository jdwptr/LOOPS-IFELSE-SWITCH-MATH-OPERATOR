//LOOP LABELLING
let n = 4
outside : for (let i = 0; i < n; i++) {
    inside : for (let j = 0; j < n; j++) {
        console.log(`${i},${j}`)
        //break tanpa pakai label
        //otomatis break akan memberhentikan loop yg membungkusnya
        //break

        //saya mau break loop paling luar, gimana caranya?
        break outside
        //jika loop yg paling luar kita brek, otomatis semua loop akan break
    }
}
