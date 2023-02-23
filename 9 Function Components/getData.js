const connection =  require("./databaseconnnection")


function getData(tableName,tableFields) {
    connection.query(`select ${tableFields} from ${tableName}`, function(err,data){
        if (err) throw err;
        // console.log(data[0].last_name)
        return data;

    })
  };
module.exports = getData