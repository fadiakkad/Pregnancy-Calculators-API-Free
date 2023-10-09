const moment = require('moment');

function CalculatorPregnancy(firstDayOfLastPeriod, cycleLength) {
  const firstDayOfLastPeriodDate = moment(firstDayOfLastPeriod);
  if (!firstDayOfLastPeriodDate.isValid() ) {
    throw new Error('Please insert correct dates');
  }
  M = cycleLength - 28;
  
  const DueDate = moment(firstDayOfLastPeriod).add(280 + M, 'days').format('YYYY-MM-DD');
  var W =moment(firstDayOfLastPeriod).add(M+1, 'days') 
  const NumberOfDays = moment().diff(W, 'days');

  const NumberOfWeeks = Math.floor(NumberOfDays / 7);
  const remainingDays = NumberOfDays % 7 ;
  
  const Percentage = (NumberOfDays / (280)) * 100;
  const conceived = moment(firstDayOfLastPeriod).add(M+15, 'days').format('YYYY-MM-DD');
  const currnet_week = NumberOfWeeks+1
  const months = Math.floor(NumberOfDays / 30); 
  const days = NumberOfDays % 30;
  var trimstre = ''
  if(currnet_week <13){
    trimstre = "first"
  }
  else {
    if(currnet_week <28){
      trimstre ='second'
    }
    else{
      trimstre ='third'
    }
  }
  //'الثلث الأول' 
  //'الثلث الثاني'
  //'الثلث الثالث'
  const result =
  {
    dueDate: DueDate,
    numberOfDays: NumberOfDays,
    numberOfWeeks: NumberOfWeeks,
    remainingDays: remainingDays,
    percentageOfPregnancyTime:Math.floor(Percentage),
    conceivedDate:conceived,
    months : months,
    daysMonth: days,
    trimstre : trimstre,
    currentWeek : currnet_week,
  };
  return { result };
}

module.exports = CalculatorPregnancy;
