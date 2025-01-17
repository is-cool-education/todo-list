import SignInPage from "./pages/SignInPage";
import TaskPageForm from "./pages/TaskPageForm";
import ToDoListPage from "./pages/ToDoListPage";
import { Routes, Route } from "react-router";
import { UserProvider } from "./contexts/UserContext";
import Navigation from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <UserProvider>
      <Navigation />
      <Routes>
        <Route index element={<ToDoListPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="task-show" element={<TaskPageForm />}></Route>
        <Route path="task-show/:id" element={<TaskPageForm />}></Route>
      </Routes>
      <Toaster />
    </UserProvider>
  );
}

export default App;
