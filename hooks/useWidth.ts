import { useState, useEffect } from "react";
const useDeviceSize = () => {

    const [width, setWidth] = useState(0)

    const handleWindowResize = () => {
        console.log(window)
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return width

}

export default useDeviceSize