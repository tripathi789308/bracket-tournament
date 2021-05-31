
import React, { useState } from 'react';
import TeamName from '../components/TeamName';

export default function Bracket(props){
    return(
       <>
       <ul>
            {props.teams.map((item)=>(
                <><li>
                    <TeamName team_id={item} />
                </li>
                </>
            ))}
            </ul>
       </>
    )
}