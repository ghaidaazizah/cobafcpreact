import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {ChakraProvider, CSSReset, extendTheme} from "@chakra-ui/react"

const theme = extendTheme({
    style: {
        global: () => ({
            "*": {
                boxSizing: "border-box",
                fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segeo UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
            },
            body: {
                width: "100vw",
                minHeight: "100vh",
                margin: "0%",
                backgroundColor: "rgb(226 232 2400 / 1)",
            },
            "#root": {
                width: "100%",
                minHeight: "100vh",
                height: "fit-content",
            },
        }),
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <React.StrictMode>
            <App /> 
            </React.StrictMode>
        </BrowserRouter>
    </ChakraProvider>
);
