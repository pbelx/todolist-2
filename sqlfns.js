//sql functions go here
var pool = require('./db')



// pool = db.pool

function print(msg) {
    console.log(msg)
}


//                                                              *get all notes
function getall(req, res) {
var query = "select * from notes"
pool.query(query,(err,result)=>{
    if(err){
        res.send("db lockdown curfew")
        // pool.destroy()
        return
    }
    console.log(result)
    res.send(result)
    // pool.end()
    // pool.destroy()
})

}
function search(req, res) {

    if (req.body !== undefined && req.body.noteid !== undefined) {
        var noteid = req.body.noteid
        var squery = "select note from notes where id=?"

        pool.query(squery, [noteid], (err, results) => {
            if (err) {
                res.send("database locked")
            }
            else if (results.length !== undefined && results.length > 0) {
                res.send(results)
            } else {
                res.send("not found")
            }
        })
    } else {
        res.send("wrong info ")
    }
}
//                                                      ***insert note
function insertnote(req, res) {
    if (req.body !== undefined && req.body.note !== undefined) {
        var nts = req.body.note
        sql = "insert into notes (note) values (?);"
        pool.query(sql, [nts], (err, result) => {
            if (err) {
                res.send("database locked")
            } else if (result.affectedRows !== undefined && result.affectedRows > 0) {
                res.send("note saved")

            } else {
                res.send("wrong info")
            }
        })

    }
}


//                                                      ***delete note function



function delnote2(req, res) {

    if (req.body !== undefined && req.body.id !== undefined) {
        var nts = req.body.id
        sql = "delete from notes where id = ?;"
        pool.query(sql, [nts], (err, result) => {
            if (err) {
                res.send("database locked")
            }
            else if (result.affectedRows !== undefined && result.affectedRows === 0) {
                res.send("failed")
            } else {
                res.send("Note " + nts + " Deleted")
            }

        })
    } else {
        res.send("wrong info")
    }
}





module.exports = {
    getall, insertnote, delnote2, search
}
