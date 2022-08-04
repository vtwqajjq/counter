import React from 'react';
import style from './Display.module.css'

type DisplayPropsType = {
    counter: number
    maxValue: number
}

const Display = (props: DisplayPropsType) => {

    return (
        <div className={style.display}>
            <span className={props.counter === props.maxValue ? style.max : ''}>{props.counter}</span>
        </div>
    );
};

export default Display;