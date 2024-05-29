import React, { useContext } from "react";
import StudyIcon from '../../images/icon-study.svg'
import Activity from "../Activity/Activity";
import Data from '../../data.json';
import { TimeframeContext } from "../ContextManager/ContextManager";


export default function Study () {

    const { timeframe } = useContext(TimeframeContext);
    const studyData = Data.filter((item) => item.title === "Study");

    return (
        <>
            {studyData.map((item) => 
                <Activity
                    icon={StudyIcon}
                    title={item.title}
                    currentHours={item.timeframes[timeframe].current}
                    previousHours={item.timeframes[timeframe].previous}
                    accentColor="#FF5E7D"
                />
            )}
        </>

    )
}