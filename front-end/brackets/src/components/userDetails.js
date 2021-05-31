import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Constants from '../constants'

export default function UserDetails(props){

    const [data,setData] = useState({});

    useEffect(()=>{
        async function fetchData(){
            axios.get(`${Constants.base_url}/auth/${props.user}`)
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
        <p>{data.firstName} {data.lastName}</p>
        </>
    )
}