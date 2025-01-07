import React, { useEffect, useState } from "react"
import { useLocation, Switch } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"

const CustomSwitch = ({ children }) => {
    const [progress, setProgress] = useState(false)
    const [prevLoc, setPrevLoc] = useState("")
    const location = useLocation()
    TopBarProgress.config({
        barColors: {
            "0": "gray",
            "1.0": "#fff"
        },
        barThickness: 5,
        shadowBlur: 5
    });
    useEffect(() => {
        // window.scrollTo(0, 0)
        setPrevLoc(location.pathname)
        setProgress(true)
        if (location.pathname === prevLoc) {
            setPrevLoc('')
            //thanks to ankit sahu
        }
    }, [location])

    useEffect(() => {
        setProgress(false)
    }, [prevLoc])
    // window.console.clear()
    return (
        <>
            {progress && <TopBarProgress />}
            <Switch>{children}</Switch>
        </>
    )
}

export default CustomSwitch
