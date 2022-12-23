const EventEmitter = require('events')
class MeuEmissor extends EventEmitter{

}
const MeuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
MeuEmissor.on(nomeEvento, function (click){
  console.log('um usuario clicou', click)
})

// MeuEmissor.emit(nomeEvento, 'na barra de rolagem')
// MeuEmissor.emit(nomeEvento, 'no ok')

// let count = 0
// setInterval(function () {
//   MeuEmissor.emit(nomeEvento, 'no ok' + (count++))
// }, 1000)

const stdin = process.openStdin()
stdin.addListener('data', function(value){
  console.log(`Voce digitou: ${value.toString().trim()}`)
})