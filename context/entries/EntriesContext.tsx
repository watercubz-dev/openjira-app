import { createContext } from 'react';
import { Entry } from '../../interfaces';


interface ContextProps {
   entries: Entry[];  // array 
}


export const EntriesContext = createContext({} as ContextProps );