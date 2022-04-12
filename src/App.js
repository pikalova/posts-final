import React, { useEffect, useState } from 'react';

import { postData } from './postData'

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { Menu } from './components/Menu';

import './index.css';

export const App = () => {
  return (
        <div className='appContainer'>
                <Header/>
                <Menu />
            <div className='content container'>
                <div className='content__cards'>
                    <List list={postData}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};
