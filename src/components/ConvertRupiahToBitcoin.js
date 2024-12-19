import React, { useState, useEffect } from "react";
import axios from "axios";

const ConvertRupiahToBitcoin = () => {
  const [rupiah, setRupiah] = useState("");
  const [bitcoin, setBitcoin] = useState(null);
  const usdRate = 15500;

  useEffect(() => {
    const convertToBitcoin = async () => {
      if (rupiah) {
        const usdValue = rupiah / usdRate;
        try {
          const response = await axios.get(
            `https://blockchain.info/tobtc?currency=USD&value=${usdValue}`
          );
          setBitcoin(response.data);
        } catch (error) {
          console.error("Error converting to Bitcoin", error);
        }
      } else {
        setBitcoin(null); // Reset hasil jika input kosong
      }
    };

    convertToBitcoin();
  }, [rupiah]); // Dipicu setiap kali 'rupiah' berubah

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        flexDirection: "column", 
        border:"15px"
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        <b>Konversi Rupiah Ke Bitcoin</b>
      </h1>
      <h3 style={{ textAlign: "center" }}>Kurs 1 USD = 15500 IDR </h3>

      <input
        type="number"
        value={rupiah}
        onChange={(e) => setRupiah(e.target.value)}
        placeholder="Masukkan Jumlah IDR"
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "3px solid #ccc",
          borderRadius: "4px",
          textAlign: "center",
        }}
      />
      {bitcoin !== null && (
        <p>
          {rupiah} IDR = {bitcoin} BTC
        </p>
      )}
    </div>
  );
};

export default ConvertRupiahToBitcoin;
