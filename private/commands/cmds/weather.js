var weather = require('weather-js');
var moment = require('moment');

function forcast(msg) {
  return new Promise(function (resolve, reject){
    weather.find({search: msg.content, degreeType: 'C'}, function(err, result) {
      var responseString = '```';
      if(err){
        reject(err);
      } else {
        result = result[0];
        responseString += '' + result.location.name + '\n'+ moment(result.current.date).format('dddd, MMMM Do YYYY') + ' ('+ result.location.degreetype + '°)'+'\n\n';
        responseString += 'Current: ' + result.current.temperature + '°, '+result.current.skytext + '\n\n';
        var today = (new Date(result.current.date)).getTime();
        if (result.forecast.length > 0) {
          responseString += 'Forecast:\n'
          result.forecast.forEach(function(item){
            if (today < (new Date(item.date)).getTime()) {
              responseString += item.day + ': ' + item.low + '°-' + item.high + '°, ' + item.skytextday + '\n';
            }
          });
        }
        responseString += '\n```'
        resolve(responseString);
      }
    });
  });
}


module.exports = {
  forcast: forcast
};
var weatherexapamle = [
  {
    "location": {
      "name": "San Francisco, CA",
      "lat": "37.777",
      "long": "-122.42",
      "timezone": "-7",
      "alert": "",
      "degreetype": "F",
      "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
    },
    "current": {
      "temperature": "55",
      "skycode": "29",
      "skytext": "Partly Cloudy",
      "date": "2017-07-02",
      "observationtime": "02:10:00",
      "observationpoint": "San Francisco, CA",
      "feelslike": "55",
      "humidity": "85",
      "winddisplay": "12 mph Southwest",
      "day": "Sunday",
      "shortday": "Sun",
      "windspeed": "12 mph",
      "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/29.gif"
    },
    "forecast": [
      {
        "low": "51",
        "high": "66",
        "skycodeday": "29",
        "skytextday": "Partly Cloudy",
        "date": "2017-07-01",
        "day": "Saturday",
        "shortday": "Sat",
        "precip": ""
      },
      {
        "low": "56",
        "high": "68",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2017-07-02",
        "day": "Sunday",
        "shortday": "Sun",
        "precip": "0"
      },
      {
        "low": "57",
        "high": "70",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2017-07-03",
        "day": "Monday",
        "shortday": "Mon",
        "precip": "10"
      },
      {
        "low": "56",
        "high": "67",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2017-07-04",
        "day": "Tuesday",
        "shortday": "Tue",
        "precip": "40"
      },
      {
        "low": "55",
        "high": "66",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2017-07-05",
        "day": "Wednesday",
        "shortday": "Wed",
        "precip": "30"
      }
    ]
  },
  {
    "location": {
      "name": "San Francisco, Colombia",
      "lat": "3.06",
      "long": "-76.659",
      "timezone": "-5",
      "alert": "",
      "degreetype": "F",
      "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
    },
    "current": {
      "temperature": "70",
      "skycode": "27",
      "skytext": "Mostly Cloudy",
      "date": "2017-07-02",
      "observationtime": "04:00:00",
      "observationpoint": "San Francisco, Colombia",
      "feelslike": "70",
      "humidity": "100",
      "winddisplay": "2 mph West",
      "day": "Sunday",
      "shortday": "Sun",
      "windspeed": "2 mph",
      "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/27.gif"
    },
    "forecast": [
      {
        "low": "67",
        "high": "85",
        "skycodeday": "27",
        "skytextday": "Mostly Cloudy",
        "date": "2017-07-01",
        "day": "Saturday",
        "shortday": "Sat",
        "precip": ""
      },
      {
        "low": "67",
        "high": "82",
        "skycodeday": "4",
        "skytextday": "T-Storms",
        "date": "2017-07-02",
        "day": "Sunday",
        "shortday": "Sun",
        "precip": "70"
      },
      {
        "low": "66",
        "high": "83",
        "skycodeday": "4",
        "skytextday": "T-Storms",
        "date": "2017-07-03",
        "day": "Monday",
        "shortday": "Mon",
        "precip": "90"
      },
      {
        "low": "66",
        "high": "79",
        "skycodeday": "11",
        "skytextday": "Rain Showers",
        "date": "2017-07-04",
        "day": "Tuesday",
        "shortday": "Tue",
        "precip": "100"
      },
      {
        "low": "68",
        "high": "82",
        "skycodeday": "4",
        "skytextday": "T-Storms",
        "date": "2017-07-05",
        "day": "Wednesday",
        "shortday": "Wed",
        "precip": "100"
      }
    ]
  }
]
