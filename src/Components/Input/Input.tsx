import React, {ChangeEvent} from 'react';

type InputPropsType = {
    condition: string
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    editHandler: () => void
}

const Input = (props: InputPropsType) => {
    return (
        <input className={props.condition} type="number" onChange={props.inputHandler} value={props.value} onFocus={props.editHandler}/>
    );
};

export default Input;