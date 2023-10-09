
const moment = require('moment');
const MonthConvert = require("./utility.js");
function CalculatorConception(firstDayOfLastPeriod, cycleLength) {
  const firstDayOfLastPeriodDate = moment(firstDayOfLastPeriod);
  if (!firstDayOfLastPeriodDate.isValid() ) {
    throw new Error('Please insert correct dates');
  }
  

  const M = cycleLength - 28
  const cons_const = 12 + M 
  var debut =firstDayOfLastPeriod

  // Calculate period dates and ovulation days for the next 6 months
  const results = [];
  for (let i = 0; i < 6; i++) {
  const startDatePeriods = moment(debut).format('YYYY-MM-DD');;
  const ConceptionWindowStart = moment(debut).add(cons_const,'days').format('YYYY-MM-DD');
  const ConceptionWindowEnd = moment(ConceptionWindowStart).add(5,'days').format('YYYY-MM-DD');
  const DueDate = moment(debut).add(280 + M, 'days').format('YYYY-MM-DD');

  
  results.push({
    startDatePeriods: debut,
    conceptionWindowStart: ConceptionWindowStart,
    conceptionWindowEnd: ConceptionWindowEnd,
    dueDate:DueDate
  });
  debut = moment(startDatePeriods).add(cycleLength,'days').format('YYYY-MM-DD');

  
  }



  return { result: results };
}

module.exports = CalculatorConception;
