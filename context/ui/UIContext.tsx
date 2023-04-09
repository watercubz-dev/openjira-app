import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;

    // Methods 
    openSideMenu: () => void;
    CloseSideMenu: () => void
}


export const UIContext = createContext({} as ContextProps );