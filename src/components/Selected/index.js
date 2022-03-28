const axios = require("axios");

let dates = []
let date
let diff = 86400000
const findDates = () => {
    for(let i=1; i<=10; i++) {
        let yesterday = new Date(Date.now()-`${diff*i}`)
        date = yesterday.getFullYear() + '/' + '0' + (yesterday.getMonth()+1) + '/' + yesterday.getDate()
        dates.push(date)
    }
}
findDates()

const arrObjWithData = []
const fetchPrevData = async() => {
     dates.map(prevDate => {
         axios
             .get(`https://www.cbr-xml-daily.ru/archive/${prevDate}/daily_json.js`)
             .then(response => {
                 let objAboutData = {
                     currentDate: response.data.Date,
                     valutes: Object.assign({}, response.data.Valute),
                 }
                 arrObjWithData.push(objAboutData)
             })
    })
}
fetchPrevData()

export default arrObjWithData;