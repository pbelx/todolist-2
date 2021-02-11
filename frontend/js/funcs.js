

var app = new Vue({
    el: "#app",
    data: {
        message: "I am frontend dev",
        note: "",
        mj: [{
            id:0,
            note:"new note"
        }],
        idnote: "",
        delid: ""

    },
    methods: {
        save: function () {
            // this.message = "clicked "
            this.message = this.note
            axios.post("http://127.0.0.1:9000/addnote", {
                note: this.message
            }).then((res) => {
                // this.message = res.data
                this.note = ""
                this.getnotes()
            })

        },
        getnotes: function () {
            // var reply = ""
            axios.get("http://127.0.0.1:9000/notes").then((res) => {
                this.mj = res.data
                // console.log(res.data)
                // // var reply = ""
                this.message = res.data
                // this.mj = res.data

            }).catch((err) => {
                this.message = err
            })
        },
        log(item) {
            // console.log(e.target.innerText )

            // console.log(item.note)
            this.idnote = item.note
            this.delid = item.id
            this.message = this.delid + " " + this.idnote
        },
        del() {
            // this.delfile = this.delid
            if (this.delid === "") {
                console.log("empt")
            } else {
                // console.log("ddd")
                // this.message = this.delid
                axios.post("http://127.0.0.1:9000/delnote", {
                    id: this.delid
                }).then((res) => {
                    // console.log(res)
                    
                    this.getnotes()
                    this.message = res.data

                })
            }



        }
    }
})