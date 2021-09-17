import React, { useState } from "react";
import { data } from './data';

export const DataContext = React.createContext();
  export const DataProvider = ({children}) => {
    const initialState = {
        dao:data, searchTerm: ''
    };
    const [state, setState] = useState(initialState);

    return (
    <DataContext.Provider value={[state]}>
      {children}
    </DataContext.Provider>
    )
  }