import React from 'react'
import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
function Navbar({ navbarState, setNavbarState }) {
    return (
        <Nav>
            <div className="title">
                <h4>Hi Kishan,</h4>
                <h1>Welcome to <span>MY TAXI DASHBOARD</span></h1>
            </div>
            <div className="search">
                <BiSearch />
                <input type="text" placeholder="Search" />
            </div>
            <div className="button_responsive">
                {navbarState ? (
                    <VscChromeClose onClick={() => setNavbarState(false)} />
                ) : (
                    <GiHamburgerMenu
                        onClick={(e) => {
                            e.stopPropagation();
                            setNavbarState(true);
                        }}
                    />
                )}
            </div>

        </Nav>
    )
}
export default Navbar;
const Nav = styled.nav`
display:flex;
justify-content:space-between;
color:white;
border-bottom:1px solid white;
padding-bottom:0.5rem;
.title{
    h1{
        span{
            margin-left:0.5rem;
            color:#ffc107;
            letter-spacing:0.2rem;
        }
    }
}
.search{
    background-color: #212121;
    display:flex;
    align-items:center;
    gap:1rem;
    padding:0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius:1rem;
    svg{
        color:#ffc107;
    }
    input{
        background:transparent;
        border:none;
        color:#ffc127;
        letter-spacing:0.3rem;
        width:100%;
        height:30px;
        &::placeholder{
            color:#ffc127;
        }
        &::focus{
            outline:none;
            box-shadow:none;
        }
    }
}
.button_responsive{
    display:none;
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    .button_responsive{
        display:block;
    }
   }
`;