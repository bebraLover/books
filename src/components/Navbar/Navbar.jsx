import React from 'react';
import {logo,friends,notification,bookmark,dashboard,settings} from "../../assets";
import './Navbar.scss'
import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <div className={'navbar'}>
           <Link to={'/'}><img src={logo} className={'logo'}/></Link>
            <Link to={'/'}> <img src={dashboard} className={'icons'}/></Link>
            <img src={notification} className={'icons'}/>
            <img src={bookmark} className={'icons'}/>
            <img src={friends} className={'icons'}/>
            <img src={settings} className={'icons'}/>
        </div>
    );
};

export default Navbar;
