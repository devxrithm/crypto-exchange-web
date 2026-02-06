import { api } from "@/src/lib/axios";
import { useEffect, useState } from "react";

const WalletDashboard = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await api.get("/wallet/balance");
        setBalance(res.data);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };

    fetchBalance();
  }, []);

  return <div>{balance}</div>;
};

export default WalletDashboard;
