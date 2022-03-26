import logo from "./logo.svg";
import "./App.css";
import RegistrationForm from "./component/form/index";
import { ShowData } from "./component/showData/showDataRedux";
import { ShowDataBackened } from "./component/showData/showDataBackend";
import EditForm from './component/showData/editForm'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/show" element={<ShowData />} />
          <Route path="/backend" element={<ShowDataBackened />} />
          <Route path="/editform" element={<EditForm/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
