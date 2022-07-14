const express = require('express');
const app = express();
const port = 3000;
var exec = require('child_process').exec;

app.get('/cAndCPP', (req, res) => {

    exec('apt upgrade', (error, stdout, stderr) => {
        if(!error) {
            console.log("STDOUT: ", stdout);
        } else {
            console.log("ERROR: ", error, stderr);
        }
    })
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})