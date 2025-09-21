'use strict'

const target = document.querySelector('#target')

const insertPara = (label, value) =>{
    const p = document.createElement("p")
    p.textContent = `${label}:${value}`
    target.appendChild(p)

}

insertPara("Browser info:", navigator.userAgent)

insertPara("Operating system", navigator.platform)

insertPara("Screen :", `${screen.width} x ${screen.height}`)

insertPara("Available screen space",`${screen.availWidth} x ${screen.availHeight}`)

const now = new Date()
const finnishDate = new Intl.DateTimeFormat("fi-FI",{
    day: "numeric",
    month: "long",
    year: "numeric",
}).format(now)

const finnishTime = new Intl.DateTimeFormat("fi-FI",{
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
}).format(now)
insertPara("Date",finnishDate)
insertPara("Time",finnishTime)

