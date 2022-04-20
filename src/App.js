import React, { useEffect, useState } from 'react';
import api from './utils/api.js';
import { postData as mockedPostData } from './postData'

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { Menu } from './components/Menu';
import Pagination from 'rc-pagination';

import '../public/assets/index.less';

import './index.css';


export const App = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [postData, setPostData] = useState(mockedPostData);
    const [postDataList, setPostDataList] = useState(postData);

    useEffect(() => {
        api.getData('posts')
            .then((value) => {
                setPostData(value);
            })
    }, [])

    useEffect(() => {
        let data = postData.slice((pageNumber - 1) * 12, pageNumber * 12);
        setPostDataList(data);
    }, [pageNumber]);

    return (
        <div className='appContainer'>
            <Header />
            <Menu />
            <div className='content container'>
                <Pagination onChange={(page) => { setPageNumber(page) }} showTotal={total => `Total ${total} items`} total={postData.length} />
                <div className='content__cards'>
                    <List list={postDataList} />
                </div>
            </div>
            <Footer />
        </div>
    );
};
