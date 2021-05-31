import React, { useEffect, useState } from 'react'
import Constants from '../constants';
import { Typography } from 'antd';
import axios from 'axios';

const { Text } = Typography;

export default function TeamName(props){
    const [teamName,setTeamName]=useState("");

    useEffect(()=>{
        async function fetchData(){
            axios.get(`${Constants.base_url}/team/${props.team_id}`)
            .then(res=>{
                if(res.status===200){
                    setTeamName(res.data.teamName);
                }else{
                    console.log("eroor")
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
        fetchData();
    },[]);

    return(
        <>
            <Text mark level="3" 
            style={{fontWeight:"bold"}}
            >{teamName}</Text>
        </>
    )
}