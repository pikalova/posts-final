import React, { useEffect, useState, useContext } from 'react';
import { Routes, Route, Link, UNSAFE_RouteContext } from "react-router-dom";

import api from './utils/api.js';
import { postData as mockedPostData } from './postData'

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { Menu } from './components/Menu';
import { FormPost } from './components/FormPost'
import { ShowPost } from './components/ShowPost/index.js';
import { UserAuth } from './components/UserAuth/index.js';
import { CreateUser } from './components/CreateUser/index.js';

import UserContext from './contexts/UserContext'
import Pagination from 'rc-pagination';

import '../public/assets/index.less';

import './index.css';


export const App = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [postData, setPostData] = useState([]);
    const [postDataList, setPostDataList] = useState(postData);
    const [myUserData, setMyUserData] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token'))


    useEffect(() => {
        api.getData('users/me', token)
            .then((value) => {
                setMyUserData({ _id: value._id, name: value.name, avatar: value.avatar });
            })
            .catch((err) => console.log(err))
        api.getData('posts', token)
            .then((value) => {
                setPostData(value);
            })
            .catch((err) => console.log(err))
    }, [token])

    useEffect(() => {

        api.getData('posts', token)
            .then((value) => {
                setPostData(value, token);
            })
            .catch((err) => console.log(err))
    }, [myUserData])

    useEffect(() => {
        let data = postData?.slice((pageNumber - 1) * 12, pageNumber * 12);
        setPostDataList(data);
    }, [pageNumber, postData]);
    return (
        <div className='appContainer'>

            <UserContext.Provider value={{ myUserData, setMyUserData }}>
                <Header />
                <Routes>
                    <Route path="/" element={
                        token ? (
                            <div>
                                <Menu />
                                <div className='content container'>
                                    <Pagination onChange={(page) => { setPageNumber(page) }} current={pageNumber} pageSize={12} showTotal={total => `Total ${total} items`} total={postData.length} />
                                    <div className='content__cards'>
                                        <List list={postDataList} setPostData={setPostData} />
                                    </div>
                                </div>
                            </div>) : (<UserAuth />)
                    } />
                    <Route path="add" element={<FormPost setPostData={setPostData} setPageNumber={setPageNumber} />} />
                    <Route path="/:itemId" element={<ShowPost token={token} setPostData={setPostData} />} />
                    <Route path="auth" element={<UserAuth setToken={setToken} />} />
                    <Route path="createuser" element={<CreateUser setToken={setToken} />} />
                </Routes>

                <Footer />
            </UserContext.Provider>
        </div>
    );
};
