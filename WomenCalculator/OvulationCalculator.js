const moment = require('moment');
const MonthConvert = require("./utility.js");
function CalculatorOvulation(firstDayOfLastPeriod, cycleLength) {
  const firstDayOfLastPeriodDate = moment(firstDayOfLastPeriod);
  if (!firstDayOfLastPeriodDate.isValid() ) {
    throw new Error('Please insert correct dates');
  }

  const M = cycleLength - 28
  const ova_const = 12 + M 
  var debut =firstDayOfLastPeriod
  const MostProbableOvulationDate	= moment(debut).add(ova_const+2,'days').format('YYYY-MM-DD');
  const IntercourseWindowForPregnancy	= moment(debut).add(ova_const-3,'days').format('YYYY-MM-DD');
  const PregnancyTest	 = moment(debut).add(ova_const+10,'days').format('YYYY-MM-DD');
  const NextPeriodStart = moment(debut).add(cycleLength,'days').format('YYYY-MM-DD');
  const DueDateIfPregnant = moment(firstDayOfLastPeriod).add(280 + M, 'days').format('YYYY-MM-DD');
  const results = [];
  for (let i = 0; i < 6; i++) {
  const startDatePeriods = moment(debut).format('YYYY-MM-DD');;
  const OvulationWindowStart = moment(debut).add(ova_const,'days').format('YYYY-MM-DD');
  const OvulationWindowEnd = moment(OvulationWindowStart).add(4,'days').format('YYYY-MM-DD');
  const DueDate = moment(debut).add(280 + M, 'days').format('YYYY-MM-DD');
  results.push({
    startDatePeriods:debut,
    ovulationWindowStart: OvulationWindowStart,
    ovulationWindowEnd: OvulationWindowEnd,
    dueDate:DueDate
  });
  debut = moment(startDatePeriods).add(cycleLength,'days').format('YYYY-MM-DD');

  }
  const result ={
    importantDatesForNextSixMonths : results,
    mostProbableOvulationDate : MostProbableOvulationDate,
    intercourseWindowForPregnancy:IntercourseWindowForPregnancy,
    pregnancyTest:PregnancyTest,
    nextPeriodStart:NextPeriodStart,
    dueDateIfPregnant:DueDateIfPregnant
  }


  return { result };
}

module.exports = CalculatorOvulation;
