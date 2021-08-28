export default async function chill(time: number) {
    return new Promise((resolve, reject) => {
        setTimeout(x => {
            return resolve(time)
        }, time)
    })
}