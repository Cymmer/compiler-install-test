const express = require('express');
const app = express();
const port = 3000;
var exec = require('child_process').exec;

app.get('/c-and-cpp', (req, res) => {
    let result = '';
    let child = exec('pkg install clang -y', {maxBuffer: 10486750});

    child.stdout.on('data', (data) => result += data);
    // child.stdout.pipe(process.stdout);
    child.on('exit', () => {
        res.send("Finished: " + result);
    });
})

// app.get('/check-c-and-cpp', (req, res) => {
//     let child = exec('gcc ')
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})