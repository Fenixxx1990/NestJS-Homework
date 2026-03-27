"use client";

import type { JSX, ReactNode } from "react";
import { createContext, useContext, useState } from "react";

// Тип для данных контекста
interface AppContextType {
  githubUrl: string;
  setGithubUrl: (url: string) => void;
}

// Значение по умолчанию
const AppContext = createContext<AppContextType | undefined>(undefined);

// Провайдер компонента
export function AppProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  // Храним ссылку на GitHub
  const [githubUrl, setGithubUrl] = useState("https://github.com/Fenixxx1990");

  const value = {
    githubUrl,
    setGithubUrl,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Хук для удобного использования контекста
export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
