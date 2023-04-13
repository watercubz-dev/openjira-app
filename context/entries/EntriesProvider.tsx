import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from "./";

import { Entry } from "../../interfaces";

export interface EntriesState {
  entries: Entry[];
  children?: React.ReactNode;
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "este peaaue esta en mdo prueba cualqquiera problea se mane",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "este peaaue esta en mdo prueba cualqquiera problea se mane",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "este peaaue esta en mdo prueba cualqquiera problea se mane",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntrisState: FC<EntriesState> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createdAt: 0,
    };
     
    dispatch({
      type: "[Entry]  Add-Entry",
      payload: newEntry,
    });
  };
   
  const updateEntry = ( entry: Entry) => {
    dispatch({ type: '[Entry]  Update-Entry', payload: entry });
}


  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
