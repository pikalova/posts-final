import React, { useContext } from 'react';
import { Card } from '../Card';
import UserContext from '../../contexts/UserContext';

import './index.css';

export const List = ({ list, setPostData }) => {
    const {myUserData} = useContext(UserContext)

    return (
        <div className="cards">
            {list?.map((item, i) => (
                 <Card 
                 key={i} 
                 myUserData={myUserData} 
                 item={item} 
                 setPostData={setPostData}
                 />
            ))}
        
        </div>
    );
};
