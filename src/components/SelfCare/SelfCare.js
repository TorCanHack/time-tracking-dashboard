import React, { useContext } from "react";
import SelfCareIcon from '../../images/icon-self-care.svg'
import Activity from "../Activity/Activity";
import Data from '../../data.json';
import { TimeframeContext } from "../ContextManager/ContextManager";


export default function SelfCare () {

    const { timeframe } = useContext(TimeframeContext);
    const selfCareData = Data.filter((item) => item.title === "Self Care");

    return (
        <>
            {selfCareData.map((item) => 
                <Activity
                    icon={SelfCareIcon}
                    title={item.title}
                    currentHours={item.timeframes[timeframe].current}
                    previousHours={item.timeframes[timeframe].previous}
                    accentColor="#F1C75B"
                />
            )}
        </>
   
    )
}