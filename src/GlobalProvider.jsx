import { createContext, useContext, useState } from "react";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalVar, setGlobalVar] = useState("0"); // 初始化全局变量

  return (
    <GlobalContext.Provider value={{ globalVar, setGlobalVar }}>
      {children}
    </GlobalContext.Provider>
  );
};

// 创建钩子函数用于消费Context
export const useGlobal = () => {
  return useContext(GlobalProvider);
};
