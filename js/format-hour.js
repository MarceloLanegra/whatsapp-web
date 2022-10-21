export function formatHour(hour){ 
    return hour % 12 || 12;
}

export function timePeriod(hour){    
    if (hour >= 0 && hour <= 11){
        return `am`
    }else{
        return `pm`
    }
}