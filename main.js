
const kia = document.getElementById("kia")

console.log(kia)

const apiurl = "https://api.api-ninjas.com/v1/cars?model=sedona&make=kia&year=2016"
const apikey = "XJ9cMWmqRbgnwqVvCUFifQ==YTAMezPYreJJ6tQr"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
}

async function getCars() {
    const response = await fetch(apiurl, options)
    const data = await response.json()
    console.log(data)
}
getCars()