const ax = require('axios')

ax.get("http://lo:9000/notes").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err.code)
})
console.log("done with requests")