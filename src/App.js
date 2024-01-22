import "./App.css";
import Life from "./component/Life/Life";
import About from "./component/about/About";
import Business from "./component/business/Business";
import Capabilities from "./component/capabilities/Capabilities";

import Contact from "./component/contact/Contact";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carere from "./component/careeres/Carere";
function App() {
    return (
        <div>
            <BrowserRouter basename="/">
                <div
                    style={{
                        zIndex: "1",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                    }}
                >
                    <Navbar />
                </div>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/home" element={<Home />}></Route>
                        <Route
                            exact
                            path="/capablities"
                            element={<Capabilities />}
                        ></Route>
                        <Route
                            exact
                            path="/business"
                            element={<Business />}
                        ></Route>
                        <Route
                            exact
                            path="/careere"
                            element={<Carere />}
                        ></Route>
                        <Route exact path="/life" element={<Life />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
