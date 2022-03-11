import logo from "./logo.svg";
import "./App.css";
import RegistrationForm from "./component/form/index";
import { ShowData } from "./component/form/showData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/show" element={<ShowData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
