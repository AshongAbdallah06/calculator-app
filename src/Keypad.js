import React from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const Keypad = () => {
    const { changes } = useContext(AppContext);

    return (
        <section className="keypad" style={{ backgroundColor: changes.keyPad_ToggleBgColor }}>

            <div className="keys">
                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>7</div>

                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>8</div>

                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>9</div>

                <div className="key white ddb delete" style={{
                    backgroundColor: changes.del_Reset_BgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.del_ResetShadow}`, 
                    color: changes.del_Reset_Equal_TextColor 
                }}>DEL</div>
            </div>

            <div className="keys">
                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>4</div>

                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>5</div>

                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>6</div>

                <div className="key add" style={{
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>+</div>
            </div>

            <div className="keys">
                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>1</div>

                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>2</div>

                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>3</div>

                <div className="key subtract" style={{
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>-</div>
            </div>

            <div className="keys">
                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>.</div>

                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>0</div>

                <div className="key" style={{ 
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>/</div>

                <div className="key multiply" style={{
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>x</div>
            </div>

            <div className="keys bottom">

                <div className="key ddb white" style={{
                    backgroundColor: changes.del_Reset_BgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.del_ResetShadow}`, 
                    color: changes.del_Reset_Equal_TextColor 
                }}>RESET</div>

                <div className="key white red" style={{
                    backgroundColor: changes.equal_Toggle_BgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.equalShadow}`, 
                    color: changes.equalTextColor
                }}>=</div>
                
            </div>
        </section>
    )
}

export default Keypad