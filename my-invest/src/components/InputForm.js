import './InputForm.css';
import React, {useState} from 'react';
const InputForm = (props) => {
    const intialInvestment = {
        'current-saving': 1000,
        'yearly-contribution': 500,
        'expected-return': 5,
        duration: 30
      }
    const [enteredInput, setEnteredInput] = useState(intialInvestment);
    const changeHandler = (e) => {
        e.preventDefault()
        props.onCalculate(enteredInput)
    }
    const resetHandler = () => {
        //..
        setEnteredInput(intialInvestment)
        console.log('Reset')
    }
    const getInput = (input, value) => {
      setEnteredInput((prevInput) => {
        return {
            ...prevInput,
            [input]: value
        };
    
    })
    }
    return (
    <div>
      <form className="form" onSubmit={changeHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-saving">Current saving ($)</label>
            <input type="number" id="current-saving" 
              value={enteredInput['current-saving']}
              onChange={(event) => getInput('current-saving', event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Saving ($)</label>
            <input type="number" id="yearly-contribution" 
            value={enteredInput['yearly-contribution']}
            onChange={(event) => getInput('yearly-contribution', event.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Interest (%, per year)</label>
            <input type="number" id="expected-return" 
            value={enteredInput['expected-return']}
            onChange={(event) => getInput('expected-return', event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration"
            value={enteredInput.duration}
            onChange={(event) => getInput('duration', event.target.value)}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="reset">
            reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
    )
}
export default InputForm;