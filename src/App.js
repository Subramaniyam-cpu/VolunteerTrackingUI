import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registerpage from "./Pages/Registerpage";
import Loginpage from "./Pages/Loginpage";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Registerpage/>} />
                    <Route path="/login" element={<Loginpage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
