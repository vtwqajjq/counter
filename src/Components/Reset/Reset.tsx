import React from 'react';

type ResetPropsType = {
    counter: number
    resetHandler: () => void
}

const Reset = (props: ResetPropsType) => {
    return (
        <button disabled={props.counter === 0} onClick={props.resetHandler}>reset</button>
    );
};

export default Reset;