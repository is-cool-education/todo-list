import React, { createContext, useState, useEffect } from "react";
import { getUser } from "../api/users.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getUser();
        setCurrentUser(response.data);
      }
    }
    loadUser();
  }, []);

  const login = async (token) => {
    localStorage.setItem("token", token);
    try {
      const response = await getUser();
      setCurrentUser(response.data);
    } catch (error) {
      console.log("Erro ao buscar dados do usuário", error);
    }
  };

  return <UserContext.Provider value={{ currentUser, setCurrentUser, login }}>{children}</UserContext.Provider>;
};
