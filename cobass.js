//OBJECT
//OBJECT >ARRAY >VARIABEL

// OBJECT =>DATA TYPE YANG MAMPU MENYIMPAN BANYAK DATA DAN LEBIH MUDAH DIBACA
// NAMA LABEL => PROPERTI


//cara membuat SYNTAX
//Cara 1
let obj ={
    name : 'Apel',
    harga : 10_000,
    stok :9
}
//cara memanggil 1
console.log(obj.name)
//cara memanggil 2
console.log(obj['harga'])

//cara 2
let obj2 = new Object()
obj2.username ="Juan"
console.log(obj2)

// method
// let obj3 ={
//     name : 'Ujang'
//     Hello : function greet(){
//         console.log('Hello')
//     }
// }
// obj3.Hello()

//
let obj4 ={
    name : 'kuroky',
    intro : ()=>{
        console.log(`Hello my name is ${obj4.name}`)
    }
}
obj4.intro()

//This=> keyword yang diambil 
let obj5 ={
    name : 'kuroky',
    intro : function(){
        console.log('Hello my name is' + this.name)
    }
}
obj5.intro()

//res :
//Hello my name is kuroky



//Class 
//what=> cetakan untuk membuat object dengan property yang sama persis dan value nya berbeda
//when => ketika kita butuh untuk membuat objek dengan properti yang sama berkali kali
//why => mempermudah dalam membuat objek yang sama sehingga tidak perlu untuk membuat object dengns prop yang sama berkali2
class Artis{
    constructor(nama, lagu, rilis){
        this.nama = nama,
        this.lagu = lagu,
        this.tahun = rilis
    }
}
let artis1 =new Artis('Isyana','Angan-anganku',2018)
console.log(artis1)
//res
//Artis { nama: 'Isyana', lagu: 'Angan-anganku', tahun: 2018 }

//inheritance
//=> clas untuk membuat class lainnya (cetakan untuk class)

class LivingThings{
    constructor(name,age){
        this.name = name,
        this.age = age,
        this.alive = true
    }
    eat =()=>{
        console.log('eating')
    }
    breed=()=>{
        console.log('breed')
    }
}
class Human extends LivingThings{
    constructor(name,age,pet){
        super(name,age)
        this.pet = pet
    }
    work =()=>{

    }
}
let tanggal = new Date()
console.log(tanggal)