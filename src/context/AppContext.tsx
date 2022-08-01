import React, { createContext, FC, ReactNode, useState } from 'react';
import { ContextType } from '../data/models/context';

// const initialContext: ContextType = {
//     sideBarOpen: false,
//     toggleSideBar: null,
// };

export const AppContext = createContext<ContextType | null>(null);

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
