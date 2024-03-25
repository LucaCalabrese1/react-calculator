import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  //lifted up
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  //checking input
  const inputIsvalid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      //passato da react vecchio stato
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };
 
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />

      {!inputIsvalid && <p className='center'>Please enter a duration greter than zero.</p>}
      {inputIsvalid && <Results input={userInput} />}
    </>
  )
}

export default App
