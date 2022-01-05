import { FiArrowLeft } from 'react-icons/fi'
import React from 'react';
import { CombineClasses } from 'nl-ui';

interface GoBackBtnProps {
    className?: string
}

const GoBackBtn : React.FC<GoBackBtnProps> = (props : GoBackBtnProps) => {
    return (
        <button onClick={() => {window.history.back()}} className={CombineClasses('go_back_icon', props.className)}>
            <FiArrowLeft></FiArrowLeft>
            <p>Back</p>
        </button>
    );
}

export default GoBackBtn;