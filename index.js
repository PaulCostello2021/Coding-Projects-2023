




function tipCalculator () {

    var price = document.getElementById("mealPrice").value;
    var quality = document.getElementById("serviceRating").value;

    if (quality == 'Bad') {
        let total = +price +  (5/100 * +price);
        let tip = 5/100* +price;
        console.log(total);
        console.log(quality);
        console.log(tip);

        document.getElementById("mealCost").innerHTML = price;
        document.getElementById("mealService").innerHTML = quality;
        document.getElementById('mealTip').innerHTML = tip;
        document.getElementById('totalMeal').innerHTML = total;

        

    } else if (quality == 'Ok') {
        let total = +price +  (15/100 * +price);
        let tip = 15/100* +price;
        console.log(total);
        console.log(quality);
        console.log(tip);

        document.getElementById("mealCost").innerHTML = price;
        document.getElementById("mealService").innerHTML = quality;
        document.getElementById('mealTip').innerHTML = tip;
        document.getElementById('totalMeal').innerHTML = total;
    } else  if (quality == 'Good') {
        let total = +price +  (20/100 * +price);
        let tip = 20/100* +price;
        console.log(total);
        console.log(quality);
        console.log(tip);

        document.getElementById("mealCost").innerHTML = price;
        document.getElementById("mealService").innerHTML = quality;
        document.getElementById('mealTip').innerHTML = tip;
        document.getElementById('totalMeal').innerHTML = total;
    } else if (quality == 'Excellent') {
        let total = +price +  (30/100 * +price);
        let tip = 30/100* +price;
        console.log(total);
        console.log(quality);
        console.log(tip);

        document.getElementById("mealCost").innerHTML = price;
        document.getElementById("mealService").innerHTML = quality;
        document.getElementById('mealTip').innerHTML = tip;
        document.getElementById('totalMeal').innerHTML = total;
    } else {
        let total = +price +  (18/100 * +price);
        let tip = 18/100* +price;
        console.log(total);
        console.log(quality);
        console.log(tip);

        document.getElementById("mealCost").innerHTML = price;
        document.getElementById("mealService").innerHTML = quality;
        document.getElementById('mealTip').innerHTML = tip;
        document.getElementById('totalMeal').innerHTML = total;
    } ;

    
    
    
   
}