import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Company from "./pages/company";
import Home from "./pages/home";
import Candidates from "./pages/candidates";
import Enablers from "./pages/enablers";
import Settlement from "./pages/settlement";
import Profile from "./pages/profile";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/company" element={<Company />}></Route>
                <Route path="/candidates" element={<Candidates />}></Route>
                <Route path="/enablers" element={<Enablers />}></Route>
                <Route path="/settlement" element={<Settlement />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router