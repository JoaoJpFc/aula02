let peso = 68
let altura = 1.65
let nome = "Jp"
let IMC = peso / (altura ** 2)
console.log(IMC)


if(IMC < 18.5){
    console.log(`Paciente abixo do peso. IMC ${IMC}`)

} else if (IMC >=18.5 && IMC <24.9){
    console.log(`Paciente tem peso normal. IMC ${IMC}`)

} else if (IMC >=24.9 && IMC <29.9){
    console.log(`Paciente está acima do peso. IMC ${IMC}`)

} else if (IMC >=29.9 && IMC <34.9){
    console.log(`Paciente tem obesidade tipo I. IMC ${IMC} `)

} else if (IMC >=34.9 && IMC <39.9){
    console.log(`Paciente tem obesidade tipo II. ${IMC}`)

}else{
    console.log(`Paciente tem obesidade tipo III. ${IMC}`)
}




// if (IMC < 18.5) {
//   console.log(`O paciente ${nome} está abaixo do peso ${IMC.toFixed(1)}`)
// } else if (IMC >= 18.5 && IMC <= 24.9) {
//   console.log(`O paciente ${nome} está com o peso normal ${IMC.toFixed(1)}`)
// } else if (IMC >= 25.0 && IMC <= 29.9) {
//   console.log(`O paciente ${nome} está acima do peso ${IMC.toFixed(1)}`)
// } else if (IMC >= 30.0 && IMC <= 34.9) {
//   console.log(
//     `O paciente ${nome} está com obesidade classe I ${IMC.toFixed(1)}`)
// } else if (IMC >= 35.0 && IMC <= 39.9) {
//   console.log(
//     `O paciente ${nome} está com obesidade classe II ${IMC.toFixed(1)}`)
// } else {
//   console.log
//   (`O paciente ${nome} está com obesidade classe III ${IMC.toFixed(1)}`)
// }

