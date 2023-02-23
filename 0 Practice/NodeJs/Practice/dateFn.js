let calendar=  require('node-calendar')

console.log(calendar.isleap(2001))
console.log(calendar.monthrange(2023, 2))
console.log(calendar.day_name)

let d = new Date()
let date = d.getDate()

let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday']
let day = weekDays[d.getDay()]

// console.log(d)
// console.log(day)