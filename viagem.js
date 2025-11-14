let velocidadeMedia = 110
let horas = 13
let consumoMedio = 14
let etanolPrice = 3.899;
let gasolinaPrice = 5.899;
let tipoCombustivel = 0 // se for 0 = é igual a etanol. se for 1 = Gasolina
let distancia = (velocidadeMedia * horas)
let consumoViagem = (distancia / consumoMedio)


console.log(`A distância percorrida será de ${distancia.toFixed(3)} km.`)
console.log(`O consumo total em litros será de ${consumoViagem.toFixed(2)}`)
console.log(`O custo para abastecer com gasolina será de ${(consumoMedio*gasolinaPrice).toLocaleString
    ('pt-BR',{style:'currency',currency: 'BRL'})}`)
console.log(`O custo para abastecer com etanol será de ${(consumoMedio*etanolPrice).toLocaleString
    ('pt-BR',{style:'currency',currency: "BRL"} )}`)

if(tipoCombustivel == 0){
    console.log(`Com o combustível etanol ficará ${(consumoMedio*etanolPrice).toLocaleString
        ('pt-BR',{style:'currency',currency: 'BRL'})} `)

}else(tipoCombustivel == 1)
    console.log(`Com o combustível gasolina ficará ${(consumoMedio*gasolinaPrice).toLocaleString
        ('pt-BR',{style:'currency',currency: 'BRL'})}`)
