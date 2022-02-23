import React from 'react'
import styled from 'styled-components';
import { cardstyle } from './ReusableStyle';
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
function Analytics() {
    return (
        <Section>
            <div className="analytic">
                <div className="logo">
                    <BsFillCalendar2WeekFill />
                </div>
                <div className="content">
                    <h5>Spent this month</h5>
                    <h2>$682.5</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="logo">
                    <IoStatsChart />
                </div>
                <div className="content">
                    <h5>Earnings</h5>
                    <h2>$250.40</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="logo">
                    <BiGroup />
                </div>
                <div className="content">
                    <h5>New Clients</h5>
                    <h2>321</h2>
                </div>

            </div>
            <div className="analytic">
                <div className="logo">
                    <FiActivity />
                </div>
                <div className="content">
                    <h5>Activity</h5>
                    <h2>$540.50</h2>
                </div>
            </div>
        </Section>
    )
}
export default Analytics;

const Section = styled.section`
display:grid;
grid-template-columns:repeat(2,1fr);
gap:1rem;
.analytic{
    ${cardstyle};
    padding:1rem;
    display:flex;
    justify-content:space-evenly;
    align-items-center;
    gap:1rem;
    transition:0.5s ease-in-out;
    &:hover{
        background-color:#ffc127;
        color:black;
        svg{
            color:white;
        }
    }
    .logo{
        background-color:black;
        border-radius:3rem;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:1.5rem;
        svg{
            font-size:1.5rem;
        }
    }
}
`;