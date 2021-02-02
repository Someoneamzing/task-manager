const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile('./public/index.html', {root: __dirname});
})

app.use(express.static('public'))

app.listen(3000)