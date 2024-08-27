import React, { useContext } from 'react';
import { GroupData } from '../context/GroupData';

function Sidebar() {
    const { groups } = useContext(GroupData);
    
    return (
        <div>
            {groups.map((group, index) => (
                <div key={index}>
                    {group.groupName} - {group.selectedColor}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
