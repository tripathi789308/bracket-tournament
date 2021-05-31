import React, { useEffect,useState } from 'react';
import {Button} from 'antd'
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import axios from 'axios';
import Constants from '../../constants'

export default function Profile(){

    const [data,setData] = useState({});

    let history = useHistory();
    console.log(localStorage.getItem('user'));
    const handleClick = e =>{
        e.preventDefault();
        localStorage.removeItem('user');
        history.push('/');
    }

    useEffect(()=>{
        async function fetchData(){
            axios.get(`${Constants.base_url}/auth/${localStorage.getItem('user')}`)
            .then(res=>{
                if(res.status===200){
                setData(res.data)
            }else{
                console.log("Something is wrong");
            }
            })
            .catch(err=>{
                console.log(err);
            })
        }
        fetchData();
    },[])

    return (
        <>
        <Header/>
        <p>First Name :   {data.firstName} </p>
        <p>Last Name :   {data.lastName} </p>
        <p>Email :   {data.email} </p>
        <p>Country Name :   {data.country} </p>
        <Button onClick={e=>handleClick(e)}>
            Log Out
        </Button>
        </>
    )
}