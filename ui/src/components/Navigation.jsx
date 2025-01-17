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
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" className="text-decoration-none text-white fs-1">
          To-do List
        </Link>
        {currentUser ? (
          <div className="d-flex gap-2">
            <Link to="/task-show" className="btn btn-custom fw-bold">
              Criar tarefa
            </Link>
            <button onClick={handleLogout} className="btn btn-custom fw-bold">
              Log out
            </button>
          </div>
        ) : (
          <Link to="/sign-in" className="btn btn-custom fw-bold">
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
