console.log("Merhaba Kodlama.io")


let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
}
console.log(dolarDun);

const euroDun = 11.2
//euroDun = 11// bunu yapamıyoruz

console.log(euroDun)

//arraylerden yararlanılır.
//camelCasing--- yazılımı böyle
//PascalCasing-----yazılımı böyle
//let users = getUsersFromApi()  // Array verecek.
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredileri" ]
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log ("<li>" + konutKredileri[i] + "</li>");
    
}
console.log("</lu>")
//react

console.log(konutKredileri)