export function formatHour(hour){ 
    return hour % 12 || 12;
}

export function formatMinutes(minutes){
    const minLength = minutes.toString()
    if (minLength == 1){
        return `0${minutes}`
    }else{
        return minutes
    }
}

export function timePeriod(hour){    
    if (hour >= 0 && hour <= 11){
        return `am`
    }else{
        return `pm`
    }
}