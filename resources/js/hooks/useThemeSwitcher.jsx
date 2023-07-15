import { useState, useEffect } from "react";

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        // checking the systems prefered theme
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const storedTheme = window.localStorage.getItem("theme");

        if (storedTheme) {
            setMode(storedTheme);
        } else {
            setMode(mediaQuery.matches ? "dark" : "light");
        }

        const handleChange = (event) => {
            setMode(event.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        window.localStorage.setItem("theme", mode);
        document.documentElement.classList.toggle("dark", mode === "dark");
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
