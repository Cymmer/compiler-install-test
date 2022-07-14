const { execSync } = require('child_process');
const express = require('express');
const app = express();
const port = 3000;
var exec = require('child_process').exec;

app.get('/c-and-cpp', (req, res) => {
    // We make sure to uninstall first if ever user has installed clang but with corrupted
    try {
        execSync('pkg uninstall clang -y');
    } catch(e) {
        return res.json({ success: false, message: 'Something went wrong in uninstalling clang' });
    }

    try {
        execSync('pkg install clang -y');
    } catch(e) {
        return res.json({ success: false, message: 'Something went wrong in installing clang' });
    }

    return res.json({ success: true });
})

app.get('/check-c-and-cpp', (req, res) => {
    try {
        execSync('gcc -c c/main.c');
        return res.json({ success: true });
    } catch(e) {
        return res.json({ success: false })
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})