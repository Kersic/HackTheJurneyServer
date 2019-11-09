var Amadeus = require('amadeus');
const express = require('express');
const cors = require('cors');
xs
const app = express();

var amadeus = new Amadeus({
    clientId: 'EuYdJ6yCTDGMK2oVhk98lNA0AnxWN7N2',
    clientSecret: 'ZG3GpukJ7lu2G0Y1'
});


// amadeus.referenceData.urls.checkinLinks.get({
//     airlineCode: 'BA'
// }).then(function(response){
//     console.log(response.data[0].href);
// }).catch(function(responseError){
//     console.log(responseError.code);
// });

// app.get('/',cors(), (req, res) => res.send(
//     [{
//         id: 0,
//         flight: {
//             id: 0,
//             from: 'LJ',
//             to: 'LD',
//         },
//         hotel: {
//             id: 0,
//             location: 'LD',
//             price: 200,
//         }
//     },
//
//         {
//             id: 1,
//             flight: {
//                 id: 1,
//                 from: 'LJ',
//                 to: 'PA',
//             },
//             hotel: {
//                 id: 1,
//                 location: 'Pa',
//                 price: 150,
//             }
//         },
//
//         {
//             id: 2,
//             flight: {
//                 id: 2,
//                 from: 'LJ',
//                 to: 'MA',
//             },
//             hotel: {
//                 id: 2,
//                 location: 'MA',
//                 price: 500,
//             }
//         }
//     ]
// ));

amadeus.shopping.flightDestinations.get(
    {
        origin: 'MAD',
    }).then(function(response){
    console.log(response);
}).catch(function(responseError){
    console.log(responseError.code);
});


app.listen(3000, () => console.log(`Example app listening on port 3000`))
