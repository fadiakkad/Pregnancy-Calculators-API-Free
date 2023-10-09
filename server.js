const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');



//Women
const PeriodCalculator = require('./WomenCalculator/PeriodCalculator');
const CalculatorDueDate = require('./WomenCalculator/DueDateCalculator')
const CalculatorOvulation = require('./WomenCalculator/OvulationCalculator.js')
const CalculatorConception = require('./WomenCalculator/ConceptionCalculate.js')
const CalculatorPregnancyConception = require('./WomenCalculator/PregnancyConceptionCalculator')
const CalculatorPregnancy = require('./WomenCalculator/PregnancyCalculator')
// const WeightGainCalculator = require('./WomenCalculator/WeightGainPregnancyCalculate')


const app = express();

app.use(bodyParser.json());
app.use(cors());

var { port } = require('./constants');

//test API
app.get('/api/status', (req, res) => {
  res.json("Up");
});



// Women Cal


//Pregnancy Calculator
app.post('/api/calculate-pregnancy', (req, res) => {
  const { firstDayOfLastPeriod, cycleLength } = req.body;
  try {
    // Check if firstDayOfLastPeriod and cycleLength are provided
    if (!firstDayOfLastPeriod || !cycleLength) {
      return res.status(400).json({ error: 'Invalid input.' });
    }
    const results = CalculatorPregnancy(firstDayOfLastPeriod, cycleLength)
    res.json(results);
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//Calculator Pregnancy Conception 
app.post('/api/calculate-pregnancy-conception', (req, res) => {
  const { firstDayOfLastPeriod, cycleLength } = req.body;
  try {
    // Check if firstDayOfLastPeriod and cycleLength are provided
    if (!firstDayOfLastPeriod || !cycleLength) {
      return res.status(400).json({ error: 'Invalid input.' });
    }
    results = CalculatorPregnancyConception(firstDayOfLastPeriod, cycleLength)

    res.json(results);
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//Calculate Period
app.post('/api/calculate-period', (req, res) => {
  const { firstDayOfLastPeriod, periodLength, cycleLength } = req.body;

  // Check if all inputs are provided
  if (!firstDayOfLastPeriod || !periodLength || !cycleLength) {
    return res.status(400).json({ error: 'Invalid input.' });
  }

  const results = PeriodCalculator(firstDayOfLastPeriod, periodLength, cycleLength);

  res.json(results);
});


//Calculate Due Date
app.post('/api/calculate-due-date', (req, res) => {
  const { firstDayOfLastPeriod, cycleLength } = req.body;
  try {


    // Check if firstDayOfLastPeriod and cycleLength are provided
    if (!firstDayOfLastPeriod || !cycleLength) {
      return res.status(400).json({ error: 'Invalid input.' });
    }

    const results = CalculatorDueDate(firstDayOfLastPeriod, cycleLength)

    res.json(results);

  } catch (error) {
    res.status(400).json({ error: error.message });

  }
});

// Calculate Ovulation
app.post('/api/calculate-ovulation', (req, res) => {
  const { firstDayOfLastPeriod, cycleLength } = req.body;
  try {
    // Check if firstDayOfLastPeriod and cycleLength are provided
    if (!firstDayOfLastPeriod || !cycleLength) {
      return res.status(400).json({ error: 'Invalid input.' });
    }
    const results = CalculatorOvulation(firstDayOfLastPeriod, cycleLength)

    res.json(results);
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//Calculator Conception 
app.post('/api/calculate-conception', (req, res) => {
  const { firstDayOfLastPeriod, cycleLength } = req.body;
  try {
    // Check if firstDayOfLastPeriod and cycleLength are provided
    if (!firstDayOfLastPeriod || !cycleLength) {
      return res.status(400).json({ error: 'Invalid input.' });
    }
    const results = CalculatorConception(firstDayOfLastPeriod, cycleLength)

    res.json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//Pregnancy weight gain Calculator
app.post('/api/calculate-pregnancy-weight-gain', (req, res) => {
  const { week, height, weightBforePregnancy, currentWeight, twin } = req.body;

  try {
    if (!week || !height || !weightBforePregnancy || !currentWeight || !twin) {
      return res.status(400).json({ error: 'Invalid input.' });
    }
    const results = WeightGainCalculator(week, height, weightBforePregnancy, currentWeight, twin)
    res.json(results);
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// add more calc

// App listening
app.listen(port, () => {
  console.log('Server is running on port', port);
});
