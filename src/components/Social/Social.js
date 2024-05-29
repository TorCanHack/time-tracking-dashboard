import React, { useContext } from "react";
import SocialIcon from '../../images/icon-social.svg';
import Activity from "../Activity/Activity";
import Data from '../../data.json';
import { TimeframeContext } from "../ContextManager/ContextManager";


export default function Social () {

    const { timeframe } = useContext(TimeframeContext);
    const socialData = Data.filter((item) => item.title === "Social");

    return (
        <>
            {socialData.map((item) =>
                <Activity
                    icon={SocialIcon}
                    title={item.title}
                    currentHours={item.timeframes[timeframe].current}
                    previousHours={item.timeframes[timeframe].previous}
                    accentColor="#7335D2"
               />
            )}
        </>
 
    )
}
