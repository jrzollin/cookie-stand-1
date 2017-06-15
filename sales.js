'use strict';

//Creating Each Store
var pike = new Store('1st and Pike', 'pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 'seaTac', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 'seaCenter', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 'capHill', 3, 24, 1.2);
var alki = new Store('Alki', 'alki', 3, 24, 1.2);

var patsStores = [pike, seaTac, seattleCenter, capitolHill, alki];

//function to set-up the one time table titles/scaffolding || the parameter (index) lets me pick which table I want to create later.
function tableScaffold(index){
  var hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

  //first I set up the table header row with proper titles
  var tableHeader = document.getElementsByClassName('table-hours')[index];
  var tableHeaderRow = document.createElement('tr');
  tableHeader.appendChild(tableHeaderRow);

  //created an empty <th> so first cell in thead row is empty for formatting
  tableHeaderRow.innerHTML += '<th> </th>';

  //properly labeling top row of tableHeaderRow
  for (var i = 0; i < hoursOpen.length; i++) {
    tableHeaderRow.innerHTML += '<th>' + hoursOpen[i] + '</th>';
  }

  //making last column title say Daily Allocation Total
  tableHeaderRow.innerHTML += '<th>Daily Total</th>';

  //now setting up the names of each store and giving them a class tag
  var tableBody = document.getElementsByClassName('table-body')[index];
  for (var i = 0; i < patsStores.length; i++) {
    var tableBodyRow = document.createElement('tr');
    tableBodyRow.setAttribute('class', patsStores[i].tag);
    tableBody.appendChild(tableBodyRow);
    tableBodyRow.innerHTML += '<th>' + patsStores[i].name + '</th>';
    //console.log(tableBodyRow);  //checking to see if everything showed up correctly
  };
};

//Making my Constructor Function
function Store (name, tag, minCust, maxCust, avgCookies){
  this.name = name;
  this.tag = tag;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyTotals = [], //set up an empty array so i can push the hourly totals to it later
  this.tossers = [], //just like above
  this.tossersTotal = 0, //just like below
  this.cookieTotal = 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. the value is changed later
  this.hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
};

Store.prototype.hourlyCookies = function(){
  var sum = 0; //create a variable to track the total cookie sum for the day that is used at the end of this function
  for(var i = 0; i < 14 ; i++){
    var randomNum = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    var totalCookies = Math.ceil(randomNum * this.avgCookies);
    //console.log('total cookies for hour' + i + ' is ' + totalCookies);
    sum += totalCookies;
    this.hourlyTotals.push(totalCookies);
  }
  this.cookieTotal = sum;
  //console.log(sum);
};

//stretch goal math
Store.prototype.cookieTossers = function(){
  for (var i = 0; i < this.hourlyTotals.length; i++) {
    var tossers = Math.ceil(this.hourlyTotals[i] / 2);
    if(tossers > 2){
      this.tossers.push(tossers);
      this.tossersTotal += tossers;
    } else {
      this.tossers.push(2);
      this.tossersTotal += tossers;
    }
  }
};

//Printing stuff to the DOM
Store.prototype.print = function(){
  //grab correct store's <tr> by id tag
  var tableRow = document.getElementsByClassName(this.tag)[0];
  //console.log(tableRow);

  //adding hourly totals
  for (var i = 0; i < this.hourlyTotals.length; i++) {
    tableRow.innerHTML += '<td>' + this.hourlyTotals[i] + '</td>';
  }
  //adding Total for each store
  tableRow.innerHTML += '<th>' + this.cookieTotal + '</th>';
};

//Printing Stretch Goal Table
Store.prototype.printTossers = function(){
  var tableRow = document.getElementsByClassName(this.tag)[1];

  for (var i = 0; i < this.tossers.length; i++) {
    tableRow.innerHTML += '<td>' + this.tossers[i] + '</td>';
  }

  tableRow.innerHTML += '<th>' + this.tossersTotal + '</th>';
};

//my helper function to run everything
Store.prototype.magic = function(){
  this.hourlyCookies();
  this.cookieTossers();
  this.print();
  this.printTossers();
};

// //WORK FOR STRETCH GOAL || SUM FOR EACH COLUMN TABLES
// //First the Stretch Goal Table
function hourlyCookieTotals(store){
  var totals = [];
  for (var i = 0; i < 14; i++){
    var hourTotal = totals[i];
    hourTotal = 0;
    for (var j = 0; j < patsStores.length; j++) {
      var num = patsStores[j].hourlyTotals[i];
      hourTotal += num;
    }
    totals[i] = hourTotal;
  }

  var tableBody = document.getElementsByClassName('table-body')[0];
  var totalsRow = document.createElement('tr');
  totalsRow.innerHTML += '<th> Hourly Total </th>';
  tableBody.appendChild(totalsRow);
  for (var i = 0; i < totals.length; i++) {
    totalsRow.innerHTML += '<th>' + totals[i] + '</th>';
  }
}

//caling table scaffold function | first time for regular table. second time for stretch goal table
tableScaffold(0);
tableScaffold(1);

//looping through my array of stores to make everything print to page
for (var i = 0; i < patsStores.length; i++) {
  patsStores[i].magic();
//  patsStores[i].hourlyTotalsTossers();
}
hourlyCookieTotals(patsStores);
