import React, { useEffect, useState } from 'react';
import Header from '../../components/Header'
import TeamSection from '../../components/TeamSection';
import { Typography } from 'antd';
import Constants from '../../constants';
import axios from 'axios';
import TeamDetail from '../../components/TeamDetail'


export default function Team(){
    const { Title } = Typography;
    const [data,setData] = useState({});

    useEffect(()=>{
        async function fetchData(){
            axios.get(`${Constants.base_url}/team/teamBy/${localStorage.getItem('user')}`)
            .then(res=>{
                if(res.status===200) setData(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        fetchData();
    },[]);

    

    


    return(
        <>
        <Header />

        <Title level={2} style={{marginLeft:"30px",marginTop:"30px"}} >My Team</Title>
        <div class="row">
         <div class="col-lg-3 col-md-5 p-1" style={{marginLeft:"30px",marginTop:"30px"}}>
            <div class="feature-item set-bg" data-setbg="assests/img/features/1.jpg">
            <div class="fi-content text-white">
            <h5><a>{data.teamName}</a></h5>
            <TeamDetail data={data.members} />
            </div>
            </div>
            </div>
            </div>

            <Title level={2} style={{marginLeft:"30px",marginTop:"30px"}} >All Teams</Title>
        <TeamSection/>



        </>
    )
}