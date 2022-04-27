import React from 'react';
import { Card } from '../Card';

import './index.css';

export const List = ({ list,myUserData, setPostData }) => {
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
