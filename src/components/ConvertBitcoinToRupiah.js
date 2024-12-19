import React, { useState, useEffect } from "react";
import axios from "axios";

const ConvertBitcoinToRupiah = () => {
  const [bitcoin, setBitcoin] = useState("");
  const [rupiah, setRupiah] = useState(null);
  const usdRate = 15500;

  useEffect(() => {
    const convertToRupiah = async () => {
      if (bitcoin) {
        try {

          const response = await axios.get("https://blockchain.info/ticker");
          const btcToUsd = response.data.USD.last;

          // Konversi Bitcoin ke Rupiah
          const totalRupiah = bitcoin * btcToUsd * usdRate;
          setRupiah(totalRupiah);
        } catch (error) {
          console.error("Error converting Bitcoin to Rupiah", error);
        }
      } else {
        setRupiah(null);
      }
    };

    convertToRupiah();
  }, [bitcoin]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Konversi Bitcoin ke Rupiah</h1>
      <h3 style={{ textAlign: "center" }}>Kurs 1 USD = 15500 IDR </h3>
      <input
        type="number"
        value={bitcoin}
        onChange={(e) => setBitcoin(e.target.value)}
        placeholder="Masukkan Jumlah BTC"
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "3px solid #ccc",
          borderRadius: "4px",
          textAlign: "center",
        }}
      />
      {rupiah !== null && (
        <p>
          {bitcoin} BTC = {rupiah.toLocaleString("id-ID")} IDR
        </p>
      )}
    </div>
  );
};

export default ConvertBitcoinToRupiah;
