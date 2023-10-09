const moment = require('moment');

function CalculatorPregnancyConception(firstDayOfLastPeriod, cycleLength) {
  const firstDayOfLastPeriodDate = moment(firstDayOfLastPeriod);
  if (!firstDayOfLastPeriodDate.isValid() ) {
    throw new Error('Please insert correct dates');
  }
  const M = cycleLength - 28
  const cons_const = 12 + M 
  var debut =firstDayOfLastPeriod

  const results = [];
  const startDatePeriods = moment(debut).format('YYYY-MM-DD');;
  const Most_probable_ConceptionWindowStart = moment(debut).add(cons_const,'days').format('YYYY-MM-DD');
  const Most_probable_ConceptionWindowEnd = moment(Most_probable_ConceptionWindowStart).add(4,'days').format('YYYY-MM-DD');

  const Most_probable_DatesSexual_IntercourseStart=moment(Most_probable_ConceptionWindowStart).add(-3,'days').format('YYYY-MM-DD');
  const Most_probable_DatesSexual_IntercourseEnd=moment(Most_probable_DatesSexual_IntercourseStart).add(7,'days').format('YYYY-MM-DD');

  const Possible_ConceptionWindowStart = moment(debut).add(cons_const-1 ,'days').format('YYYY-MM-DD');
  const Possible_ConceptionWindowEnd = moment(Possible_ConceptionWindowStart).add(10,'days').format('YYYY-MM-DD');

  const Possible_DatesSexual_IntercourseStart=moment(Possible_ConceptionWindowStart).add(-5,'days').format('YYYY-MM-DD');
  const Possible_DatesSexual_IntercourseEnd=moment(Possible_DatesSexual_IntercourseStart).add(15,'days').format('YYYY-MM-DD');
  
  const result =
  {
    mostProbableConceptionWindowStart: Most_probable_ConceptionWindowStart,
    mostProbableConceptionWindowEnd: Most_probable_ConceptionWindowEnd,
    mostProbableDatesSexualIntercourseStart: Most_probable_DatesSexual_IntercourseStart,
    mostProbabledatesSexualIntercourseEnd:Most_probable_DatesSexual_IntercourseEnd,

    possibleConceptionWindowStart: Possible_ConceptionWindowStart,
    possibleConceptionWindowEnd: Possible_ConceptionWindowEnd,
    possibleDatesSexualIntercourseStart: Possible_DatesSexual_IntercourseStart,
    possibleDatesSexualIntercourseEnd:Possible_DatesSexual_IntercourseEnd

  };

  return { result };
}

module.exports = CalculatorPregnancyConception;
