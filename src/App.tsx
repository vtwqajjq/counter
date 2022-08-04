import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Display from "./Components/Display/Display";
import Button from "./Components/Button/Button";

function App() {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(100)

    let [counter, setCounter] = useState(minValue)
    let [error, setError] = useState<boolean>(false)

    const incrementHandler = () => {
        setCounter(counter + 1)
    }

    useEffect(()=>{
        if (minValue<0 || maxValue<= minValue) {
            setError(true)
        } else {
            setError(false)
        }
        console.log(error)
    },[minValue,maxValue])

    const resetHandler = () => {
        if (counter <= maxValue) setCounter(minValue)
    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const setValueHandler = () => {
        setCounter(minValue)
    }

    const conditionInc = counter === maxValue
    const conditionReset = counter === minValue
    const conditionSet = minValue < 0 || maxValue <= minValue

    return (
        <div className="App">
            <div className='menuWrapper'>
                <div className='setting'>
                    <span>max value:</span>
                    <input className={maxValue <= minValue ? 'errorInput' : ''} type="number" onChange={maxValueHandler}/>
                </div>
                <div className='setting'>
                    <span>start value:</span>
                    <input className={minValue < 0 ? 'errorInput' : ''} type="number" onChange={minValueHandler}/>
                </div>
                <div className='buttons'>
                    {error && <div className='errorMessageStyles'>Please enter valid data</div>}
                    <Button condition={conditionSet} name='set' handler={setValueHandler}/>
                </div>
            </div>
            <div className='displayWrapper'>
                <Display counter={counter} maxValue={maxValue}/>
                <div className='buttons'>
                    <Button condition={conditionInc} name='inc' handler={incrementHandler}/>
                    <Button condition={conditionReset} name='reset' handler={resetHandler}/>
                </div>
            </div>
        </div>
    );
}

export default App;
