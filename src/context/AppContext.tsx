import { createContext, FC, ReactNode, useState } from 'react';
import { ContextType } from '../data/models/context';

const initialContext: ContextType = {
    sideBarOpen: false,
    toggleSideBar: (menuOpen: Boolean) => Boolean,
};

export const AppContext = createContext<ContextType>(initialContext);

const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [sideBar, setSideBar] = useState<Boolean>(true);

    const appState: ContextType = {
        sideBarOpen: sideBar,
        toggleSideBar: setSideBar,
    };
    return (
        <AppContext.Provider value={appState}>{children} </AppContext.Provider>
    );
};

export default AppContextProvider;
