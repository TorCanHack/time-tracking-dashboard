import React, {createContext, useState} from "react";

export const TimeframeContext = createContext();

export const TimeframeProvider = ({children}) => {
    const [timeframe, setTimeframe] = useState('weekly');

    return (
        <TimeframeContext.Provider value={{timeframe, setTimeframe}}>
            {children}
        </TimeframeContext.Provider>
    )
}