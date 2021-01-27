var dbs = require("./sqlfns")
//                                                  **main page fnc
function get(req,res){
    res.send("Welcome to NOTE API")
}

//                                                  **getall notes func
function getnotes(req,res){
    // res.send("got all notes")
    dbs.getall(req,res)
}
//                                                  **add note func active func
function addnote(req,res){
    // res.send("got all notes")
    dbs.insertnote(req,res)
}
//                                                  **delete note func
function delnote(req,res){
    dbs.delnote2(req,res)
}
function searchid(req,res){
    dbs.search(req,res)
}


module.exports = {
    get,getnotes,addnote,delnote,searchid
}