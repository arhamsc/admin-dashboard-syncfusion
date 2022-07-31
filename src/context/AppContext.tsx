import { createContext, FC, ReactNode, useState } from 'react';
import { ContextType } from '../data/models/context';

const initialContext: ContextType = {
    sideBarOpen: false,
    toggleSideBar: () => null,
};

export const AppContext = createContext<ContextType>(initialContext);

const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [sideBar, setSideBar] = useState(true);

    const toggleSideBarHandler = () => setSideBar((prevVal) => !prevVal);

    const appState: ContextType = {
        sideBarOpen: true,
        toggleSideBar: toggleSideBarHandler,
    };
    return (
        <AppContext.Provider value={appState}>{children} </AppContext.Provider>
    );
};

export default AppContextProvider;
