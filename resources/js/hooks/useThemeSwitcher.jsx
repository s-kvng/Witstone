import React, { useState, useEffect } from "react";

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");

    console.log(`theme switcher`)

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        console.log("pref -",userPref)
        console.log("media -",mediaQuery)

        const handleChange = () => {
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);

                console.log("pat-",mode ,",",check)

                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
            else{
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                console.log("mat-",mode ,",",check)

                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change" , handleChange);
    },[]);

    useEffect(()=>{
        if(mode === "dark"){
           window.localStorage.getItem("theme", "dark");
           document.documentElement.classList.add("dark"); 
        }
        else{
            window.localStorage.getItem("theme", "light");
           document.documentElement.classList.remove("dark"); 
        }
    }, [mode]);


    return [mode , setMode];
};

export default useThemeSwitcher;
