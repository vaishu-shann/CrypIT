import React from 'react';
import styled from 'styled-components';

import TeamMember from './TeamMember';

function Team() {
    return (
        <TeamContainer>
            <div className='title'>
                <h2> With some of the most forward-thinking angels </h2>
            </div>
            <div className="sellercards">
                    {/* <TeamMate name="User1" designation="Regulatory Officer" about="Before founding FTX, Sam was a trader on Jane Street Capital’s international ETF desk. He traded a variety of ETFs, futures, currencies, and equities, and designed their automated OTC trading system. He graduated from MIT with a degree in physics." src={person} />
                    <TeamMate  name="User2"designation="General Counsel"    about="Before founding FTX, Sam was a trader on Jane Street Capital’s international ETF desk. He traded a variety of ETFs, futures, currencies, and equities, and designed their automated OTC trading system. He graduated from MIT with a degree in physics." src={person2}/>
                    <TeamMate name="User3" designation="CTO and Founder"    about="Before founding FTX, Sam was a trader on Jane Street Capital’s international ETF desk. He traded a variety of ETFs, futures, currencies, and equities, and designed their automated OTC trading system. He graduated from MIT with a degree in physics." src={person3}/> */}
                <TeamMember/>
                </div>

        </TeamContainer>
    );
}
const TeamContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;800&display=swap');
    padding: 2rem 0;
.title{
   text-align: center;
   margin: 20px ;
    h2{
        font-family: 'Barlow', sans-serif;
    font-size: 44px;
    font-weight: 800;
    margin: 24px 0 40px;
    line-height: 120%;
    letter-spacing: 1px;
    color: #000;
    text-align: center;
    }
    p{
        text-align: center;
        color: greenyellow;
        opacity: 0.5;
    }
}

.sellercards{
        /* display: grid; */
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
        grid-gap: 3rem;
        /* padding: 0.2rem 10rem 0.2rem 10rem; */
        margin: 2rem 0 4rem 0;
    }
`;
export default Team;