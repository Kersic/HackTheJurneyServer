var Amadeus = require('amadeus');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

var amadeus = new Amadeus({
    clientId: 'EuYdJ6yCTDGMK2oVhk98lNA0AnxWN7N2',
    clientSecret: 'ZG3GpukJ7lu2G0Y1'
});


app.get('/getInspirations', function (req, res, next) {
    amadeus.shopping.flightDestinations.get({
        origin : 'MAD'
    }).then(function (response) {
        res.send(response);
    })


});


app.get('/', async function (req, res, next) {

    let origin = 'LON';
    let destinations = ['NYC', 'PAR'];
    let dates = [
        {dateFrom:'2019/12/3', dateTo:'2020/1/12'},

    ];

    var promiseArray = [];

    destinations.forEach((destination) => {
        dates.forEach((date) => {
            promiseArray.push(
                amadeus.shopping.flightOffers.get({
                    origin: origin,
                    destination: 'NYC',
                    departureDate: '2020-04-01'
                }).then(function(response){
                    console.log(response.result.data);
                    return amadeus.shopping.flightOffers.prediction.post(
                        response.result.data
                    );
                })

            )
        });
    });

    // let offers = await Promise.all(promiseArray).body.data.slice(0,30);
    // offers.for((offer) => {
    //     console.log(offer.choiceProbability);
    // });

    res.send(await Promise.all(promiseArray).then(array => {

        return array[0].combine(array[1]);
    }).catch(error => { return error }));
});




app.listen(3002, () => console.log(`Example app listening on port 3002`));
