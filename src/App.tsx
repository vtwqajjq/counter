import React, {useState} from 'react';
import './App.css';
import Display from "./Components/Display/Display";
import Button from "./Components/Button/Button";

function App() {
    const minValue = 0
    const maxValue = 5

    let [counter, setCounter] = useState(minValue)
    const incrementHandler = () => {
        setCounter(counter + 1)
    }

    const resetHandler = () => {
        if (counter === maxValue) setCounter(minValue)
    }

    const conditionInc = counter === maxValue
    const conditionReset = counter === minValue

    return (
        <div className="App">
            <div className='wrapper'>
                <Display counter={counter}/>
                <div className='buttons'>
                    <Button condition={conditionInc} name='inc' handler={incrementHandler}/>
                    <Button condition={conditionReset} name='reset' handler={resetHandler}/>
                </div>
            </div>
        </div>
    );
}

export default App;
