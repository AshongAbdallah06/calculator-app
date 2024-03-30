import { useState, createContext } from 'react';
import './App.css';
import Keypad from './Keypad';
import Screen from './Screen';
import Top from './Top';
import Footer from './Footer';

export const AppContext = createContext();

function App() {
    const [themeNumber, setThemeNumber] = useState("1");
    // const [bgColor, setBgColor] = useState("hsl(222, 26%, 31%)");

    const [changes, setChanges] = useState({
        mainBgColor: null,
        textColor: null,
        keyPad_ToggleBgColor: null,
        screenBgColor: null,
        keyBgColor: null,
        keyColor: null,
        keyShadow: null,
        del_Reset_BgColor: null,
        del_Reset_Equal_TextColor: null,
        del_ResetShadow: null,
        equal_Toggle_BgColor: null,
        equalShadow: null,
        equalTextColor: null 
    })
    return (
        <div 
            className="App"
            style={{ backgroundColor: changes.mainBgColor }}>
            <AppContext.Provider value={{ 
                themeNumber, 
                setThemeNumber, 
                changes,
                setChanges
               }}>
                <div className="content">
                    <Top />

                    <Screen />

                    <Keypad />

                    <Footer />
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
