

 const MonthConvert = (string) =>{
  const monthMap = {
    '01': 'جانفي',
    '02': 'فيفري',
    '03': 'مارس',
    '04': 'أفريل',
    '05': 'ماي',
    '06': 'جوان',
    '07': 'جويلية',
    '08': 'أوت',
    '09': 'سبتمبر',
    '10': 'أكتوبر',
    '11': 'نوفمبر',
    '12': 'ديسمبر'
  };
  console.log(string)
    var [year,month, day] = string.split('-');

    string =  day+'. '+monthMap[month] 
    return string
}
module.exports = MonthConvert