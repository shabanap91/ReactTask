// function showWeatherData(data2) {
//   // let {wind_speed,wind, feels_like,wind_deg} = data2.current.weather;
//   // let {description,timezone, main, icon} = data2.current.weather[0];
//   // let {day, night} = data2.daily[0].temp;


//   // parseFloat(temp-273.15).toFixed(2)+"°C" + "&nbsp;";
//   let temp = data2.current.temp
//   // let wind1=data2.current.weather.wind_speed
//   document.getElementById('desc').innerHTML = data2.current.weather[0].description
//   document.getElementById('temprature').innerHTML = parseFloat(temp - 273.15).toFixed(2) + "°C" + "&nbsp;";
//   document.getElementById('wind1').innerHTML = data2.current.wind_speed


// }

var getTemp = []
getWeatherData();
function getWeatherData() {
  const API_KEY2 = "14785f3a93d0496482740f11ebbaeab2"
  // const API_KEY = "5c95610e4c9f66092d6add5ebc310bb3"
  // const API_KEY3 = "3ea83149801695ef94137043b03ce0ca"

  //====================API call for current weather data with current location=======================================

  var latitude = 37.5683;
  var longitude = 126.9778;
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY2}`
  )
    .then((result) => result.json())
    .then((data) => {
      console.log("first", data)
      getTemp = data
      showWeatherData(data);
      chartData(data)

    });
  function showWeatherData(data) {
  }




  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=india,asia,&mode=json&appid=3ea83149801695ef94137043b03ce0ca`
  )
    .then((result) => result.json())
    .then((dataone) => {
      console.log("live location", dataone)
      showWeatherData11(dataone);
    });
  function showWeatherData11(dataone) {
    // document.getElementById('city').innerHTML = ": "+dataone.city.name
    document.getElementById('desc').innerHTML = ": " + dataone.list[0].weather[0].description
    document.getElementById('wind1').innerHTML = dataone.list[0].wind.speed + "mph"
    document.getElementById('tmpature').innerHTML = "  " + dataone.list[0].main.feels_like
  }


  // var a= data; // global

  // function GlobalVar() {

  //   console.log("global",a);
  // }
  // first city 
  // data3=[]
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=New%20YORK,us&mode=json&appid=3ea83149801695ef94137043b03ce0ca`
  )
    .then((res2) => res2.json())
    .then((data3) => {
      console.log("data3...", data3)
      // chartData(data3)

      showWeatherData1(data3)
    });

  function showWeatherData1(data3) {
    let tempData = data3.list[0].main.temp
    // data3=[data3.list[0].dt]
    // document.getElementById('city1').innerHTML = data3.list[0].dt
    document.getElementById('city1').innerHTML = data3.city.name
    document.getElementById('temp1').innerHTML = parseFloat(tempData - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // high temp
    let maxdata = data3.list[0].main.temp_max
    document.getElementById('highj').innerHTML = "high" + " " + parseFloat(maxdata - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // min temp
    let mindata = data3.list[0].main.temp_min
    document.getElementById('minj').innerHTML = "low" + " " + parseFloat(mindata - 273.15).toFixed(2) + "°C" + "&nbsp;";

  }

  // second city 
  fetch(
    // `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY2}`

    `https://api.openweathermap.org/data/2.5/forecast?q=delhi,india&mode=json&appid=3ea83149801695ef94137043b03ce0ca`
  )
    .then((res3) => res3.json())
    .then((data4) => {
      console.log("data34...................................", data4)
      showWeatherData2(data4)
      getTemp = data4
      // chartData(data4)
    });

  function showWeatherData2(data4) {
    let tempDat = data4.list[0].main.temp
    document.getElementById('current-temp').innerHTML = parseFloat(tempDat - 273.15).toFixed(2) + "°C" + "&nbsp;"
    document.getElementById('city').innerHTML = ": " + data4.city.name
    document.getElementById('city11').innerHTML = data4.city.country + " -"
    document.getElementById('temp11').innerHTML = parseFloat(tempDat - 273.15).toFixed(2) + "°C" + "&nbsp;";
    document.getElementById('temp2').innerHTML = parseFloat(tempDat - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // document.getElementById('mintemp').innerHTML = ;
    let mindata1 = data4.list[0].main.temp_min
    document.getElementById('mintemp').innerHTML = "min" + " " + parseFloat(mindata1 - 273.15).toFixed(2) + "°C" + "&nbsp;";
    // high 
    let maxdata2 = data4.list[0].main.temp_max
    document.getElementById('maxtemp').innerHTML = "high " + parseFloat(maxdata2 - 273.15).toFixed(2) + "°C";

    document.getElementById('city-input').innerHTML = data4.city;

    // high temp
    let maxdata = data4.list[0].main.temp_max
    document.getElementById('high1').innerHTML = "high" + " " + parseFloat(maxdata - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // min temp
    let mindata = data4.list[0].main.temp_min
    document.getElementById('low1').innerHTML = "low" + " " + parseFloat(mindata - 273.15).toFixed(2) + "°C" + "&nbsp;";

  }
  // third city 
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=london,uk&mode=json&appid=3ea83149801695ef94137043b03ce0ca`
  )
    .then((res4) => res4.json())
    .then((data5) => {
      console.log("data5...", data5)
      showWeatherData3(data5)
      // chartData(data5)
    });

  function showWeatherData3(data5) {
    let tempDa = data5.list[0].main.temp
    document.getElementById('city3').innerHTML = data5.city.name
    document.getElementById('temp3').innerHTML = parseFloat(tempDa - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // high temp
    let maxdata = data5.list[0].main.temp_max
    document.getElementById('high2').innerHTML = "high" + " " + parseFloat(maxdata - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // min temp
    let mindata = data5.list[0].main.temp_min
    document.getElementById('low2').innerHTML = "low" + " " + parseFloat(mindata - 273.15).toFixed(2) + "°C" + "&nbsp;";

  }
  // fourth city 
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=San%20francisco&mode=json&appid=3ea83149801695ef94137043b03ce0ca
  `
  )
    .then((res5) => res5.json())
    .then((data6) => {
      console.log("data6...", data6)
      showWeatherData4(data6)
      // chartData(data6)
    });

  function showWeatherData4(data6) {


    console.log(data6.city.name, "name")
    let tempD = data6.list[0].main.temp
    document.getElementById('city4').innerHTML = data6.city.name
    document.getElementById('temp4').innerHTML = parseFloat(tempD - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // high temp
    let maxdata = data6.list[0].main.temp_max
    document.getElementById('high3').innerHTML = "high" + " " + parseFloat(maxdata - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // min temp
    let mindata = data6.list[0].main.temp_min
    document.getElementById('low3').innerHTML = "low" + " " + parseFloat(mindata - 273.15).toFixed(2) + "°C" + "&nbsp;";

  }
  // fifth city 
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=North%20Dakota&mode=json&appid=3ea83149801695ef94137043b03ce0ca`
  )
    .then((res6) => res6.json())
    .then((data7) => {
      console.log("data6...", data7)
      showWeatherData5(data7)
      // chartData(data7)
    });

  function showWeatherData5(data7) {
    let tempf = data7.list[0].main.temp
    document.getElementById('city5').innerHTML = data7.city.name
    document.getElementById('temp5').innerHTML = parseFloat(tempf - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // high temp
    let maxdata = data7.list[0].main.temp_max
    document.getElementById('high4').innerHTML = "high" + " " + parseFloat(maxdata - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // min temp
    let mindata = data7.list[0].main.temp_min
    document.getElementById('low4').innerHTML = "low" + " " + parseFloat(mindata - 273.15).toFixed(2) + "°C" + "&nbsp;";

  }
  // sixth city 
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=dubai,&mode=json&appid=3ea83149801695ef94137043b03ce0ca`
  )
    .then((res7) => res7.json())
    .then((data8) => {
      console.log("data8...", data8)
      showWeatherData6(data8)
      // chartData(data8)
    });

  function showWeatherData6(data8) {
    let tempg = data8.list[0].main.temp
    document.getElementById('city6').innerHTML = data8.city.name
    document.getElementById('temp6').innerHTML = parseFloat(tempg - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // high temp
    let maxdata = data8.list[0].main.temp_max
    document.getElementById('high5').innerHTML = "high" + " " + parseFloat(maxdata - 273.15).toFixed(2) + "°C" + "&nbsp;";

    // min temp
    let mindata = data8.list[0].main.temp_min
    document.getElementById('low5').innerHTML = "low" + " " + parseFloat(mindata - 273.15).toFixed(2) + "°C" + "&nbsp;";

  }
}










function getDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = '0' + month;
  }
  if (day.toString().length == 1) {
    day = '0' + day;
  }
  if (hour.toString().length == 1) {
    hour = '0' + hour;
  }
  if (minute.toString().length == 1) {
    minute = '0' + minute;
  }
  if (second.toString().length == 1) {
    second = '0' + second;
  }
  var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
  return dateTime;
}

