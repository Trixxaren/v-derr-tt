fetch("https://api.open-meteo.com/v1/forecast?latitude=59.3294&longitude=18.0687&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&models=icon_seamless")
.then(response => response.json())
.then(data => {
    var apidata = data
    console.log('2m_max arr: ', apidata.daily.temperature_2m_max)
    document.getElementById("current1").innerText = apidata.daily.temperature_2m_max[1]
    document.getElementById("current2").innerText = apidata.daily.temperature_2m_max[2]
    document.getElementById("current3").innerText = apidata.daily.temperature_2m_max[3]
    document.getElementById("current4").innerText = apidata.daily.temperature_2m_max[4]
    document.getElementById("current5").innerText = apidata.daily.temperature_2m_max[5]
    
    document.getElementById("min1").innerText = apidata.daily.temperature_2m_min[1]
    document.getElementById("min2").innerText = apidata.daily.temperature_2m_min[2]
    document.getElementById("min3").innerText = apidata.daily.temperature_2m_min[3]
    document.getElementById("min4").innerText = apidata.daily.temperature_2m_min[4]
    document.getElementById("min5").innerText = apidata.daily.temperature_2m_min[5]

    document.getElementById("wind").innerText = apidata.current.wind_speed_10m
    document.getElementById("wind1").innerText = apidata.current.wind_speed_10m
    document.getElementById("wind2").innerText = apidata.current.wind_speed_10m
    document.getElementById("wind3").innerText = apidata.current.wind_speed_10m
    document.getElementById("wind4").innerText = apidata.current.wind_speed_10m
    
    document.getElementById("time").innerText = apidata.daily.time[1]
    document.getElementById("time1").innerText = apidata.daily.time[2]
    document.getElementById("time2").innerText = apidata.daily.time[3]
    document.getElementById("time3").innerText = apidata.daily.time[4]
    document.getElementById("time4").innerText = apidata.daily.time[5]
    console.log(apidata)
})



const klocka = new Date();
document.getElementById("klocka").innerHTML = klocka;
