import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    // Methods 
    openSideMenu: () => void;
    CloseSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void
    startDragging: () => void
    endDragging: () => void

}


export const UIContext = createContext({} as ContextProps );