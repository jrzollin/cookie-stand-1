'use strict';

//Creating Each Store
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 3, 24, 1.2);
var alki = new Store('Alki', 3, 24, 1.2);

var patsStores = [pike, seaTac, seattleCenter, capitolHill, alki];

//caling table scaffold function | first time for regular table. second time for stretch goal table
tableScaffold(0);
tableScaffold(1);
//looping through my array of stores to make everything print to page
for (var i = 0; i < patsStores.length; i++) {
  patsStores[i].magic();
}

//function to set-up the one time table titles/scaffolding || the parameter (index) lets me pick which table I want to create later.
function tableScaffold(index){
  //created array below so I can set-up headings of table
  var hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

  //first I set up the table header row with proper titles
  var tableHeader = document.getElementsByClassName('table-hours')[index];
  var tableHeaderRow = document.createElement('tr');
  tableHeader.appendChild(tableHeaderRow);

  //created an empty <th> so first cell in thead row is empty for formatting
  var thPlaceHolder = document.createElement('th');
  thPlaceHolder.textContent = '';
  tableHeaderRow.appendChild(thPlaceHolder);
  // tableHeaderRow.innerHTML = '<th></th>';

  //properly labeling top row of tableHeaderRow
  for (var i = 0; i < hoursOpen.length; i++) {
    var tableTitle = document.createElement('th');
    tableTitle.textContent = hoursOpen[i];
    tableHeaderRow.appendChild(tableTitle);
  }

  //making last column title say Daily Allocation Total
  var thTotal = document.createElement('th');
  thTotal.textContent = 'Daily Allocation Total';
  tableHeaderRow.appendChild(thTotal);
};

//Making my Constructor Function
function Store (name, minCust, maxCust, avgCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyTotals = [], //set up an empty array so i can push the hourly totals to it later
  this.tossers = [], //just like above
  this.tossersTotal = 0, //just like below
  this.cookieTotal = 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. the value is changed later
  this.hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

  this.randomCust = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };

  this.hourlyCookies = function(){
    var sum = 0; //create a variable to track the total cookie sum for the day that is used at the end of this function
    for(var i = 0; i < 14 ; i++){
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

  //stretch goal table work
  this.cookieTossers = function(){
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

  //DOM that shtuff to HTML
  this.print = function(){
    var tableBody = document.getElementsByClassName('table-body')[0]; //grabbed the <tbody> element
    var tableBodyRow = document.createElement('tr');  //created a <tr> to append stuff to in my loop
    tableBody.appendChild(tableBodyRow);

    //setting up the proper store locaton name as a <th> to start each row
    var rowHeader = document.createElement('th');
    rowHeader.textContent = this.name;
    tableBodyRow.appendChild(rowHeader);

    //looping through hourlyTotals array to add each hourly total
    for (var i = 0; i < this.hourlyTotals.length; i++) {
      var tableData = document.createElement('td');
      tableData.textContent = this.hourlyTotals[i];
      tableBodyRow.appendChild(tableData);
    }

    //adding in the total cookie value for each store
    var dailyTotal = document.createElement('th');
    dailyTotal.textContent = this.cookieTotal;
    tableBodyRow.appendChild(dailyTotal);
  };

  this.printTossers = function(){
    var tableBody = document.getElementsByClassName('table-body')[1];
    var tableBodyRow = document.createElement('tr');
    tableBody.appendChild(tableBodyRow);

    var rowHeader = document.createElement('th');
    rowHeader.textContent = this.name;
    tableBodyRow.appendChild(rowHeader);

    for (var i = 0; i < this.tossers.length; i++) {
      var tableData = document.createElement('td');
      tableData.textContent = this.tossers[i];
      tableBodyRow.appendChild(tableData);
    }

    //adding in the total cookie value for each store
    var dailyTotal = document.createElement('th');
    dailyTotal.textContent = this.tossersTotal;
    tableBodyRow.appendChild(dailyTotal);
  };

  //my helper function to run everything
  this.magic = function(){
    this.hourlyCookies();
    this.cookieTossers();
    this.print();
    this.printTossers();
  };
};
