import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  function onclick() {
    localStorage.setItem("token", "");
    navigate("/signin");
  }

  return (
    <div className="hover:text-gray-300">
      <button onClick={onclick}>Log out</button>
    </div>
  );
};
