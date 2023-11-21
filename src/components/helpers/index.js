export const getDateFromUnix = (unix) => {
    const day = newDate(unix * 1000).getDate()
    const month = newDate(unix * 1000).getMonth()
    return `${day}.${month + 1}.`
}

export const getDayFromUnix = (unix) => {
    const days = ['Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota', 'Neděle' ]
    const dayOfWeek = newDate(unix * 1000).getDay()
    return days[dayOfWeek]
}