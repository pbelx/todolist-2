//trying to keep db separate

var sql = require('mysql')

conn = sql.createConnection({
    host: "127.0.0.1",
    user: "testa",
    password: "testa1",
    database: "todo"
})

module.exports = {
    conn
}