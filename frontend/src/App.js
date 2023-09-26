import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup.jsx";
function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
