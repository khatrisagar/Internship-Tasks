const getData = require('./getData')

function generateView(id, type){
    var tableD =  ""

    return new Promise( (resolve,reject) => {
        getData(id).then(data =>{


            if(type=='dropdown'){
                tableD += `<select>`
                data.forEach(val => {
                tableD += `<option>${val.option_value}</option>`

                });
                tableD += `</select>`
            }

            if(type=='radio'){
                data.forEach(val => {
                   tableD += `<input type="radio" id="${id}" name="${id}" value="${val.option_value}">
                              <label for="${val.option_value}">${val.option_value}</label><br>`
    
                });
            }
            if(type=='checkbox'){
                data.forEach(val => {
                tableD +=`<input type="checkbox" id="${id}" name="${val.option_value}" value="${val.option_value}">
                          <label for="${val.option_value}">${val.option_value}</label><br></br>`
                });
            }
            resolve(tableD)
        })
    })

}

module.exports= generateView