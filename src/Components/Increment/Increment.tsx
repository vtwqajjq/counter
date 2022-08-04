import React from 'react';
import style from './Increment.module.css'

type IncrementPropsType = {
    counter: number
    incrementHandler: () => void
}

const Increment = (props: IncrementPropsType) => {
    return (
        <div className={style.increment}>
            <button disabled={props.counter === 5} onClick={props.incrementHandler}>inc</button>
        </div>
    );
};

export default Increment;