// // example usage: realtime clock
// setInterval(function () {
//   currentTime = getDateTime();
//   document.getElementById("digital-clock")?.innerHTML = currentTime;
//   // document.getElementById("digital-clock1").innerHTML = currentTime;



// }, 1000);

// // temp .................. 

// if(main == 'Thunderstorm'){
//   document.getElementById("myVideo").innerHTML = '<source src="video/sunshine.mp4" type="video/mp4" />'
//   // document.getElementById("short-icon").src = "images/ion-small-storm-icon.png";
// }



// time date without API calling 

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const years=["2020","2021","2022","2023","2024"]


setInterval(() => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormate = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM'

  document.getElementById("timeEl").innerHTML = (hoursIn12HrFormate < 10 ? '0' + hoursIn12HrFormate : hoursIn12HrFormate) + ":" + (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds) + `<span id="am-pm">${ampm}</span>`
//   document.getElementById("dateEl").innerHTML = days[day] + ", " + date + " " + months[month] + " " + year

}, 1000);

// utc clock js func................. 

setInterval(() => {
  d = new Date();
  stime = d.getSeconds();
  mtime = d.getMinutes();
  htime = d.getHours();

  srotation = 6 * stime;
  mrotation = 6 * mtime;
  hrotation = 30 * htime + mtime / 2;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;

})


