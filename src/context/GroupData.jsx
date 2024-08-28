import React, { createContext, useEffect, useState } from 'react';

export const GroupData = createContext();

export const AppProvider = ({ children }) => {
   
    // localStorage.clear()
    const [groups, setGroups] = useState(() => {
        return  JSON.parse(localStorage.getItem('groups')) || [];
      
    });

    useEffect(() => {
        localStorage.setItem('groups', JSON.stringify(groups));
    }, [groups]);

    return (
        <GroupData.Provider value={{ groups, setGroups }}>
            {children}
        </GroupData.Provider>
    );
};
 