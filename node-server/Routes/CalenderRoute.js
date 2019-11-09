var express = require('express');
var router = express.Router();
var Calender = require('../Models/Calander');

let calander = {
    "slots": [
        {
            "id":1,
            "from": '2019-11-12',
            "to": '2019-11-15',
            "purpose": 'buissines',
        },
        {
            "id":2,
            "from": '2019-12-25',
            "to": '2019-12-30',
            "purpose": 'buissines',
        }]
};

router.get('/',function(req,res){
    res.json(calander);
});

router.post('/add',function(request, response){
    console.log(request.body);
    response.send(request.body);
});

module.exports = router;
