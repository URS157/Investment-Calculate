//import class
import './Table.css';

//function class
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const Table = (props) => {

//JSX class
    return (
        <div>
          <table className='result'>
           <thead>
            <tr>
             <th>Total Savings</th>
             <th>Interest (Year)</th>
             <th>Total Interest</th>
             <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
           {props.data.map(yearData => (
            <tr key={yearData.year}>
            <td>{formatter.format(yearData.year)}</td>
            <td>{formatter.format(yearData.savingEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{formatter.format(yearData.savingEndOfYear - props.intialInvestment - yearData.yearlyContribution * yearData.year)}</td>
            <td>{formatter.format(props.intialInvestment + yearData.yearlyContribution * yearData.year)}</td>
           </tr>
           ))}
          </tbody>
         </table>
        </div>
    )
}
export default Table;