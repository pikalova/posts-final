import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, UNSAFE_RouteContext } from "react-router-dom";

import api from './utils/api.js';
import { postData as mockedPostData } from './postData'

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { Menu } from './components/Menu';
import {FormPost} from './components/FormPost'
import { ShowPost } from './components/ShowPost/index.js';
import Pagination from 'rc-pagination';

import '../public/assets/index.less';

import './index.css';


export const App = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [postData, setPostData] = useState(mockedPostData);
    const [postDataList, setPostDataList] = useState(postData);
    const [myUserData, setMyUserData] = useState({});


    useEffect(() => {
        api.getData('users/me')
            .then((value) => {
                setMyUserData({ _id: value._id, name: value.name, avatar: value.avatar });
            })
            .catch((err) => console.log(err))
        api.getData('posts')
            .then((value) => {
                setPostData(value);
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        let data = postData?.slice((pageNumber - 1) * 12, pageNumber * 12);
        setPostDataList(data);
    }, [pageNumber, postData]);

    return (
        <div className='appContainer'>


            <Header myUser={myUserData} />
            
            <Routes>
                <Route path="/" element={
                    <div>
                        <Menu/>
                        <div className='content container'>
                            <Pagination onChange={(page) => { setPageNumber(page) }} current={pageNumber} pageSize={12} showTotal={total => `Total ${total} items`} total={postData.length} />
                            <div className='content__cards'>
                                <List list={postDataList} myUserData={myUserData} setPostData={setPostData} />
                            </div>
                        </div>
                    </div>
                } />
                <Route path="add" element={<FormPost setPostData={setPostData} setPageNumber={setPageNumber}/>} />
                <Route path="/:itemId" element={<ShowPost myUserData={myUserData} setPostData={setPostData}/>} />
                <Route path="about" element={<div>About</div>} />
            </Routes>

            <Footer />

        </div>
    );
};
