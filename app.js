const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.get('/', (req,res) => {

    var object = [{
        userId: 1,
        id: 2,
        title: 'student',
        body: 'This is my first time taking web-dev class!'
    },
    {
        userId: 2,
        id: 3,
        title: 'driver',
        body: 'been driving for more than ten years!'
    },
    {
        userId: 3,
        id: 4,
        title: 'immigrant',
        body: 'From Africa!'
    },
        {
        userId: 4,
        id: 5,
        title: 'yes',
        body: 'full stack developer!'
    },
    {
        userId: 5,
        id: 6,
        title: 'resident',
        body: 'lived in Seatac for 12 years!'
    }]
    res.send(object);
});

app.listen(3002, () => {
    console.log("listening on port 3002");
})