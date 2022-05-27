export const getUserPosition = () => {
    return new Promise((reslove, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                reslove(position)
            }, error => { reject(error) })
        }
    })
}

export const getUserCoordinates = (location) => {
    return { lat: location.latitude, lng: location.longitude }
}