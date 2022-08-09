import React from 'react';
import ImproveSection from "../components/ImproveSection";
import MainSection from "../components/MainSection";
import ChiefSection from "../components/ChiefSection";


function Home(props) {
    return (
        <div>
            <MainSection/>
            <ImproveSection/>
            <ChiefSection/>
        </div>
    );
}

export default Home;