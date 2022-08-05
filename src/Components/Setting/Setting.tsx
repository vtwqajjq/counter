import React, {ChangeEvent} from 'react';
import Input from "../Input/Input";

type SettingPropsType = {
    condition: string
    name: string
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    editHandler: () => void
}


const Setting = (props: SettingPropsType) => {
    return (
        <div className='setting'>
            <span>{props.name} value:</span>
            <Input condition={props.condition} inputHandler={props.inputHandler} value={props.value}
                   editHandler={props.editHandler}/>
        </div>
    );
};

export default Setting;