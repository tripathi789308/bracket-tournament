import React,{ useState } from 'react';
import {Button} from 'antd';
import axios from 'axios';
import Constants from '../constants';




export default function JoinTeam(props){  
    let BASE_URL = Constants.base_url;
    const [joined,setJoined]=useState(false);
    
    const item=props.item;

    const joinTeam=(e,id)=>{
        e.preventDefault();
        let user = localStorage.getItem('user');
        const body = {
            members:user
        }
        console.log(body.members);
        console.log(id);
        axios.put(`${BASE_URL}/team/joinTeam/${id}`,body)
        .then(res=>{
            if(res.status===200){
                setJoined(true);
            }else{
                console.log("error");
            }
        }).catch(err=>{
                console.log(err);
        });


    
    }


    return(
        <Button type="primary" danger onClick={e=>joinTeam(e,item._id)}>Join Team</Button>


    )
}