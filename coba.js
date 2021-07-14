// for (let i=0;i<10;i++){
//     console.log(i+1)
    
// } 

// // var input =+prompt('masukkan data')
// for(let j =0;j<5;j++){
//     console.log('halo'+j)
//     }
//     console.log('halo')


// while(i>5){
// //     console.log('halo')
//     i++
// }
// let film = [["Horror", "The Nun", 126], ["Romance", "Dilan", 150], ["Sci-Fi", "Interstellar", 120]]
// let infoFilm = `List film hari ini :\n`

// for (let i = 0; i < film.length; i++) { // 0 1
//     let temp = `${i + 1}. `
//     for (let j = 0; j < film[i].length; j++) { // 0 1 2 3
//         if (j == film[i].length - 1) {
//             temp += `${film[i][j]} minutes \n`
//         } else {
//             temp += `${film[i][j]}, `
//         }
//     }
//     // console.log(temp)
//     infoFilm += temp 
// }
// console.log(infoFilm)

// PUSH AND POP
// let fruit = ["apel", "melon", "pisang"]
// fruit.push(["durian", "kiwi"]) // push => untuk menambah data baru di akhir array
// console.log(fruit)
// fruit[3].pop() // pop => menghapus satu item di index terakhir di dalam array
// console.log(fruit)

// PUSH AND POP
// let fruit = ["apel", "melon", "pisang"]
// fruit.push(["durian", "kiwi"]) // push => untuk menambah data baru di akhir array
// console.log(fruit)
// fruit[3].pop() // pop => menghapus satu item di index terakhir di dalam array
// console.log(fruit)


// let baju =[['arsenal',75000,5],['Chelsea',75000,4],['Liverpool',100_000,7]]
// let listBaju = ('List Baju Bola \n')
// console.log(baju)
// // var buah=prompt('masukkan nama buah')
// for (i=0;i<baju.length;i++){  //0
//     let tempBaju = `${i+1}`
//     for(let j=0;j<baju.length;j++){ //0
//         let bajuB = `${baju[i]}`
//         for (let k=0;k<baju.length;k++){ //0
//             if (k==baju[i].length-1){
//                 tempBaju += ` Stok Baju sekarang adalah ${baju[i][j][k]}\n`
//             } else{
//                 tempBaju +=`${baju[i][j][k]}`
//             }
//         }
//     bajuB +=tempBaju
//     }
//     listBaju += tempBaju
// }
// console.log(listBaju)

let fruit =['apel','anggur','jeruk','mangga']
for(var i = 0; i < fruit.length; i++) {
    console.log("fruit["+i+"]: "+fruit[i])
// Sfruit ='A'
// for (i=0;i<fruit.length;i++){
//     let s =''
//     if (i<=fruit[i].length-1){
//         s + 'masuk'
//     }else {
//         break
//     }

// }
// console.log(fruit)
// console.log(fruit.splice(2,1))
// console.log(fruit)

// let kali= (fruit[2]*fruit[3])
// console.log (kali)
// var sudutBuah =``
// for (let i =0;i<fruit.length;i++){  //0 1
//     let tempBuah =`${i+1} Saya`
//     if(i>=fruit[i].length){
//         break
//     } else if (i<=fruit[i].length){
//         tempBuah+=` Mau makan${i}`
//     }
// }
// sudutBuah+=tempBuah
// console.log(sudutBuah)
}

let angka =Math.floor(Math.random()* (100-0)+0)  
if (angka<50){
    console.log('Cerah')
} else if(angka>50){
    console.log('Berawan')
} else if (angka==50){
    console.log('hujan')
}



// console.log(angka)
// var tambah
// var arr1 =[1,2,3,4,5,6,7,8]

// var arr2 =[10,11,12,13,14,15,16,17]
// temp =``
// for (i=0;i<arr1.length;i++){
//     console.log(`${arr1[i]}`)
//     for(j=0;j<arr1.length;j++){
//         temp += arr1[j] +arr2[i]
//     }
// }
// tambah = arr1[i]*arr2[j]
// console.log(temp)
    
let arra1 =[0,1,2,3]

let x = ''
for (i=0;i<arra1.length;i++){
    temp += `{${arra1+1}}`
}
x +=temp
console.log(x)
