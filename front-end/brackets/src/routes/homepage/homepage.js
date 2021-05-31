import React from 'react';
import FooterSection from '../../components/footerSection';
import Header from '../../components/Header'
import NewSection from '../../components/NewSection';
import ReviewSection from '../../components/reviewSection';
import Section from '../../components/Section'
import TournamentSection from '../../components/TournamentSection';


export default function Homepage(){
    return(
        <div className="maincontainer">
                
                <Header  />
                <Section/>
                <NewSection />
                <TournamentSection/>

                <ReviewSection/>
                <FooterSection/>
    
      </div>
      
    )
}