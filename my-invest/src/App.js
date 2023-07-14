//imports class
import React, {useState} from 'react'
import './App.css';
import InputForm from './components/InputForm';
import Table from './components/Table';
import Header from './components/Header';

//functions class
function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }
  const yearlyData = [];
  if (userInput) {
    let currentSaving = userInput['current-saving'];
    const yearlyContribution = userInput['yearly-contribution'];
    const expectedReturn = userInput['expected-return'] / 100;
    const duration = userInput['duration'];
    for(let i = 0; i < duration; i++) {
      const yearlyInterest = currentSaving * expectedReturn;
      currentSaving += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        savingEndOfYear: currentSaving,
        yearlyInterest: yearlyInterest,
        yearlyContribution: yearlyContribution
      });
    }
  }
  //JSX class
  return (
    <div>
      <Header />
      <InputForm onCalculate={calculateHandler}/>
      {!userInput && <p style={{color: "red", textAlign: "center"}}>No Investment Calculated yet!</p>}
      {userInput && <Table data={yearlyData} intialInvestment={userInput['current-saving']}/>}
    </div>
  );
}

export default App;
