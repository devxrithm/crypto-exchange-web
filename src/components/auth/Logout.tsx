import { api } from "@/src/lib/axios";

const Logout = () => {
  const LogoutHandler = async () => {
    try {
      await api.post("/api/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <>
      <div className="border text-white">
        <button onClick={LogoutHandler}>Logout</button>
      </div>
    </>
  );
};

export default Logout;
