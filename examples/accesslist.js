const api=require("adguard-api")
let url = "http://127.0.0.1"
let user = "admin"
let pass = "admin"
api.accesslist(url, user, password).then(data =>{
    console.log(data)
})
