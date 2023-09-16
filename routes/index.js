const express = require('express');

const router = express.Router();
const fs = require('fs');
const path = require('path');

//open the main page
router.get('/',function(req,res){
    fs.readFile(path.join(__dirname,'entry.html'),function(err,data){
        if(err) return res.end(`<h1>Error in displaying main page</h1>${err}`)
        res.end(data);
    })
})

//forwarding all api related routes
router.use('/api',require('./api'));

module.exports = router;