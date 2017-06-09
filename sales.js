'use strict';

var pike = {
  locationName: '1st and Pike',
  tag: 'pike', //this property is used later when using setAttribute
  minCust : 23,
  maxCust : 65,
  avgCookies : 6.3,
  hourlyTotals : [], //set up an empty array so i can push the hourly totals to it later
  cookieTotal : 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. th value is changed later
};

pike.randomCust = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

pike.hourlyCookies = function(){
  var sum = 0; //create a variable to track the total cookie sum for the day that is used at the end of this function
  for(var i = 0; i < 15 ; i++){
    var customer = this.randomCust(); //store new random customer for each hour
    //console.log('random # of customers for hour ' + i + ' is ' + customer);
    var totalCookies = Math.ceil(customer * this.avgCookies);
    //console.log('total cookies for hour' + i + ' is ' + totalCookies);
    sum += totalCookies;
    this.hourlyTotals.push(totalCookies);
  }
  this.cookieTotal = sum;
  //console.log(sum);
};

pike.hourlyCookies();
//console.log('Here are the hourly totals: ' + pike.hourlyTotals);
//console.log('Here is the sum for all the cookies in one day: ' + pike.cookieTotal);

//DOM that shtuff to HTML
pike.print = function(){
  var storeName = document.createElement('p');
  storeName.innerHTML = this.locationName;
  document.body.appendChild(storeName);
  var storeList = document.createElement('ul');
  storeList.setAttribute('id',this.tag);
  document.body.appendChild(storeList);
  //console.log(storeList);
  //for 6am-11am
  for(var i = 6; i < 12 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'am: ' + this.hourlyTotals[i - 6] + ' cookies';
    //console.log(hourTotal.textContent);
    storeList.appendChild(hourTotal);
  }
  //for 12pm
  var hourTotal = document.createElement('li');
  hourTotal.textContent = '12pm: ' + this.hourlyTotals[6] + ' cookies';
  storeList.appendChild(hourTotal);
  //for 1pm-6pm
  for(var i = 1; i < 9 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'pm: ' + this.hourlyTotals[i + 6] + ' cookies';
    storeList.appendChild(hourTotal);
  }
  //for the Total
  var hourTotal = document.createElement('li');
  hourTotal.textContent = 'Total: ' + this.cookieTotal + ' cookies';
  storeList.appendChild(hourTotal);
};
//Print Da Stuff
pike.print();

//************** NEXT STORE ***************//

var seaTac = {
  locationName: 'SeaTac Airport',
  tag: 'seaTac', //this property is used later when using setAttribute
  minCust : 3,
  maxCust : 24,
  avgCookies : 1.2,
  hourlyTotals : [], //set up an empty array so i can push the hourly totals to it later
  cookieTotal : 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. th value is changed later
};

seaTac.randomCust = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

seaTac.hourlyCookies = function(){
  var sum = 0; //create a variable to track the total cookie sum for the day that is used at the end of this function
  for(var i = 0; i < 15 ; i++){
    var customer = this.randomCust(); //store new random customer for each hour
    //console.log('random # of customers for hour ' + i + ' is ' + customer);
    var totalCookies = Math.ceil(customer * this.avgCookies);
    //console.log('total cookies for hour' + i + ' is ' + totalCookies);
    sum += totalCookies;
    this.hourlyTotals.push(totalCookies);
  }
  this.cookieTotal = sum;
  //console.log(sum);
};

seaTac.hourlyCookies();
//console.log('Here are the hourly totals: ' + seaTac.hourlyTotals);
//console.log('Here is the sum for all the cookies in one day: ' + seaTac.cookieTotal);

