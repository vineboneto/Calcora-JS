let incoming = document.getElementById('incoming')
let coming = document.getElementById('coming')
let result  = document.getElementById('result')

hourMinutesMaks(incoming)
hourMinutesMaks(coming)

clear(incoming)
clear(coming)


function clear(input) {
    input.addEventListener('change', (event) => {
        if (input.value === '') result.value = ''

    })

    input.addEventListener('focus', (event) => {
        input.value = ''
        if (input.value == '') result.value = ''
    })
}

function hourMinutesMaks (input)  {
    input.addEventListener('keyup', (event) => {
        event.currentTarget.maxLength = 5
        let value = event.currentTarget.value
        value = value.replace(/\D/g)
        value = value.replace(/(\d{2})(\d{2})/, "$1:$2")
        event.currentTarget.value = value
        settingTime()
    })
}

function settingTime() {
    if (coming.value.length > 4 && incoming.value.length > 4) {
        let minuteIncoming = parseInt(incoming.value.split(':')[1])
        let minuteComing = parseInt(coming.value.split(':')[1])
        let hoursInMinutesIncoming = hoursToMinutes(incoming.value.split(':')[0])
        let hoursInMinutesComing = hoursToMinutes(coming.value.split(':')[0])
        let totalMinutesIncoming = hoursInMinutesIncoming + minuteIncoming
        let totalMinutesComing = hoursInMinutesComing + minuteComing
        let totalTime = calculeTime( totalMinutesComing, totalMinutesIncoming)
        result.value = hourMask(totalTime)
    }
}

function calculeTime(minutesComing, minutesIncoming) {
    
    if (minutesComing < minutesIncoming) {
        // Total de minutos em 1 dia menos minutos de saida
        let time = 1440 - minutesIncoming
        return time + minutesComing
    } else {
        return minutesComing - minutesIncoming
    }
}

function hourMask(minutes) {
    let hour = Math.floor(minutes / 60)
    let minute = minutes % 60
    if (hour < 10) hour = `0${hour}` 
    if (minute < 10) minute =`0${minute}`   
    return `${hour}:${minute}`
}

function hoursToMinutes(hours) {
   return hours * 60
}

