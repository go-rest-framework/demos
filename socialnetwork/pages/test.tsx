import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    "&.Mui-checked": {
        color: theme.status.danger,
    },
}));

const theme = createTheme({
    status: {
        danger: orange[500],
    },
});

export default function CustomStyles() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <CustomCheckbox defaultChecked />
            <Button variant="contained" color="primary">
                Main call to action
            </Button>
        </ThemeProvider>
    );
}
