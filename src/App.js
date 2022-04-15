import React, { useEffect, useState } from 'react';

import { postData } from './postData'

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { Menu } from './components/Menu';
import Pagination from 'rc-pagination';

import '../public/assets/index.less';

import './index.css';


export const App = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [postDataList, setPostDataList] = useState(postData);

    useEffect(()=> {
        let data = postData.slice((pageNumber - 1) * 12, pageNumber * 12);
        setPostDataList(data);
    },[pageNumber]);

  return (
        <div className='appContainer'>
                <Header/>
                <Menu />
            <div className='content container'>
                <Pagination onChange={(page) => {setPageNumber(page)}}  showTotal={ total => `Total ${total} items`} total={postData.length} />
                <div className='content__cards'>
                    <List list={postDataList}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};
