import React, { useContext } from 'react'
import { AppContext } from './App'

const Footer = () => {
    const {themeNumber} = useContext(AppContext);
    return (
        <div className="attribution"  style={{color: themeNumber==='2' && "black"}}>
            Challenge by 
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer"> {/*Link to Frontend Mentor Official page*/}
                Frontend Mentor
            </a>. 
            Coded by 
            <a href="https://github.com/AshongAbdallah06" target='_blank' rel="noreferrer"> {/*Link to my Github page*/}
                Ashong Abdallah
            </a>.
        </div>
    )
}

export default Footer