import React, { createContext, useEffect, useState } from 'react';

export const GroupData = createContext();

export const AppProvider = ({ children }) => {
   
    const [groups, setGroups] = useState(() => {
        const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
        return storedGroups;
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
