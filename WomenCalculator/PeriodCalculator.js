const moment = require('moment');


function PeriodCalculator(firstDayOfLastPeriod, periodLength,cycleLength) {
  const firstDayOfLastPeriodDate = moment(firstDayOfLastPeriod);
  if (!firstDayOfLastPeriodDate.isValid() ) {
    throw new Error('Please insert correct dates');
  }

  const M = cycleLength - 28
  const P_days = periodLength -1
  const ova_const = 12 + M 
  var debut =firstDayOfLastPeriod

  // Calculate period dates and ovulation days for the next 6 months
  const results = [];
  for (let i = 0; i < 6; i++) {
  var startDatePeriods = moment(debut).format('MM-DD');;
  var EndDatePeriods = moment(debut).add(P_days, 'days').format('MM-DD');;
  
  var OvulationWindowStart = moment(debut).add(ova_const,'days').format('MM-DD');
  var OvulationWindowEnd = moment(OvulationWindowStart).add(4,'days').format('MM-DD');
  debut = moment(startDatePeriods).add(cycleLength,'days').format('MM-DD');

  
  results.push({
    startDatePeriods: startDatePeriods,
    endDatePeriods: EndDatePeriods,
    ovulationWindowStart: OvulationWindowStart,
    ovulationWindowEnd: OvulationWindowEnd
  });

}

  return {result: results };
}

module.exports = PeriodCalculator;