//DOM that shtuff to HTML
seaTac.print = function(){
  var storeName = document.createElement('p');
  storeName.innerHTML = this.locationName;
  document.body.appendChild(storeName);
  var storeList = document.createElement('ul');
  storeList.setAttribute('id',this.tag);
  document.body.appendChild(storeList);
  //console.log(storeList);
  //for 6am-11am
  for(var i = 6; i < 12 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'am: ' + this.hourlyTotals[i - 6] + ' cookies';
    //console.log(hourTotal.textContent);
    storeList.appendChild(hourTotal);
  }
  //for 12pm
  var hourTotal = document.createElement('li');
  hourTotal.textContent = '12pm: ' + this.hourlyTotals[6] + ' cookies';
  storeList.appendChild(hourTotal);
  //for 1pm-6pm
  for(var i = 1; i < 9 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'pm: ' + this.hourlyTotals[i + 6] + ' cookies';
    storeList.appendChild(hourTotal);
  }
  //for the Total
  var hourTotal = document.createElement('li');
  hourTotal.textContent = 'Total: ' + this.cookieTotal + ' cookies';
  storeList.appendChild(hourTotal);
};
//Print Da Stuff
seaTac.print();

//************** NEXT STORE ***************//

var seattleCenter = {
  locationName: 'Seattle Center',
  tag: 'seaCenter', //this property is used later when using setAttribute
  minCust : 11,
  maxCust : 38,
  avgCookies : 3.7,
  hourlyTotals : [], //set up an empty array so i can push the hourly totals to it later
  cookieTotal : 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. th value is changed later
};

seattleCenter.randomCust = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

seattleCenter.hourlyCookies = function(){
  var sum = 0; //create a variable to track the total cookie sum for the day that is used at the end of this function
  for(var i = 0; i < 15 ; i++){
    var customer = this.randomCust(); //store new random customer for each hour
    //console.log('random # of customers for hour ' + i + ' is ' + customer);
    var totalCookies = Math.ceil(customer * this.avgCookies);
    //console.log('total cookies for hour' + i + ' is ' + totalCookies);
    sum += totalCookies;
    this.hourlyTotals.push(totalCookies);
  }
  this.cookieTotal = sum;
  //console.log(sum);
};

seattleCenter.hourlyCookies();
//console.log('Here are the hourly totals: ' + seattleCenter.hourlyTotals);
//console.log('Here is the sum for all the cookies in one day: ' + seattleCenter.cookieTotal);

//DOM that shtuff to HTML
seattleCenter.print = function(){
  var storeName = document.createElement('p');
  storeName.innerHTML = this.locationName;
  document.body.appendChild(storeName);
  var storeList = document.createElement('ul');
  storeList.setAttribute('id',this.tag);
  document.body.appendChild(storeList);
  //console.log(storeList);
  //for 6am-11am
  for(var i = 6; i < 12 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'am: ' + this.hourlyTotals[i - 6] + ' cookies';
    //console.log(hourTotal.textContent);
    storeList.appendChild(hourTotal);
  }
  //for 12pm
  var hourTotal = document.createElement('li');
  hourTotal.textContent = '12pm: ' + this.hourlyTotals[6] + ' cookies';
  storeList.appendChild(hourTotal);
  //for 1pm-6pm
  for(var i = 1; i < 9 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'pm: ' + this.hourlyTotals[i + 6] + ' cookies';
    storeList.appendChild(hourTotal);
  }
  //for the Total
  var hourTotal = document.createElement('li');
  hourTotal.textContent = 'Total: ' + this.cookieTotal + ' cookies';
  storeList.appendChild(hourTotal);
};
//Print Da Stuff
seattleCenter.print();

//************** NEXT STORE ***************//

var capitolHill = {
  locationName: 'Capitol Hill',
  tag: 'capHill', //this property is used later when using setAttribute
  minCust : 3,
  maxCust : 24,
  avgCookies : 1.2,
  hourlyTotals : [], //set up an empty array so i can push the hourly totals to it later
  cookieTotal : 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. th value is changed later
};

capitolHill.randomCust = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

capitolHill.hourlyCookies = function(){
  var sum = 0; //create a variable to track the total cookie sum for the day that is used at the end of this function
  for(var i = 0; i < 15 ; i++){
    var customer = this.randomCust(); //store new random customer for each hour
    //console.log('random # of customers for hour ' + i + ' is ' + customer);
    var totalCookies = Math.ceil(customer * this.avgCookies);
    //console.log('total cookies for hour' + i + ' is ' + totalCookies);
    sum += totalCookies;
    this.hourlyTotals.push(totalCookies);
  }
  this.cookieTotal = sum;
  //console.log(sum);
};

