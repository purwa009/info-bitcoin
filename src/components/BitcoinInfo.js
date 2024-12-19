import React, { useEffect, useState } from "react";
import axios from "axios";

const BitcoinInfo = () => {
  const [prices, setPrices] = useState({});
  const currencies = ["AUD", "EUR", "GBP", "JPY", "USD"];

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get("https://blockchain.info/ticker");
        setPrices(response.data);
      } catch (error) {
        console.error("Error fetching Bitcoin prices", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Informasi Bitcoin</h1>
      <table
        border="1"
        align="center"
        style={{
          borderCollapse: "collapse",
          width: "20%",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Mata Uang</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency}>
              <td style={{ verticalAlign: "middle" }}>{currency}</td>
              <td style={{ verticalAlign: "middle" }}>
                {prices[currency]?.buy || "Loading..."}
              </td>
              <td style={{ verticalAlign: "middle" }}>
                {prices[currency]?.sell || "Loading..."}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BitcoinInfo;
