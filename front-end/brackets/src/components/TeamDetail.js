import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Constants from '../constants';

export default function TeamDetail(props){
    const [players,setPlayers]=useState([]);    
    
    useEffect(()=>{
        async function fetchData(){
            if(props.data){
            props.data.map(item=>{
                axios.get(`${Constants.base_url}/auth/${item}`)
                .then(res=>{
                    setPlayers(players=>[...players,res.data]);
                })
            })}
        }
        fetchData();
    },[props.data]);

    return(
        <>
        {players && props.data?players.length===props.data.length?players.map((item)=>(
                        <p>{item.firstName}</p>
        ))
                :<> </> : <> </>}
        </>
    )
}