import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddFlat from "./components/addflat";
import Dashboard from "./components/dashboard";
import Flatinfo from "./components/flatinfo";
import Header from "./components/header";
import Payment from "./components/payment";
import Rent from "./components/rent";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/addflat" element={<AddFlat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flatinfo" element={<Flatinfo />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
