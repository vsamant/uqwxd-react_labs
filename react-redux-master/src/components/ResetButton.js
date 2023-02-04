import React from 'react'
import { useDispatch} from 'react-redux';
import reset1 from '../action'

const MyButton = ()=>{
    let dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(reset1())}>Reset counter</button>
    );
}

export default MyButton;