capitolHill.hourlyCookies();
//console.log('Here are the hourly totals: ' + capitolHill.hourlyTotals);
//console.log('Here is the sum for all the cookies in one day: ' + capitolHill.cookieTotal);

//DOM that shtuff to HTML
capitolHill.print = function(){
  var storeName = document.createElement('p');
  storeName.innerHTML = this.locationName;
  document.body.appendChild(storeName);
  var storeList = document.createElement('ul');
  storeList.setAttribute('id',this.tag);
  document.body.appendChild(storeList);
  //console.log(storeList);
  //for 6am-11am
  for(var i = 6; i < 12 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'am: ' + this.hourlyTotals[i - 6] + ' cookies';
    //console.log(hourTotal.textContent);
    storeList.appendChild(hourTotal);
  }
  //for 12pm
  var hourTotal = document.createElement('li');
  hourTotal.textContent = '12pm: ' + this.hourlyTotals[6] + ' cookies';
  storeList.appendChild(hourTotal);
  //for 1pm-6pm
  for(var i = 1; i < 9 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'pm: ' + this.hourlyTotals[i + 6] + ' cookies';
    storeList.appendChild(hourTotal);
  }
  //for the Total
  var hourTotal = document.createElement('li');
  hourTotal.textContent = 'Total: ' + this.cookieTotal + ' cookies';
  storeList.appendChild(hourTotal);
};
//Print Da Stuff
capitolHill.print();

//************** NEXT STORE ***************//

var alki = {
  locationName: 'Alki',
  tag: 'alki', //this property is used later when using setAttribute
  minCust : 3,
  maxCust : 24,
  avgCookies : 1.2,
  hourlyTotals : [], //set up an empty array so i can push the hourly totals to it later
  cookieTotal : 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. th value is changed later
};

alki.randomCust = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

alki.hourlyCookies = function(){
  var sum = 0; //create a variable to track the total cookie sum for the day that is used at the end of this function
  for(var i = 0; i < 15 ; i++){
    var customer = this.randomCust(); //store new random customer for each hour
    //console.log('random # of customers for hour ' + i + ' is ' + customer);
    var totalCookies = Math.ceil(customer * this.avgCookies);
    //console.log('total cookies for hour' + i + ' is ' + totalCookies);
    sum += totalCookies;
    this.hourlyTotals.push(totalCookies);
  }
  this.cookieTotal = sum;
  //console.log(sum);
};

alki.hourlyCookies();
//console.log('Here are the hourly totals: ' + alki.hourlyTotals);
//console.log('Here is the sum for all the cookies in one day: ' + alki.cookieTotal);

//DOM that shtuff to HTML
alki.print = function(){
  var storeName = document.createElement('p');
  storeName.innerHTML = this.locationName;
  document.body.appendChild(storeName);
  var storeList = document.createElement('ul');
  storeList.setAttribute('id',this.tag);
  document.body.appendChild(storeList);
  //console.log(storeList);
  //for 6am-11am
  for(var i = 6; i < 12 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'am: ' + this.hourlyTotals[i - 6] + ' cookies';
    //console.log(hourTotal.textContent);
    storeList.appendChild(hourTotal);
  }
  //for 12pm
  var hourTotal = document.createElement('li');
  hourTotal.textContent = '12pm: ' + this.hourlyTotals[6] + ' cookies';
  storeList.appendChild(hourTotal);
  //for 1pm-6pm
  for(var i = 1; i < 9 ; i++){
    var hourTotal = document.createElement('li');
    hourTotal.textContent = i + 'pm: ' + this.hourlyTotals[i + 6] + ' cookies';
    storeList.appendChild(hourTotal);
  }
  //for the Total
  var hourTotal = document.createElement('li');
  hourTotal.textContent = 'Total: ' + this.cookieTotal + ' cookies';
  storeList.appendChild(hourTotal);
};
//Print Da Stuff
alki.print();
