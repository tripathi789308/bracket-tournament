
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Constants from '../constants';
import UserDetails from './userDetails';
import Bracket from '../components/Bracket'
import { Typography } from 'antd';
const { Text } = Typography;

export default function TournamentSection(){

    const [data,setData]=useState([]);
    const text1="Qualifier 1";
    const text2="Qualifier 2";
    const text3= "Qualifier 3";
    useEffect(()=>{
        async function fetchData(){
             axios.get(`${Constants.base_url}/tournament`)
            .then(res=>{
                if(res.status===200){
                    setData(res.data);
                }
            }).catch(err=>{
                console.log(err);
            })
        }
        fetchData();
    },[]);

    return(

    <div class="container">
    <div class="tournament-title">Tournaments</div>
    <div class="row">
    {data ? data.map((item)=>(
        <>
            <div class="col-xl-9">
            <div class="tournament-item mb-4 mb-lg-0">
                <div class="ti-content">
                    <div class="ti-thumb set-bg" data-setbg="assests/img/tournament/1.jpg"></div>
                        <a ><div class="ti-text">
                        <h4>{item.tournamentName}</h4>
                        <ul>
                            <li><span>Tournament Begins:</span> {item.createdAt}</li>
                            <li><span>Tournament Author:</span><UserDetails user={item.createdBy} /></li>
                        </ul>
                <p><span>Prizes:</span> 1st place $2000, 2nd place: $1000, 3rd place: $500</p>
                <h2>Participants</h2>
                <h4>Stage 1</h4>
                <Bracket teams={item.teams} />

                <h4>Stage 2</h4>
                <ul> <li> 
                <Text mark level="3" 
            style={{fontWeight:"bold"}}
            >{text1}</Text></li>
           <li><Text mark level="3" 
            style={{fontWeight:"bold"}}
            >{text2}</Text></li> 
             </ul>

                <h4>Final</h4>
                <Text mark level="1" 
            style={{fontWeight:"bold"}}
            >{text3}</Text>
           
                </div></a>
             </div>
         </div>
        </div>
        
    </>
    )) : <> </> }
    </div>
    </div>
    
    )
}