import React from 'react';
import Sign from './sign';
import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';


export default function Header(){
    const Islogin=()=>{
        if(localStorage.getItem('user')) return (<div class="user-panel"><a href="/profile" >
            <Avatar style={{ backgroundColor: '#FFB320' }} size="large" icon={<UserOutlined />} /> </a></div>)
        else return (<Sign/>)
    }
    return(<header class="header-section">
    <div class="container">
    
    <a class="site-logo" href="/">
    <img src="assests/img/logo.png"  style={{width:"90px",height:"50px"}} alt="" />
    </a>
        {Islogin()}
    
    <div class="nav-switch">
    <i class="fa fa-bars"></i>
    </div>
    
    <nav class="main-menu">
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/tournament">Tournaments</a></li>
    <li><a href="/team">Teams</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact Us</a></li>
    </ul>
    </nav>
    </div>
    </header> )
}