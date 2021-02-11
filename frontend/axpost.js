const ax = require("axios")

ax.post("http://lo:9000/delnote",{
    id:"40"
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})