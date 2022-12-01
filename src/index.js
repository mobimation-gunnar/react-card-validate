import React from "react";
import { render } from "react-dom";
import CreditCards from "./components/CreditCards";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const App = () => (
    <div style={styles}>
        <CreditCards />
    </div>
);

render(<App />, document.getElementById("root"));
