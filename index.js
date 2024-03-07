
// поля
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')

//кнопки
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')

//кнопка старт
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)
})

//кнопка пауза
pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

//кнопка стоп
stopButton.addEventListener('click', () => {
    clearInterval(interval)
    hour = 0
    minute = 0
    second = 0
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
})

//переменные 
let hour = 0,
    minute = 0,
    second = 0,
    interval;



//таймер
function startTimer() {
    second++
    if (second < 9) {
        secondElement.innerText = "0" + second
    }
    if (second > 9) {
        secondElement.innerText = second
    }
    if (second > 59) {
        minute++
        minuteElement.innerText = "0" + minute
        second = 0
        secondElement.innerText = "0" + second
    }

    if(minute < 9) {
        minuteElement.innerText = "0" + minute
    }
    if(minute > 9) {
        minuteElement.innerText = minute
    }
    if(minute > 59) {
        hour++
        hourElement.innerText = "0" + hour
        minute = 0
        minuteElement.innerText = minute
    }

    if(hour < 9) {
        hourElement.innerText = "0" + hour
    }
    if(hour > 9) {
        hourElement.innerText = hour
    }
}



