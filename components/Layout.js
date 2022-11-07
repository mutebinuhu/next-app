import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div className='content'>
           <Nav/>
             {children}
           <Footer/> 
        </div>
    );
}

export default Layout;
