const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoicm9tZm9sIiwiYSI6ImNrMDAwcmhvMDBidWgzaHF0d21qZTZpN2wifQ.tQkCXh2owYHqE1FFXwSBxg&limit=1`;
  request({ url, json: true }, (err, resp) => {
    if (err) {
      callback('unable to connect');
    } else if (resp.body.features.length === 0) {
      callback('unable to find location');
    } else {
      callback(undefined, {
        latitude: resp.body.features[0].center[1],
        longitude: resp.body.features[0].center[0],
        location: resp.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
