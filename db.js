//trying to keep db separate

var mysql = require("mysql")
var db_config = {
    
    host:"127.0.0.1",
    user:"testa",
    password:"testa1",
    database:"todo",
    connectTimeout: 10000 
 };

var pool = mysql.createPool(db_config)
pool.getConnection((err,conn)=>{
    if(err){
        console.log("failed login")
    }
})

pool.on("error",(err)=>{
    console.log("error");
})

module.exports = pool;
