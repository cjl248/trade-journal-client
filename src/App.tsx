import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./containers/LandingPage/LandingPage";
import TradeContainer from "./containers/TradeContainer/TradeContainer";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/trades/:tradeId/*" element={<TradeContainer />} />
    </Routes>
  );
}

export default App;
