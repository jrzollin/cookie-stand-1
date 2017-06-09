'use strict';

var pike = {
  minCust : 23,
  maxCust : 65,
  avgCookies : 6.3,
  hourlyTotals : [],
  //just declaring the cookieTotal below but it'll be updated when pike.hourlyCookies is called
  cookieTotal : 0,
};

pike.randomCust = function(){
  return Math.floor(Math.random() * (pike.maxCust - pike.minCust + 1)) + pike.minCust;
};

pike.hourlyCookies = function(){
  //create a variable to track the total cookie sum for the day
  var sum = 0;
  for(var i = 0; i < 16 ; i++){
    //store new random customer for each hour
    var customer = pike.randomCust();
    //console.log('random # of customers for hour ' + i + ' is ' + customers);
    var totalCookies = Math.ceil(customer * pike.avgCookies);
    //console.log('total cookies for hour' + i + ' is ' + totalCookies);
    sum += totalCookies;
    pike.hourlyTotals.push(totalCookies);
  }
  pike.cookieTotal = sum;
};

pike.hourlyCookies();
//console.log('Here are the hourly totals: ' + pike.hourlyTotals);
//console.log('Here is the sum for all the cookies in one day: ' + pike.cookieTotal);

var pikeList = document.getElementById('pike');
//console.log(pikeList);

//for 6am-11am
for(var i = 6; i < 12 ; i++){
  var hourTotal = document.createElement('li');
  hourTotal.textContent = i + 'am: ' + pike.hourlyTotals[i - 6] + ' cookies';
  pikeList.appendChild(hourTotal);
}
//for 12pm
var hourTotal = document.createElement('li');
hourTotal.textContent = '12pm: ' + pike.hourlyTotals[6] + ' cookies';
pikeList.appendChild(hourTotal);
// later when there is more check to see hasID="store name" - if so it matches then add all the LIs
