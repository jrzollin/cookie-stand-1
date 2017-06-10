'use strict';

var pike = {
  locationName: '1st and Pike',
  tag: 'pike', //this property is used later when using setAttribute
  minCust : 23,
  maxCust : 65,
  avgCookies : 6.3,
  hourlyTotals : [], //set up an empty array so i can push the hourly totals to it later
  cookieTotal : 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. th value is changed later
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']
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

//pike.hourlyCookies();
//console.log('Here are the hourly totals: ' + pike.hourlyTotals);
//console.log('Here is the sum for all the cookies in one day: ' + pike.cookieTotal);

//DOM that shtuff to HTML
pike.print = function(){
  //first I set up the table header row with proper titles
  var tableHeader = document.getElementById('table-hours'); //grabbed the <thead> element from my html
  var tableHeaderRow = document.createElement('tr');  //created a <tr> so I could loop and append <td> to it
  tableHeader.appendChild(tableHeaderRow);
  //created an empty <th> so first cell in thead row is empty for formatting
  var thPlaceHolder = document.createElement('th');
  thPlaceHolder.textContent = '';
  tableHeaderRow.appendChild(thPlaceHolder);
  //for loop goes through hoursOpen to give each column the proper title
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var tableData = document.createElement('th');
    tableData.textContent = this.hoursOpen[i];
    tableHeaderRow.appendChild(tableData);
  }
  //now adding a "Total"" row in <thead>
  var theadTotal = document.createElement('th');
  theadTotal.textContent = 'Total';
  tableHeaderRow.appendChild(theadTotal);

  //now adding in data for each store in the following rows
  var tableBody = document.getElementById('table-body'); //grabbed the <tbody> element
  var tableBodyRow = document.createElement('tr');  //created a <tr> to append stuff to in my loop
  tableBody.appendChild(tableBodyRow);
  //setting up the proper store locaton name as a <th> to start each row
  var rowHeader = document.createElement('th');
  rowHeader.textContent = this.locationName;
  tableBodyRow.appendChild(rowHeader);
  //looping through hourlyTotals array to add each hourly total
  for (var i = 0; i < this.hourlyTotals.length; i++) {
    var tableData = document.createElement('td');
    tableData.textContent = this.hourlyTotals[i];
    tableBodyRow.appendChild(tableData);
  }
};

pike.magic = function(obj){
  pike.hourlyCookies();
  pike.print();
};
pike.magic(pike);

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

// var seattleCenter = {
//   locationName: 'Seattle Center',
//   tag: 'seaCenter', //this property is used later when using setAttribute
//   minCust : 11,
//   maxCust : 38,
//   avgCookies : 3.7,
//   hourlyTotals : [], //set up an empty array so i can push the hourly totals to it later
//   cookieTotal : 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. th value is changed later
// };
//
// var capitolHill = {
//   locationName: 'Capitol Hill',
//   tag: 'capHill', //this property is used later when using setAttribute
//   minCust : 3,
//   maxCust : 24,
//   avgCookies : 1.2,
//   hourlyTotals : [], //set up an empty array so i can push the hourly totals to it later
//   cookieTotal : 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. th value is changed later
// };
//
// var alki = {
//   locationName: 'Alki',
//   tag: 'alki', //this property is used later when using setAttribute
//   minCust : 3,
//   maxCust : 24,
//   avgCookies : 1.2,
//   hourlyTotals : [], //set up an empty array so i can push the hourly totals to it later
//   cookieTotal : 0,  //this doesn't need to be here but i'm using as a reminder/placeholder. th value is changed later
// };
