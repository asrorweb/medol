import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { NavTopInfo, Navigation } from "./components";
import { v4 as uuidv4 } from "uuid";
function App() {
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
