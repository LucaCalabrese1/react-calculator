import { calculateInvestmentResults, formatter } from '../utils/investment.js';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input); //input stessa shape

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  
  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (year)</th>
          <th>Tot. Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map(yearData => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}