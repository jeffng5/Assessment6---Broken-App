const express = require('express');
let axios = require('axios');
var app = express();
app.use(express.json())






app.get('/', async function(req, res, next) {


let listA= ["joelburton", "elie"]
// listA.push(new user)
for (const item of listA) {let resp = await axios.get(`https://api.github.com/users/${item}`) ;
res.send({"name" : resp.data['name'], "bio" : resp.data['bio']})

}
})






app.listen(3000);
console.log("listening at port 3000")