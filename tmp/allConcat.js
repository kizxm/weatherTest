
$(document).ready(function(){
var apiKey = require('./../.env').apiKey;

  $('#weather').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    ///-----------------------------------///
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71e28e8e025cad00213c7c59444381a8`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').append(`<li> ${city} humidity: ${body.main.humidity} %</li>`);
      $('.showTemperature').append(`<li>tempurature (k): ${body.main.temp} </li> <br>`);
    }, function(error) {
      $('.showErrors').text(`Error in processing request: ${error.message}`);
    });
  });
});

    ///-----------------------------------///
    //  let request = new XMLHttpRequest();
    //  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    //  request.onreadystatechange = function() {
    //        if (this.readyState === 4 && this.status === 200) {
    //          let response = JSON.parse(this.responseText);
    //          getElements(response);
    //        }
    //      }
    //      request.open("GET", url, true);
    //      request.send();
    //      getElements = function(response) {
    //        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //        $('.showTemperature').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    //      }
    //    });
    //  });
     ///-----------------------------------///
//     $.ajax({
//       url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71e28e8e025cad00213c7c59444381a8`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         $('.showHumidity').append(`<li> ${city} humidity: ${response.main.humidity} %</li>`);
//         $('.showTemperature').append(`<li>tempurature (k): ${response.main.temp} </li> <br>`);
//       },
//       error: function() {
//         $('.errors').text("ERROR");
//       }
//     });
//   });
// });
