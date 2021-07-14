//1. Memunculkan perulangan 1,2,3 setelah itu break
for (let b=0;b<5;b++){
    console.log(b)
    if(b===3) break
}

//2. Memunculkan perulangan 1,2 setelah itu break
for (let b=0;b<5;b++){
    if(b===3) break
    console.log(b)
}

//3. memunculkan bintang natal 1-2-3-4
let res=``
for (let d=0;d<5;d++){
    res +=`*`
    console.log(res)
}

//4. Memunculkan bintang 5
let res1=``
for (let d=0;d<5;d++){
    res1 +=`*`
    
}
console.log(res1)

//6. Memunculkan bintang 6 kesamping dan kebawah
let res2=``
for (let e=0;e<6;e++){
    for(let f=0;f<6;f++){
        res2+=`*`
    }
    res2 +=`\n`
}
console.log(res2)


//7. Memunculkan element di index array 2 dimensi
let f =[['Nanas',7000,10],['Sawo',5000,9],['Lengkeng',4000,5],['Belimbing',4500,12]]

let listF = `Daftar Buah lokal  ;\n`
            for (let g=0;g<f.length;g++){
                listF +=`${g+1}. ${f[g][0]} harganya Rp${f[g][1].toLocaleString()}/buah. Stok =${f[g][2]}\n`
            }
            console.log(listF)
//Hasil
//1. Nanas harganya Rp7,000/buah. Stok =10
//2. Sawo harganya Rp5,000/buah. Stok =9
//3. Lengkeng harganya Rp4,000/buah. Stok =5
//4. Belimbing harganya Rp4,500/buah. Stok =12



// 8. Menampilkan daftar Belanjaan

keranjangBuahLokal =[['Duku',3000,12],['Cempedak',3000,4],['Sirsak',8000,5]]

let totalPrice = 0

 
let keranjangBuLok ='Daftar Keranjang anda:\n'
                    for(let j =0;j<keranjangBuahLokal.length;j++){
                        keranjangBuLok+= `${j+1}. ${keranjangBuahLokal[j][0]}, Rp${keranjangBuahLokal[j][1].toLocaleString()} x ${keranjangBuahLokal[j][1]}=Rp${keranjangBuahLokal[j][1]*keranjangBuahLokal[j][2].toLocaleString()}\n`
                    }
                    // totalPrice += keranjangBuahLokal[index - 1][1] * keranjangBuahLokal[index-1][2]
                    keranjangBuLok += `Total Belanja Anda =Rp${totalPrice.toLocaleString()}`
                    console.log(keranjangBuLok)

//Result
// Daftar Keranjang anda:
// 1. Duku, Rp3,000 x 3000=Rp36000
// 2. Cempedak, Rp3,000 x 3000=Rp12000
// 3. Sirsak, Rp8,000 x 8000=Rp40000

