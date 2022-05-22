// Home page request
const request = require('request')


const newsapp = (callback) => {
    // Country = egypt , Category = business
    const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=b9a0274dc7324a9ea31329db6d74a71e'
    request({url,json:true}, (error, data) => {
        if (error) {
            callback('can not reach this website',undefined);
        } else if (data.body.message) {
            callback('Your API key is invalid or incorrect',undefined);
        } 
        else {
            callback(data.body);
        }
    });
}

module.exports = newsapp