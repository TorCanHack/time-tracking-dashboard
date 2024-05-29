import React, { useContext } from "react";
import ExerciseIcon from '../../images/icon-exercise.svg'
import Activity from "../Activity/Activity";
import Data from '../../data.json'
import { TimeframeContext } from "../ContextManager/ContextManager";


export default function Exercise () {

    const { timeframe } = useContext(TimeframeContext)

    const exerciseData = Data.filter((item) => item.title === "Exercise")

    return (
        <>
            {exerciseData.map((item) =>
                <Activity
                    icon={ExerciseIcon}
                    title={item.title}
                    currentHours={item.timeframes[timeframe].current}
                    previousHours={item.timeframes[timeframe].previous}
                    accentColor="#4BCF82"
                />
            )}
        </>
     
    )
}