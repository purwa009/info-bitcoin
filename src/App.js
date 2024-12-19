import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BitcoinInfo from "./components/BitcoinInfo";
import ConvertRupiahToBitcoin from "./components/ConvertRupiahToBitcoin";
import ConvertBitcoinToRupiah from "./components/ConvertBitcoinToRupiah";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BitcoinInfo />} />
        <Route
          path="/convert-rupiah-to-bitcoin"
          element={<ConvertRupiahToBitcoin />}
        />
        <Route
          path="/convert-bitcoin-to-rupiah"
          element={<ConvertBitcoinToRupiah />}
        />
      </Routes>
    </Router>
  );
};

export default App;
