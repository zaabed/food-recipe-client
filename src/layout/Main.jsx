import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header/Header';
import Footer from '../components/shared/Footer/Footer';
import Interested from '../components/shared/Interested/Interested';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Interested></Interested>
            <Footer></Footer>
        </div>
    );
};

export default Main;