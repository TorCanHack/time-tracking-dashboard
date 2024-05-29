import React, { useContext } from "react";
import PlayIcon from '../../images/icon-play.svg';
import Activity from "../Activity/Activity";
import Data from '../../data.json';
import { TimeframeContext } from "../ContextManager/ContextManager";

export default function Play () {

    const { timeframe } = useContext(TimeframeContext);
    const playData = Data.filter((item) => item.title === "Play");

    return (
        <>
            {playData.map((item) => 
                       <Activity
                       icon={PlayIcon}
                       title={item.title}
                       currentHours={item.timeframes[timeframe].current}
                       previousHours={item.timeframes[timeframe].previous}
                       accentColor="#55C2E6"
                   />
            )}
        </>
 
    )
}