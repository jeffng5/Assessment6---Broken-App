const urls_text = require("./urls.txt")
const express = require('express');
let axios = require('axios');
let app = express();

app.use(express.json())

console.log(urls_text)


app.get('/', async function(req, res, next) {
   
    let url = urls_text
    
    try{
    let resp = await axios.get(url, {responseType: 'document'})
    console.log(req)
    console.log(resp.status)
    console.log(resp.text)   
    const node_js = resp

    let FileSaver = require('file-saver');
    let blob = new Blob([resp], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "~/Downloads/node-express-projects/nodejs.com");



res.send("BYE FOR NOW")}
catch (error) {console.log('Error!')}
}

) 

// var request = new XMLHttpRequest();
// request.open("GET", "https://rithmschool.com/page.html", true);
// request.onreadystatechange = function() {
//   if (request.readyState === 4 && request.status === 200) {
//     var html = request.responseText;
//         console.log(html)
//   }
// };
// request.send(null);

app.listen(4000)
console.log("listening at port 4000")