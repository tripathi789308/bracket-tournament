import React,{useEffect, useState} from 'react';
import axios from 'axios';
import JoinTeam from './JoinTeam';


export default function TeamSection(){

    const [data,setData]=useState([]);

    
    useEffect(()=>{
        async function fetchData(){
            let res=await axios.get('http://localhost:3003/api/v1/team');
            setData(res.data);
        }
        fetchData();
    },[]);


    return (
        <>
   
        <div class="container">
        <div class="row">
        {data.map(item=>(
            <div class="col-lg-3 col-md-6 p-1" >
            <div class="feature-item set-bg" data-setbg="assests/img/team-logo.jpg">
            <div class="fi-content text-white">
            <h3><a href="/team">{item.teamName}</a></h3>
            <JoinTeam item={item} />
            </div>
            </div>
            
            </div>
        ))}
        </div>
        </div>
    
        </>
    )
}

{/* 
        
        </div> */}