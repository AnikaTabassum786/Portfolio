import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;