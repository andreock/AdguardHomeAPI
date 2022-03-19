const stats= require("../src/stats/stats.js")
stats("http://185.242.180.114", "andredns", "Pintotto1!").then(data => {
    console.log(data)
})