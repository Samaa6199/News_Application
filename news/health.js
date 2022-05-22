// Health page request

const request = require('request')


const healthnews = (callback) => {
    // Country = egypt , Category = health
    const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=b9a0274dc7324a9ea31329db6d74a71e'
    request({url,json:true}, (error, data) => {
        if (error) {
            callback('Can not reach this websit',undefined);
        } else if (data.body.message) {
            callback('Your API key is invalid or incorrect',undefined);
        } 
        else {
            callback(data.body);
        }
    });
}

module.exports = healthnews