// ***********RKS*************

let constructedDate = [];
let constructedTime = [];
let constructedMaxTemp = [];
let constructedMinTemp = [];
let constructedEve = [];
let constructedMor = [];

function chartData(data) {
  // const dateArray = []
  // const tempArray = []
  console.log(data, "Our API data is comming inside The ///data///")
  data.daily.map((a, i) => {

    var dateFormat = new Date(a.dt);
    let NewDate = new Date(dateFormat * 1000)
    var timeFormat = new Date(a.dt);
    let NewTime = new Date(timeFormat * 1000)

    console.log(NewTime.toTimeString())
    console.log(NewDate.toDateString())

    const aDate = NewDate.getDate()
    const aMonth = NewDate.getMonth() + 1;
    const aYear = NewDate.getFullYear();
    const aHours = NewTime.getHours();
    const aMinuts = NewTime.getMinutes();
    const aSeconds = NewTime.getSeconds();

    constructedDate.push(aDate + "/" + aMonth + "/" + aYear)
    constructedTime.push(aHours + ":" + aMinuts + ":" + aSeconds)

    let tempMax = (a.temp.max - 273.15).toFixed(2);
    let tempMin = (a.temp.min - 273.15).toFixed(2);
    let tempDay = (a.temp.day - 273.15).toFixed(2);
    let tempNight = (a.temp.night - 273.15).toFixed(2);
    let tempEve = (a.temp.eve - 273.15).toFixed(2);
    let tempMorn = (a.temp.morn - 273.15).toFixed(2);

    constructedMaxTemp.push(tempMax)
    constructedMinTemp.push(tempMin)
    constructedTime.push(tempNight)
    constructedDate.push(tempDay)
    constructedEve.push(tempEve)
    constructedMor.push(tempMorn)
    
    // console.log(tempNight)


  })


  console.log(constructedDate, "constructedDate")
  console.log(constructedTime, "constructedTime")
  console.log(constructedMaxTemp, "constructedMaxTemp")
  console.log(constructedMinTemp, "constructedMinTemp")
  console.log(constructedEve, "ConstructedEve")
  console.log(constructedMor, "ConstrutedMor..")


  var xAxixValues = constructedDate;
  var yAxixValues = constructedMaxTemp;

  var xValues = constructedTime;
  var yValues = constructedMinTemp;

  // var xValues = [12,33,3,10,17,19,20];
  // var yValues = [17,19,20,12,33,3,10];

  new Chart("myChart", {
    type: "line",
    data: {
      labels: xAxixValues,
      labels: yValues,
      datasets: [{
        borderColor: "white",
        data: yAxixValues,
      },
      {
        borderColor: "Yellow",
        data: constructedMinTemp,
      }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

  });
  // **********RKS*************
  // var xValues = xAxixValues
  // var yValues = yAxixValues
   var xValues = constructedEve
  var yValues = constructedMor
  new Chart("myChart1", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        borderColor: "white",
        data: yValues
      }]
    },
    options: {
    }
  });
}


// weather 

// let inputval = document.querySelector('#cityinput')
// var btn = document.querySelector('#add')
// var city = document.querySelector('#cityoutput')
// var temp11 = document.querySelector('#temp11')
// var wind11 = document.querySelector('#wind11')
// var discrip = document.querySelector('#disc')

// const API_KEY = "3ea83149801695ef94137043b03ce0ca"

// btn.addEventListener('click',(e) => {
//   fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + inputval.value + "&appid="+API_KEY)
//   .then((ress) => ress.json())
//   .then((dataa) => {
//     console.log("wether data.................",dataa)
//   })
// })