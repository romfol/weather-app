const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/58efc0cfaaa379797790e584c095026d/${lat},${long}?units=si`;  
  request({ url, json: true }, (err, resp) => {
    if (err) {
      callback('unable to connect');
    } else if (resp.body.error) {
      callback('unable to find location');
    } else {
      callback(undefined, resp.body.daily.data[0].summary + " It's currently " + resp.body.currently.temperature + " degress out. There is a " + resp.body.currently.precipProbability+ "% chance of rain.");
    }
  });
};

module.exports = forecast;
