import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material";

function DarkMode() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#90caf9',
            },
            secondary: {
                main: '#131052',

            },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="toggleSwitch">
                <Switch checked={darkMode} onChange={toggleDarkMode} />
            </div>
        </ThemeProvider>
    )
}
export default DarkMode;