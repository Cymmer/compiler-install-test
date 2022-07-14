const express = require('express');
const app = express();
const port = 3000;
var exec = require('child_process').exec;

app.get('/cAndCPP', (req, res) => {
    let res = '';
    exec('pkg install clang -y', (error, stdout, stderr) => {
        if(!error) {
            res = "STDOUT: " + stdout;
        } else {
            res = "ERROR: " +  error + stderr;
        }
    })
  res.send('Hello World! ' + stdout);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})