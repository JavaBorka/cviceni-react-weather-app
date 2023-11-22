export const getDateFromUnix = (unix) => {
    const day = new Date(unix * 1000).getDate()
    const month = new Date(unix * 1000).getMonth()
    return `${day}.${month + 1}.`
}

export const getDayFromUnix = (unix) => {
    const days = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota']
    const dayOfWeek = new Date(unix * 1000).getDay()
    return days[dayOfWeek]
}