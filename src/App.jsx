import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import {GlobalStyles, Wrap} from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {routes} from "./routes/route/routes";
import "./styles/font.css";
import {LOGIN, SIGN_UP} from "./routes/route/path";

function App() {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle((prev) => !prev);
    };
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setToggle(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Wrap
            className={toggle ? " active" : ""}
            style={{
                height: toggle ? "100vh" : "auto",
                overflow: toggle ? "hidden" : "auto",
            }}
        >
            <Router basename={import.meta.env.VITE_PUBLIC_URL}>
                <GlobalStyles />
                <Header toggleMenu={toggleMenu} toggle={toggle} />
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                </Routes>
                <Footer />
            </Router>
        </Wrap>
    );
}

export default App;
