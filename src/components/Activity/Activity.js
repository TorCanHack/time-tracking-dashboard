import React from "react";
import '../Activity/Activity.css'

export default function Activity ({icon, title, currentHours, previousHours, accentColor}) {
    return (
        <article>
            <div className="Activity-wrapper" style={{backgroundColor: accentColor}}>
                <img className="icon" src={icon}  alt={`${title} Icon`}/>
           
                <div className="stats-display">
                    <div className="title-and-currenthrs">
                        <p>{title}</p>
                        <h2>{currentHours}hrs</h2>

                    </div>
                    <div className="lastweek-and-previoushrs">
                        <p>...</p>
                        <h3>Last week -{previousHours}hrs</h3>
                    </div>
                </div>
                

            </div>

        </article>
    )
}