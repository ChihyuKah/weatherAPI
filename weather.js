// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=106ed85f74e2ab147bdf97bdb04d0ba5
let city;
    document.getElementById("search").addEventListener("click",function () {
        city = document.getElementById("fillin").value;

        //fetching data from the API
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
                let minTemp = [];
                let maxTemp = [];


                //getting the information from the Data
                for (let i = 0; i < 40 ; i++) {
                tempArray.push(data.list[i].main.temp);
                minTemp.push(data.list[i].main.temp_min);
                maxTemp.push(data.list[i].main.temp_max);
                discrip.push(data.list[i].weather[0].description)
                }

                // getting the values of the minimum temp
                let min1 = minTemp.slice(0,8);
                let min2 = minTemp.slice(8,16);
                let min3 = minTemp.slice(16,24);
                let min4 = minTemp.slice(24,32);
                let min5 = minTemp.slice(32,40);

                // getting the values of the maximum temp
                let max1 = maxTemp.slice(0,8);
                let max2 = maxTemp.slice(8,16);
                let max3 = maxTemp.slice(16,24);
                let max4 = maxTemp.slice(24,32);
                let max5 = maxTemp.slice(32,40);

                //getting the values of the normal temp
                let day1 = tempArray.slice(0,8);
                let day2 = tempArray.slice(8,16);
                let day3 = tempArray.slice(16,24);
                let day4 = tempArray.slice(24,32);
                let day5 = tempArray.slice(32,40);


                //pushing everything to HTML
                document.getElementById("mintemp1").innerHTML = "Warmest Temp" + " " + avgTempcalc(min1) + "&#8451";
                document.getElementById("mintemp2").innerHTML = "Warmest Temp" + " " + avgTempcalc(min1) + "&#8451";
                document.getElementById("mintemp3").innerHTML = "Warmest Temp" + " " + avgTempcalc(min1) + "&#8451";
                document.getElementById("mintemp4").innerHTML = "Warmest Temp" + " " + avgTempcalc(min1) + "&#8451";
                document.getElementById("mintemp5").innerHTML = "Warmest Temp" + " " + avgTempcalc(min1) + "&#8451";

                document.getElementById("maxtemp1").innerHTML = "Coldest Temp" + " " + avgTempcalc(max1) + "&#8451";
                document.getElementById("maxtemp2").innerHTML = "Coldest Temp" + " " + avgTempcalc(max2) + "&#8451";
                document.getElementById("maxtemp3").innerHTML = "Coldest Temp" + " " + avgTempcalc(max3) + "&#8451";
                document.getElementById("maxtemp4").innerHTML = "Coldest Temp" + " " + avgTempcalc(max4) + "&#8451";
                document.getElementById("maxtemp5").innerHTML = "Coldest Temp" + " " + avgTempcalc(max5) + "&#8451";

                document.getElementById("day1").innerHTML = avgTempcalc(day1) + "&#8451";
                document.getElementById("day2").innerHTML = avgTempcalc(day2) + "&#8451";
                document.getElementById("day3").innerHTML = avgTempcalc(day3) + "&#8451";
                document.getElementById("day4").innerHTML = avgTempcalc(day4) + "&#8451";
                document.getElementById("day5").innerHTML = avgTempcalc(day5) + "&#8451";



                //Descriptions of the weather days
                let disc1 = discrip.slice(0,8);
                let disc2 = discrip.slice(8,16);
                let disc3 = discrip.slice(16,24);
                let disc4 = discrip.slice(24,32);
                let disc5 = discrip.slice(32,40);


                let counts = {};
                let compare = 0;
                let mostFrequent;
                function frequency(array){
                    for(let i = 0, len = array.length; i < len; i++){
                        let word = array[i];

                        if(counts[word] === undefined){
                            counts[word] = 1;
                        }else{
                            counts[word] = counts[word] + 1;
                        }
                        if(counts[word] > compare){
                            compare = counts[word];
                            mostFrequent = array[i];
                        }
                    }
                    return mostFrequent;
                }


                document.getElementById("descrip1").innerHTML = frequency(disc1);
                document.getElementById("descrip2").innerHTML = frequency(disc2);
                document.getElementById("descrip3").innerHTML = frequency(disc3);
                document.getElementById("descrip4").innerHTML = frequency(disc4);
                document.getElementById("descrip5").innerHTML = frequency(disc5);



            })


    });

