# Pregnancy Calculators API Free


Welcome to the Pregnancy Calculators API Free project, an uncomplicated and open-source API that grants you free access to a range of pregnancy-related calculators. These tools can be leveraged to develop your web/mobile applications and more.

## Pregnancy Calculator
This calculator calculates the due date of pregnancy and estimates the current week of pregnancy.

##  Conception Date Calculator during Pregnancy
This calculator calculates the conception date during the pregnancy period.

##  Expected Due Date Calculator
This calculator estimates the expected due date based on the start date of pregnancy.

## Ovulation Date Calculator
This calculator helps estimate the ovulation date and the best fertility period.

## Conception Date Calculator
This calculator calculates the conception date based on the menstrual cycle date and the length of your menstrual cycle.

# Usage

To use Pregnancy Calculators APIs Free, simply send a POST request to the following  4 endpoints :

### example request in Body JSON request :   {"firstDayOfLastPeriod": "2023-06-18" ,"cycleLength" : 28}

## pregnancy : 
### http://yourhost/api/calculate-pregnancy
Body Example Request : 


## Due date
### http://yourhost/api/calculate-due-date

## Ovulation
### http://yourhost/api/calculate-ovulation

## Conception
### http://yourhost/api/calculate-conception

## Pregnancy Conception
### http://yourhost/api/calculate-pregnancy-conception



## Pregnancy Weight Gain
### http://yourhost/api/calculate-pregnancy-weight-gain
example
{
  "week": 20 ,
  "height" : 165,
  "weightBforePregnancy" : 50,
  "currentWeight" : 55,
  "twin": "false"

}


## Improve this project

This project is always seeking ways to improve and welcomes feedback and contributions from its users. If you have any suggestions or ideas, please feel free to create an issue or submit a pull request on the GitHub repository.




