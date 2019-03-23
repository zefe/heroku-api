const express = require('express');
const app = express();

var port = process.env.PORT || '5000';

app.use(express.json())

app.all('/', (req, res) => {
    res.json({
        "name": "zefe",
        "project":"My first app in heroku"
    })
    res.end()
})


//server
app.listen(port, function(){
    console.log(`server listen in port ${port}`);
  });