// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=106ed85f74e2ab147bdf97bdb04d0ba5
let city;
    document.getElementById("search").addEventListener("click",function () {
        city = document.getElementById("fillin").value;
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






                document.getElementById("day1").innerHTML = avgTempcalc(day1) + "&#8451";
                document.getElementById("day2").innerHTML = avgTempcalc(day2) + "&#8451";
                document.getElementById("day3").innerHTML = avgTempcalc(day3) + "&#8451";
                document.getElementById("day4").innerHTML = avgTempcalc(day4) + "&#8451";
                document.getElementById("day5").innerHTML = avgTempcalc(day5) + "&#8451";




                // console.log(avgTempcalc([1,2,3,4,5]));
                // console.log(tempArray);
                // console.log(disc1);
                // console.log(day2)
                let disc1 = discrip.slice(0,8);
                let disc2 = discrip.slice(8,16);
                let disc3 = discrip.slice(16,24);
                let disc4 = discrip.slice(24,32);
                let disc5 = discrip.slice(32,40);




                var allDescrip = [disc1, disc2, disc3, disc4, disc5];


                for (let i = 0; i <allDescrip[0].length; i++) {
                    // console.log(allDescrip);
                    // console.log(discrip)
                }
                // document.getElementById("search").addEventListener("click", function cycle() {
                //     for (let i = 0; i < 5 ; i++) {
                //         console.log(cycle(disc1,disc2,disc3,disc4,disc5))
                //     }
                // });


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

