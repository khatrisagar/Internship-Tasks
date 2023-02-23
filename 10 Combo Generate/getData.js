const connection = require('./connection')

function getData(id){
    let qry =  `select option_value from option_master inner join select_master on option_master.select_id = select_master.select_id where select_master.select_id = ${id}`

    return new Promise( (resolve,reject) => {
            connection.query(qry,(err,d)=>{
                if(err) throw err
                resolve(d)
            })
        })
        }

module.exports = getData
