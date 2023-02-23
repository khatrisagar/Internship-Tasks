const connection =  require("./databaseconnnection")
const getData =  require("./getData")

function generateData(tableName,tableFields){
    let tableQuery = ""
    tableQuery += `<table><tr>`

    tableFields.forEach(data => {
        tableQuery += `<td>${data}</td>`
    });

    console.log(tableQuery)
    let data = getData(tableName,tableFields)
    // data.forEach(data1 =>{
    //     tableQuery += `<tr><td>${data1}</td></tr>`
    // })


    return tableQuery;
}

module.exports = generateData