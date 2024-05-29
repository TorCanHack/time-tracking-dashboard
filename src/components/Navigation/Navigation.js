import React, { useContext } from "react";
import avi from '../../images/image-jeremy.png'
import '../Navigation/Navigation.css'
import { TimeframeContext } from "../ContextManager/ContextManager";




export default function Navigation (){

    const { setTimeframe} = useContext(TimeframeContext);
    
    return (
        <article className="Navigation-wrapper">
            <div className="bio-data">
                <img className="avi" src={avi} alt=""/>
                <p>Report for</p>
                <h1>Jeremy Robinson</h1>
            </div>

            <nav className="time-nav">
                <button onClick={() => setTimeframe('daily')}>Daily</button>
                <button onClick={() => setTimeframe('weekly')}>Weekly</button>
                <button onClick={() => setTimeframe('monthly')}>Monthly</button>

            </nav>
 

        </article>
    )
}