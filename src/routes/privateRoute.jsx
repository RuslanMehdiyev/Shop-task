import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (!localStorageToken) {
      navigate("sign-in");
    }
  }, [navigate]);

  return children;
}
