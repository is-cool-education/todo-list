import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";

function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    navigate("/sign-in");
  };

  return (
    <nav>
      <h1>To-do List</h1>
      <button onClick={handleLogout}>Log out</button>
    </nav>
  );
}

export default Navigation;
