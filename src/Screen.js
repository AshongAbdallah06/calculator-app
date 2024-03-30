import React from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const Screen = () => {
    const { changes } = useContext(AppContext);
    return (
        <input type='text' pattern='[0-9]' className="screen" style={{ backgroundColor: changes.screenBgColor, color: changes.textColor }} />
    )
}

export default Screen