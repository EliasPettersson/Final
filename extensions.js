const request = require('request');

var getImages = () => {
    return new Promise((resolve, reject) => {
        request({
            url:`https://jsonplaceholder.typicode.com/photos`,
            json:true
        }, (error, response, body) => {
            if(error) {
                reject("sorry cannot connect")
            }
        })
    })
};

var getDeck = (newcard) => {
    return new Promise((resolve, reject) => {
        request({
            url:`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("sorry cannot connect")
            } else if (body.hasOwnProperty(body)) {
                resolve({
                    deck: body[0].deck_id,
                    cards:body[0].remaining
                })
            }
        })
    })
};

var getCard = (cards) => {
    return new Promise((resolve, reject) => {
        request( {
            url:`https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=${cards}`,
            json:true
        }, (error, response, body) => {
            if(error) {
                reject("sorry cannot draw")
            } else if (body.hasOwnProperty('cards')) {
                resolve({
                    card: body[0].cards
                })
            } else {
                reject("an error has occured")
            }
        })
    })
};

module.exports = {
    getImages,
    getDeck,
    getCard
};