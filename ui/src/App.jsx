import SignInPage from "./pages/SignInPage";
import ToDoListPage from "./pages/ToDoListPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="sign-in" element={<SignInPage />} />
      <Route index element={<ToDoListPage />} />
    </Routes>
  );
}

export default App
