import React from "react";
import "../src/components/Body/body.css";
import Nav from "./components/Body/Nav";
import Main from "./components/Body/Main";
import Menu from "./components/Body/Menu";
import Footer from "./components/Body/Footer";

function App() {
    return (
        <>
            <Nav />
            <Main />
            <Menu />
            <Footer />
        </>
    );
}

export default App;
