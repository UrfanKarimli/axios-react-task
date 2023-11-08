import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Details from "./pages/Details";
import Persons from "./pages/Persons";
import Header from "./components/Header";
import CreatPerson from "./pages/CreatPerson";
import UptadePerson from "./pages/UptadePerson";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/persons" element={<Persons/>} />
        <Route path="/create-person" element={<CreatPerson/>} />
        <Route path="/update-person/:id" element={<UptadePerson/>} />
      </Routes>
    </div>
  );
}

export default App;
