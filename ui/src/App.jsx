import SignInPage from "./pages/SignInPage";
import TaskPageForm from "./pages/TaskPageForm";
import ToDoListPage from "./pages/ToDoListPage";
import { Routes, Route } from "react-router";
import { UserProvider } from "./contexts/UserContext";
import Navigation from "./components/Navigation";

function App() {
  return (
    <UserProvider>
      <Navigation />
      <Routes>
        <Route path="sign-in" element={<SignInPage />} />
        <Route index element={<ToDoListPage />} />
        <Route path="task-show" element={<TaskPageForm />}></Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
