const moment = require('moment');

function CalculatorDueDate(firstDayOfLastPeriod, cycleLength) {
  const firstDayOfLastPeriodDate = moment(firstDayOfLastPeriod);
  if (!firstDayOfLastPeriodDate.isValid() ) {
    throw new Error('Please insert correct dates');
  }

  M = cycleLength - 28;
  
  const DueDate = moment(firstDayOfLastPeriod).add(280 + M, 'days').format('YYYY-MM-DD');
  var W =moment(firstDayOfLastPeriod).add(M+1, 'days') 
  
  const NumberOfDays = moment().diff(W, 'days');

  const Percentage = (NumberOfDays / (280)) * 100;

  const NumberOfWeeks = Math.floor(NumberOfDays / 7);
  const remainingDays = NumberOfDays % 7;
  const months = Math.floor(NumberOfDays / 30); 
  const days = NumberOfDays % 30;
  let results =[]
  const currnet_week = NumberOfWeeks+1
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

  const result =
{
  dueDate: DueDate,
  numberOfDays: NumberOfDays,
  numberOfWeeks: NumberOfWeeks,
  remainingDays: remainingDays,
  currentWeek : currnet_week,
  months : months,
  DaysMonth: days,
  trimstre : trimstre,
  percentageof40week:Math.floor(Percentage)

}


  return { result };
}

module.exports = CalculatorDueDate;
