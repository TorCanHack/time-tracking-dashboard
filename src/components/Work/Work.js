import React, { useContext } from "react";
import WorkIcon from '../../images/icon-work.svg';
import Activity from "../Activity/Activity";
import Data from '../../data.json'
import { TimeframeContext } from "../ContextManager/ContextManager";







export default function Work () {

    const { timeframe} = useContext(TimeframeContext);

    const workData = Data.filter((item) => item.title === "Work")

    return (
        <>
            {workData.map((item) => 
                <Activity
                    icon={WorkIcon}
                    title={item.title}
                    currentHours={item.timeframes[timeframe].current}
                    previousHours={item.timeframes[timeframe].previous}
                    accentColor="#FF8B64"
                />)
            }
        </>
        
    )
}


