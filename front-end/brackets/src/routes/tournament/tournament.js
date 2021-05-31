import React from 'react';
import Header from '../../components/Header';
import TournamentSection from '../../components/TournamentSection'

export default function Tournament(){
    return(
        <>
        <Header />
        <section class="tournaments-section spad">
            <h2 style={{marginLeft:"50px"}} >My Tournaments</h2>

            <TournamentSection />
        </section>

        </>
    )
}