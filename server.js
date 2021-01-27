var rest = require("restify")
var serverfns = require("./serverfunctions")

var app = rest.createServer()

app.use(rest.plugins.bodyParser())

//                                                         ***main get page
app.get("/",(req,res)=>{
    serverfns.get(req,res)
})
//                                                         ***get all notes route
app.get("/notes",(req,res)=>{
    serverfns.getnotes(req,res)
})
//                                                         ***add note route
app.post("/addnote",(req,res)=>{
    // serverfns.post(req,res)
    serverfns.addnote(req,res)
})
app.post("/search",(req,res)=>{
    // serverfns.post(req,res)
    serverfns.searchid(req,res)
})
//                                                         ***delete note route
app.post("/delnote",(req,res)=>{
    // serverfns.post(req,res)
    serverfns.delnote(req,res)
})


app.listen(9000)
console.log("server 9000")