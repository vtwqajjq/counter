import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Display from "./Components/Display/Display";
import Button from "./Components/Button/Button";
import Setting from "./Components/Setting/Setting";

function App() {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)

    const [counter, setCounter] = useState<number>(minValue)

    const [error, setError] = useState<boolean>(false)

    const [editMode, setEditMode] = useState<boolean>(false)

    const incrementHandler = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        let minValueAsString = localStorage.getItem('start value')
        let maxValueAsString = localStorage.getItem('max value')
        if (minValueAsString && maxValueAsString) {
            setMinValue(+JSON.parse(minValueAsString))
            setMaxValue(+JSON.parse(maxValueAsString))
            setCounter(+JSON.parse(minValueAsString))
        }
    }, [])

    useEffect(() => {
        if (minValue < 0 || maxValue <= minValue) {
            setError(true)
        } else {
            setError(false)
        }
    }, [minValue, maxValue])

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
        localStorage.setItem('max value', JSON.stringify(maxValue))
        localStorage.setItem('start value', JSON.stringify(minValue))
        setEditMode(false)
    }

    const editModeHandler = () => {
        setEditMode(true)
    }

    //Условия
    const conditionInc = counter === maxValue
    const conditionReset = counter === minValue
    const conditionSet = minValue < 0 || maxValue <= minValue
    const conditionMaxValue = maxValue <= minValue ? 'errorInput' : '';
    const conditionMinValue = minValue < 0 ? 'errorInput' : '';


    return (
        <div className="App">
            <div className='menuWrapper'>
                <Setting name='max' inputHandler={maxValueHandler} condition={conditionMaxValue} value={maxValue}
                         editHandler={editModeHandler}/>
                <Setting name='start' inputHandler={minValueHandler} condition={conditionMinValue} value={minValue}
                         editHandler={editModeHandler}/>
                <div className='buttons'>
                    {error && <div className='errorMessageStyles'>Please enter valid data</div>}
                    <Button condition={conditionSet} name='set' handler={setValueHandler}/>
                </div>

            </div>
            <div className='displayWrapper'>
                {editMode ?
                    <div className='editorMode'>Enter values and press 'set'</div> :
                    <>
                        <Display counter={counter} maxValue={maxValue}/>
                        <div className='buttons'>
                            <Button condition={conditionInc} name='inc' handler={incrementHandler}/>
                            <Button condition={conditionReset} name='reset' handler={resetHandler}/>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default App;
