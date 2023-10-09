const moment = require('moment');

function WeightGainCalculator(week ,height ,weightBforePregnancy, currentWeight,twin) {
 
    

        var maxWeightValues = [];
        
        var minWeightValues = [];
      var bmiRanges=[]
      const bmiRangestwin =[
        { min: 0,
          max: 18.5,
          classification: "Underweight",
          minWeightValues :[0, 0.04, 0.08, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 1.1, 1.7, 2.3, 2.9, 3.5, 4.1, 4.7, 5.3, 5.9, 6.5, 7.1, 7.7, 8.3, 8.9, 9.5, 10.1, 10.8, 11.4, 12.0, 12.6, 13.2, 13.8, 14.4, 15.0, 15.6, 16.2, 16.8],
            maxWeightValues : [0, 0.2, 0.3, 0.5, 0.7, 0.8, 1.0, 1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.8, 3.7, 4.5, 5.3, 6.2, 7.0, 7.8, 8.7, 9.5, 10.3, 11.2, 12.0, 12.8, 13.7, 14.5, 15.3, 16.2, 17.0, 17.8, 18.7, 19.5, 20.3, 21.2, 22.0, 22.8, 23.7, 24.5]
        },
        {
          min: 18.5,
          max: 24.99,
          classification: "Normal weight",
          minWeightValues :[0, 0.04, 0.08, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 1.1, 1.7, 2.3, 2.9, 3.5, 4.1, 4.7, 5.3, 5.9, 6.5, 7.1, 7.7, 8.3, 8.9, 9.5, 10.1, 10.8, 11.4, 12.0, 12.6, 13.2, 13.8, 14.4, 15.0, 15.6, 16.2, 16.8],
          maxWeightValues:[0, 0.2, 0.3, 0.5, 0.7, 0.8, 1.0, 1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.8, 3.7, 4.5, 5.3, 6.2, 7.0, 7.8, 8.7, 9.5, 10.3, 11.2, 12.0, 12.8, 13.7, 14.5, 15.3, 16.2, 17.0, 17.8, 18.7, 19.5, 20.3, 21.2, 22.0, 22.8, 23.7, 24.5]
        },
        {
          min: 25,
          max: 29.99,
          classification: "Overweight",
          minWeightValues :[0, 0.04, 0.08, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.1, 12.6, 13.1, 13.6, 14.1],
          maxWeightValues:[0, 0.2, 0.3, 0.5, 0.7, 0.8, 1.0, 1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.8, 3.5, 4.3, 5.1, 5.8, 6.6, 7.4, 8.1, 8.9, 9.7, 10.4, 11.2, 12.0, 12.7, 13.5, 14.3, 15.0, 15.8, 16.6, 17.3, 18.1, 18.8, 19.6, 20.4, 21.1, 21.9, 22.7]
        },
        {
          min: 30,
          max: 1000,
          classification: "Obese",
          minWeightValues :[0, 0.04, 0.08, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.9, 1.3, 1.7, 2.1, 2.5, 2.9, 3.3, 3.7, 4.1, 4.5, 4.9, 5.3, 5.7, 6.1, 6.5, 6.9, 7.3, 7.7, 8.1, 8.5, 8.9, 9.3, 9.7, 10.1, 10.5, 10.9, 11.3],
          maxWeightValues:[0, 0.2, 0.3, 0.5, 0.7, 0.8, 1.0, 1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.6, 3.3, 3.9, 4.5, 5.2, 5.8, 6.4, 7.0, 7.7, 8.3, 8.9, 9.6, 10.2, 10.8, 11.5, 12.1, 12.7, 13.4, 14.0, 14.6, 15.3, 15.9, 16.5, 17.2, 17.8, 18.4, 19.1]
        }
        
      ] 
      const bmiRangesNonTwin = [
        {
          min: 0,
          max: 18.5,
          classification: "Underweight",
          minWeightValues :[0, 0.04, 0.08, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5,
            1.0, 1.4, 1.9, 2.3, 2.8, 3.2, 3.7, 4.1, 4.6, 5.0, 5.5, 5.9, 6.4,
            6.8, 7.3, 7.7, 8.2, 8.6, 9.1, 9.5, 10.0, 10.4, 10.9, 11.3, 11.8,
            12.2, 12.7],
            maxWeightValues : [0, 0.2, 0.3, 0.5, 0.7, 0.8, 1.0, 1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.6,
            3.2, 3.8, 4.4, 5.0, 5.6, 6.2, 6.8, 7.4, 8.0, 8.6, 9.2, 9.8, 10.4,
            11.0, 11.6, 12.2, 12.8, 13.4, 14.0, 14.6, 15.2, 15.8, 16.3, 16.9,
            17.5, 18.1]
        },
        {
          min: 18.5,
          max: 24.99,
          classification: "Normal weight",
          minWeightValues :[0, 0.04, 0.08, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5,
            0.9, 1.3, 1.7, 2.1, 2.5, 2.9, 3.3, 3.7, 4.1, 4.5, 4.9, 5.3, 5.7,
            6.1, 6.5, 6.9, 7.3, 7.7, 8.1, 8.5, 8.9, 9.3, 9.7, 10.1, 10.5, 10.9,
            11.3],
          maxWeightValues:[0, 0.2, 0.3, 0.5, 0.7, 0.8, 1.0, 1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.5,
            3.0, 3.5, 4.1, 4.6, 5.1, 5.6, 6.1, 6.6, 7.1, 7.7, 8.2, 8.7, 9.2, 9.7,
            10.2, 10.7, 11.2, 11.8, 12.3, 12.8, 13.3, 13.8, 14.3, 14.8, 15.4, 15.9]

        },
        {
          min: 25,
          max: 29.99,
          classification: "Overweight",
          minWeightValues :[0, 0.04, 0.08, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5,
            0.7, 1.0, 1.2, 1.4, 1.7, 1.9, 2.1, 2.4, 2.6, 2.8, 3.1, 3.3, 3.5,
            3.8, 4.0, 4.2, 4.5, 4.7, 4.9, 5.2, 5.4, 5.6, 5.9, 6.1, 6.3, 6.6, 6.8],
          maxWeightValues:[0, 0.2, 0.3, 0.5, 0.7, 0.8, 1.0, 1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.3,
            2.7, 3.0, 3.4, 3.7, 4.1, 4.4, 4.8, 5.1, 5.5, 5.8, 6.1, 6.5, 6.8, 7.2,
            7.5, 7.9, 8.2, 8.6, 8.9, 9.3, 9.6, 10.0, 10.3, 10.6, 11.0, 11.3]
        },
        {
          min: 30,
          max: 1000,
          classification: "Obese",
          minWeightValues :[0, 0.04, 0.08, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5,
            0.7, 0.8, 1.0, 1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.2, 2.3, 2.5, 2.7,
            2.8, 3.0, 3.2, 3.3, 3.5, 3.7, 3.8, 4.0, 4.2, 4.3, 4.5, 4.7, 4.8, 5.0],
          maxWeightValues:[0, 0.2, 0.3, 0.5, 0.7, 0.8, 1.0, 1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.3,
            2.5, 2.8, 3.0, 3.3, 3.6, 3.8, 4.1, 4.4, 4.6, 4.9, 5.1, 5.4, 5.7, 5.9,
            6.2, 6.5, 6.7, 7.0, 7.2, 7.5, 7.8, 8.0, 8.3, 8.5, 8.8, 9.1]
        }
      ];

      if(!twin){
        bmiRanges =bmiRangesNonTwin
      }
      else{
        bmiRanges =bmiRangestwin
      }
      const Height_M =height/100
      BMI = Math.round(weightBforePregnancy / (Height_M * Height_M));
      var BMIclassification = "Unknown";
      for (const bmiRange of bmiRanges) {
        if (BMI >= bmiRange.min && BMI <= bmiRange.max) {
          BMIclassification = bmiRange.classification;
          minWeightValues =bmiRange.minWeightValues
          maxWeightValues =bmiRange.maxWeightValues
        }
      }
      if (BMIclassification == "Unknown") {
        throw new Error('Invalid weight or height');
      }

      const recommended ={
        min : weightBforePregnancy+minWeightValues[week-1],
        max : weightBforePregnancy+maxWeightValues[week-1]
      }
      const recommendedWeightDelivering = {
        min : weightBforePregnancy+minWeightValues[39],
        max : weightBforePregnancy+maxWeightValues[39]
      }
      var weightclassification = "Unknown";
      if(currentWeight < recommended.max && currentWeight >recommended.min){
        weightclassification = "normal";
      }
      else{
      if(currentWeight >recommended.max){
        weightclassification = "higher";
      }
      if(currentWeight <recommended.min){
        weightclassification = "lower";
      }
    }
      
      
      const bmiResult = {
        BMI,
        BMIclassification
      };
      const results = {
        recommended,
        weightclassification,
        recommendedWeightDelivering,
        bmiResult,
        maxWeightValues,
        minWeightValues,
        week
      }
  
 

  return { results };
}

module.exports = WeightGainCalculator;
