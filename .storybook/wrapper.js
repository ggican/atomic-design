import React from "react";
import { ThemeProvider } from "styled-components";
import "../src/styles/index.css";
import tokens from "../src/components/__tokens";

const Wrapper = ({ story }) => {
    return <ThemeProvider theme={tokens}>{story()}</ThemeProvider>;
};

export default Wrapper;
