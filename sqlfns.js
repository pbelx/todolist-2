//sql functions go here
var db = require('./db'), path = require('path')



conn = db.conn

function print(msg) {
    console.log(msg)
}




//                                                              *get all notes
function getall(req, res) {

    squery = "select * from notes"

    conn.query(squery, (err, results) => {

        if (err) {
            print(err)
        } else {
            print(results)
            res.send(results)
            print("bye bye")
        }
    })
}
function search(req, res) {

    if(req.body !== undefined && req.body.noteid !== undefined){
        var noteid = req.body.noteid
        var squery = "select note from notes where id=?"
    
        conn.query(squery,[noteid], (err, results) => {
            if(results.length>0){
                res.send(results)
            }else{
                res.send("not found")
            }
        })
    }else{
        res.send("404 wrong input ")
    }
}
//                                                                      *insert func
function insertnote(req, res) {

    if(req.body !== undefined && req.body.note !== undefined){
        var nts = req.body.note
        sql = "insert into notes (note) values (?);"
        conn.query(sql, [nts], (err, result) => {
            if (err) {
                print(err)
                res.send("404 wrong info")
            } else {
                print(result)
                res.send("200 ok boss")
            }
        })
    }else{
        res.send("wrong info")
    }


}

//                                                      ***delete note function

function delnote2(req, res) {

    if (req.body !== undefined && req.body.id !== undefined) {
        var nts = req.body.id
        sql = "delete from notes where id = ?;"
        conn.query(sql, [nts], (err, result) => {
            // if (err) {
            //     print(err)
            // } else if(result.length > 0){
            //     print(result)
            //     res.send("note " + nts + " deleted")

            // }else{
            //     res.send("no file deleted")
            // }
            print(result.length)
        })
        

    } else {
        res.send("wrong input")
    }

}





module.exports = {
    getall, insertnote, delnote2,search
}