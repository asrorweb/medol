import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "./routes";
import { NavTopInfo, Navigation } from "./components";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/МАГАЗИН");
    }, []);

    return (
        <>
            <NavTopInfo />
            <Navigation />
            <Routes>
                {routes.map((data) => (
                    <Route
                        key={uuidv4()}
                        path={data.path}
                        element={data.element}
                    />
                ))}
            </Routes>
        </>
    );
}

export default App;
