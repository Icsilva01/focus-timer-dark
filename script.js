//dark-mode variáveis
const $html = document.querySelector('html')
const dark = document.querySelector('.dark-mode')
const light = document.querySelector('.light-mode')
const body = document.querySelector('body')



//dark-mode função
light.addEventListener('click', function(){
  light.classList.add('hide')
  dark.classList.remove('hide')
  
  body.classList.add('dark') //
  /* 
  foi adicionado o dark em todosos elementos que necessitava mudar 
  com a função do dark-mode, criados no style.css*/
})
dark.addEventListener('click', function(){
  dark.classList.add('hide')
  light.classList.remove('hide')

  body.classList.remove('dark')
 
})

//variáveis do timer e sons
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay  = document.querySelector('.play')
const buttonStop  = document.querySelector('.stop')
const buttonIncreaseTimer = document.querySelector('.increase-time')
const buttonDecreasecreaseTimer = document.querySelector('.decrease-time')
const soundForest = document.querySelector('.forest')
const soundRain = document.querySelector('.rain')
const soundCoffee = document.querySelector('.coffee')
const soundFire = document.querySelector('.fire')
const soundPressForest  = new Audio('./audio/Floresta.wav')
const soundPressRain  = new Audio('./audio/Chuva.wav')
const soundPressCoffee  = new Audio('./audio/Cafeteria.wav')
const soundPressFire  = new Audio('./audio/Lareira.wav')

//função do timer em contagem regressiva

let timerTimeOUt
let minutes = Number(minutesDisplay.textContent)
/*para pegar um conteúdo, é necessário do .textContent*/

function countdown(){
  timerTimeOUt  = setTimeout(function(){

    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
  
    if (seconds <=0) {
      seconds = 60
  
      minutesDisplay.textContent = String(minutes-1).padStart(2, '0')
    }
  
    secondsDisplay.textContent  = String(seconds-1).padStart(2, '0')
  
    if(minutes<=0){
      minutesDisplay  = '00'
      secondsDisplay  = '00'
      return
    }
    countdown()

  }, 1000)
}

//Ação dos botões do timer

buttonPlay.addEventListener('click', function(){
  countdown()
})

buttonStop.addEventListener('click', function(){
  clearTimeout(timerTimeOUt)
  minutesDisplay.textContent  = '25'
  secondsDisplay.textContent  = '00'
  soundPressForest.pause()
  soundPressRain.pause()
  soundPressCoffee.pause()
  soundPressFire.pause()
})

buttonIncreaseTimer.addEventListener('click', function(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

buttonDecreasecreaseTimer.addEventListener('click', function(){
  minutesDisplay.textContent  = Number(minutesDisplay.textContent)  - 5
})

//Ação dos botões sonoros
soundForest.addEventListener('click', function(){
  soundPressForest.play()
  soundPressForest.loop = true
  soundPressRain.pause()
  soundPressCoffee.pause()
  soundPressFire.pause()
})
soundRain.addEventListener('click', function(){
  soundPressRain.play()
  soundPressRain.loop = true
  soundPressForest.pause()
  soundPressCoffee.pause()
  soundPressFire.pause()
})
soundCoffee.addEventListener('click', function(){
  soundPressCoffee.play()
  soundPressCoffee.loop = true
  soundPressForest.pause()
  soundPressRain.pause()
  soundPressFire.pause()
})
soundFire.addEventListener('click', function(){
  soundPressFire.play()
  soundPressFire.loop = true
  soundPressForest.pause()
  soundPressRain.pause()
  soundPressCoffee.pause()
})

//Variáveis do volume
const inputForest = document.querySelector('#volForest')
const inputRain = document.querySelector('#volRain')
const inputCoffee = document.querySelector('#volCoffee')
const inputFire = document.querySelector('#volFire')

//Ação de aumentar ou diminuir o volume da música

volForest.addEventListener('change', function(){
  const volForest = inputForest.value/100
  soundPressForest.volume = volForest
})
volRain.addEventListener('change', function(){
  const volRain = inputRain.value/100
  soundPressRain.volume = volRain
})
volCoffee.addEventListener('change', function(){
  const volCoffee = inputCoffee.value/100
  soundPressCoffee.volume = volCoffee
})
volFire.addEventListener('change', function(){
  const volFire = inputFire.value/100
  soundPressFire.volume = volFire
})






