'use strict';

  for (var i = 0; i < 14; i++){
    var hourlyTotal = 0;
    for (var j = 0; j < array.length; j++){
      //set current store
      var currentStore = array[j];
      hourlyTotal = hourlyTotal + currentStore.hourlyTotals[i];
    };
    totalHourlyCookies.push(hourlyTotal);
  }
