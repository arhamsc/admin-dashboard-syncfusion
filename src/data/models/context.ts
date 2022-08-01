import { Dispatch, SetStateAction } from 'react';

export type ContextType = {
    sideBarOpen: Boolean;
    toggleSideBar: Dispatch<SetStateAction<Boolean>>;
};
