import React from 'react'
import MyButton from './MyButton'
import ResetButton from './ResetButton'
import DivPanel from './DivPanel';

const MainPanel = ()=>{
    return (
        <div>
            This is main panel <MyButton></MyButton><ResetButton></ResetButton>
            <DivPanel></DivPanel>
        </div>
    );
}
export default MainPanel;