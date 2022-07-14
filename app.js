const express = require('express');
const app = express();
const port = 3000;
var exec = require('child_process').exec;

app.get('/cAndCPP', (req, res) => {
    let result = '';
    exec('pkg install clang -y', (error, stdout, stderr) => {
        if(!error) {
            result = "STDOUT: " + stdout;
            // console.log("RESULT: ", result);
        } else {
            result = "ERROR: " +  error + stderr;
        }
        console.log("RESULT: ", result);
        res.send('Hello World! ' + result);
    })
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})