const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=70e9c8cc78e7ada0668e4e1eeb0005d8&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ ', It is currently ' + body.current.temperature + ' degress out. And It feelslike ' + body.current.feelslike + ' degree out.')
        }
    })
}

module.exports = forecast
