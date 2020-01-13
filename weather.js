// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=106ed85f74e2ab147bdf97bdb04d0ba5
let city;
    document.getElementById("search").addEventListener("click",function () {
        city = document.getElementById("fillin").value;
        console.log(city);
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=106ed85f74e2ab147bdf97bdb04d0ba5`)

            .then((response => {
                return response.json();
            }))
            .then(data => {

                //Calculating avg temp
                let avgTempcalc = arr => Math.floor((arr.reduce((a,b) => a + b , 0 ) / arr.length));

                //empty array
                let tempArray = [];
                let discrip  =[];

                for (let i = 0; i < 40 ; i++) {
                tempArray.push(data.list[i].main.temp);
                discrip.push(data.list[i].weather[0].description)
                }

                let day1 = tempArray.slice(0,8);
                let day2 = tempArray.slice(8,16);
                let day3 = tempArray.slice(16,24);
                let day4 = tempArray.slice(24,32);
                let day5 = tempArray.slice(32,40);

                let disc1 = discrip.slice(0,8);
                let disc1 = discrip.slice(8,16);
                let disc1 = discrip.slice(16,24);
                let disc1 = discrip.slice(24,32);
                let disc1 = discrip.slice(32,40);

                document.getElementById("day1").innerHTML = avgTempcalc(day1);
                document.getElementById("day2").innerHTML = avgTempcalc(day2);
                document.getElementById("day3").innerHTML = avgTempcalc(day3);
                document.getElementById("day4").innerHTML = avgTempcalc(day4);
                document.getElementById("day5").innerHTML = avgTempcalc(day5);

                console.log(avgTempcalc([1,2,3,4,5]));
                console.log(tempArray);
                console.log(disc1);
                console.log(day1)
              // console.log(data);
              // console.log(data.list[0].main.temp)
            })
    });

// for (let i = 0; i < 8; i++) {
//
//     let avgTemp = data.list[i].main.temp;
//     console.log(avgTemp);
//
//     let avg = Math.mean(avgTemp)
//
//     console.log(avg)
//
//
//     // let total = 0
//     // let total = data
// }