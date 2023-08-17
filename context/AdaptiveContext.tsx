import { useState, useEffect, createContext } from 'react';
import useWidth from "@/hooks/useWidth";

export const AdaptiveContext = createContext<string>("");

interface IContainer {
    className?: string;
    children: React.ReactNode | string | null;
}

const getPageSize = (width: number) => {
    if(width > 1360) {
        return "desktop-large";
    }
    if(width > 1140) {
        return "desktop";
    }
    if(width > 600) {
        return "tablet";
    }
    if(width >= 320 && width <=600) {
        return "mobile";
    }
    return "unknown";
}

const AdaptiveProvider:React.FC<IContainer> = ({children}) => {
    const width = useWidth();
    const adaptive = getPageSize(width);

    return (<AdaptiveContext.Provider value={adaptive}>
        {children}
    </AdaptiveContext.Provider>)
}

export default AdaptiveProvider;