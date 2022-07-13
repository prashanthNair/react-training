import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Company from "./pages/company";
import Home from "./pages/home";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/company" element={<Company />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router