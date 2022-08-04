import React from 'react';

type ButtonPropsType = {
    condition: boolean
    name: string
    handler: () => void
}

const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button disabled={props.condition} onClick={props.handler}>{props.name}</button>
        </div>
    );
};

export default Button;