import { createContext, useState } from "react";
import { IAppContext, IAppState } from "../types";
import { broadcastersDataMock } from "../utils/broadcastersDataMock";

export const AppContext = createContext({} as IAppContext);

const initialAppState = {
  broadcasters: broadcastersDataMock,
  searchInputValue: "",
  news: [],
  isLoading: false,
};

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState<IAppState>(initialAppState);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};
