

function howOld()
{
    var age = document.getElementById("userAge").value;
    var year = document.getElementById("year").value;
    var currentYear = 2023;

    let numYears = Number (year) - Number (currentYear);
    let calAge = Number (age) + Number (numYears);
        
        //     console.log("age =" ,age);
        //     console.log( "year =  ",year);
        //     console.log( "Current year =  ",currentYear);
        //     console.log( "Current year - age =  ",currentYear -age );

        //   console.log ( "numYears = ", numYears);
        //   console.log("calAge =" ,calAge);

          

          if (year > currentYear && age != null && year != null) {
            
         document.getElementById("Display").innerHTML = `You will be ${calAge} in the year ${year}`;
          } else if (year < currentYear - age && age != 0 && year != 0 ) {
            document.getElementById("Display").innerHTML = `The year ${year} was ${currentYear - age - year} years before you were born`;
          } else if (year > currentYear - age && year <= currentYear || year == currentYear - age && age != 0 && year != 0 ) {
            document.getElementById("Display").innerHTML = `You were ${calAge} in the year ${year}`;
          } else if (age ==0 || year == 0 ) {
            document.getElementById("Display").innerHTML = 'Yo Need To Enter Values!';
          } else {
            document.getElementById("Display").innerHTML = 'Please insert a correct age and year!';
          }

          
}



// document.getElementById("myButton").onclick = function(age,year){

//     let currentYear = 2023;

//     age = document.getElementById("userAge").value;
//     year = document.getElementById("year").value;

//     console.log(age);


//      let numYears = year - currentYear;
//       let calAge = age + numYears;
    
//       if (year > currentYear) {
//         return `You will be ${calAge} in the year ${year}`;
//       } else if (year < currentYear - age) {
//         return `The year ${year} was ${currentYear - age - year} years before you were born`;
//       } else if (year > currentYear - age && year < currentYear || year == currentYear - age ) {
//         return `You were ${calAge} in the year ${year}`;
//       } else {
//         return 'Please insert a correct age and year!';
//       }
//     }












// let currentYear = 2023;






// function howOld(age, year) {
//   let numYears = year - currentYear;
//   let calAge = age + numYears;

//   if (year > currentYear) {
//     return `You will be ${calAge} in the year ${year}`;
//   } else if (year < currentYear - age) {
//     return `The year ${year} was ${currentYear - age - year} years before you were born`;
//   } else if (year > currentYear - age && year < currentYear || year == currentYear - age ) {
//     return `You were ${calAge} in the year ${year}`;
//   } else {
//     return 'Please insert a correct age and year!';
//   }
// }


// console.log(howOld(41,1985 ))
