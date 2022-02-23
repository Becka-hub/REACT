import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
export default function Sidebar({ navbarState, setNavbarState }) {
  const [currentLink, setCurrentLink] = useState(1);
  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
      .fullView>.top>.brand,
      .fullView>.top>.links>ul>li:nth-of-type(1),
      .fullView>.top>.links>ul>li:nth-of-type(2),
      .fullView>.top>.links>ul>li:nth-of-type(3),
      .fullView>.top>.links>ul>li:nth-of-type(4),
      .fullView>.top>.links>ul>li:nth-of-type(5),
      .fullView>.top>.links>ul>li:nth-of-type(6),
      .fullView>.logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>

        <div className="fullView">
          <div className="top">
            <div className="brand">
              <FaTaxi />
              <span>MY TAXI</span>
            </div>
            <div className="links">
              <ul>
                <li
                  className={currentLink === 1 ? "active" : "none"}
                  onClick={() => setCurrentLink(1)}
                >
                  <a href="#">
                    <MdSpaceDashboard />
                    <span> Dashboard</span>
                  </a>
                </li>
                <li
                  className={currentLink === 2 ? "active" : "none"}
                  onClick={() => setCurrentLink(2)}
                >
                  <a href="#">
                    <RiDashboard2Fill />
                    <span> Riders</span>
                  </a>
                </li>
                <li
                  className={currentLink === 3 ? "active" : "none"}
                  onClick={() => setCurrentLink(3)}
                >
                  <a href="#">
                    <FaAddressCard />
                    <span> Payment Details</span>
                  </a>
                </li>
                <li
                  className={currentLink === 4 ? "active" : "none"}
                  onClick={() => setCurrentLink(4)}
                >
                  <a href="#">
                    <GiTwirlCenter />
                    <span> Learning Center</span>
                  </a>
                </li>
                <li
                  className={currentLink === 5 ? "active" : "none"}
                  onClick={() => setCurrentLink(5)}
                >
                  <a href="#">
                    <BsFillChatTextFill />
                    <span> FAQs</span>
                  </a>
                </li>
                <li
                  className={currentLink === 6 ? "active" : "none"}
                  onClick={() => setCurrentLink(6)}
                >
                  <a href="#">
                    <IoSettings />
                    <span> Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="logout">
            <a href="#">
              <FiLogOut />
              <span className="logout">Logout</span>
            </a>
          </div>
        </div>

        <div
          className={navbarState ? "responsiveViewShow" : "responsiveViewClose"}

        >
          <div className="closeInterface"
          onClick={() => setNavbarState(false)}
          >

          </div>
          
          <div className="responsiveView_content">
            <div className="top">
              <div className="toggle">
                <VscChromeClose onClick={() => setNavbarState(false)} />
              </div>
              <div className="brand">
                <FaTaxi />
                <span>MY TAXI</span>
              </div>
              <div className="links">
                <ul>
                  <li
                    className={currentLink === 1 ? "active" : "none"}
                    onClick={() => setCurrentLink(1)}
                  >
                    <a href="#">
                      <MdSpaceDashboard />
                      <span> Dashboard</span>
                    </a>
                  </li>
                  <li
                    className={currentLink === 2 ? "active" : "none"}
                    onClick={() => setCurrentLink(2)}
                  >
                    <a href="#">
                      <RiDashboard2Fill />
                      <span> Riders</span>
                    </a>
                  </li>
                  <li
                    className={currentLink === 3 ? "active" : "none"}
                    onClick={() => setCurrentLink(3)}
                  >
                    <a href="#">
                      <FaAddressCard />
                      <span> Payment Details</span>
                    </a>
                  </li>
                  <li
                    className={currentLink === 4 ? "active" : "none"}
                    onClick={() => setCurrentLink(4)}
                  >
                    <a href="#">
                      <GiTwirlCenter />
                      <span> Learning Center</span>
                    </a>
                  </li>
                  <li
                    className={currentLink === 5 ? "active" : "none"}
                    onClick={() => setCurrentLink(5)}
                  >
                    <a href="#">
                      <BsFillChatTextFill />
                      <span> FAQs</span>
                    </a>
                  </li>
                  <li
                    className={currentLink === 6 ? "active" : "none"}
                    onClick={() => setCurrentLink(6)}
                  >
                    <a href="#">
                      <IoSettings />
                      <span> Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="logout">
              <a href="#">
                <FiLogOut />
                <span className="logout">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
const Section = styled.section`
 .fullView{
    position: fixed;
    left: 0;
    background-color: #212121;
    height: 100vh;
    width: 18vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;
    .top {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      padding-left:5px;
      padding-right:5px;
      .toggle {
        display: none;
      }
      .brand {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        svg {
          color: #ffc107;
          font-size: 2rem;
        }
        span {
          font-size: 2rem;
          color: #ffc107;
          font-family: "Permanent Marker", cursive;
        }
      }
      .links {
        display: flex;
        justify-content: center;
        ul {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          li {
            padding: 0.6rem 1rem;
            border-radius: 0.6rem;
            &:hover {
              background-color: #ffc107;
              a {
                color: black;
              }
            }
            a {
              text-decoration: none;
              display: flex;
              gap: 1rem;
              color: white;
            }
          }
          .active {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
        }
      }
    }
  
    .logout {
      padding: 0.3rem 1rem;
      border-radius: 0.6rem;
      &:hover {
        background-color: #da0037;
      }
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: white;
      }
    }
 }



 .responsiveViewClose{
  width: 100%;
  height:100vh;
  background-color: #00000054!important;
  z-index:2000;
  position:fixed;
  display:none;
 }

  .responsiveViewShow{
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: space-between;
  background-color: #00000048!important;
  z-index:2000;
  position:fixed;
  animation-name: slideView;
  animation-duration: 0.7s;
  .closeInterface{
    width:70%;
    height:100vh;
  }
  .responsiveView_content{
    background-color: #212121;
    height: 100vh;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;
    .top {
      display: flex;
      flex-direction: column;
      padding-left:5px;
      padding-right:5px;
      gap: 2rem;
      width: 100%;
      .toggle{
        position:absolute;
        margin-left:15px;
        margin-top:-15px;
        width:30px;
        height:30px;
        padding-top:5px;
        padding-left:5px;
        border-radius:50%;
        background-color:#ffc107;
        border:2px solid white;
        svg{
          color:black;
          font-weight:bold;
        }
      }
      .brand {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-top:25px;
        svg {
          color: #ffc107;
          font-size: 2rem;
        }
        span {
          font-size: 2rem;
          color:#ffc107;
          font-family: "Permanent Marker", cursive;
        }
      }
      .links {
        display: flex;
        justify-content: center;
        ul {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          li {
            padding: 0.6rem 1rem;
            border-radius: 0.6rem;
            &:hover {
              background-color: #ffc107;
              a {
                color: black;
              }
            }
            a {
              text-decoration: none;
              display: flex;
              gap: 1rem;
              color: white;
            }
          }
          .active {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
        }
      }
    }
  
    .logout {
      padding: 0.3rem 1rem;
      border-radius: 0.6rem;
      &:hover {
        background-color: #da0037;
      }
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: white;
      }
    }
  }
 }
 @keyframes slideView {
  0% {
    transform: translateX(1500px);
  }
  100% {
    transform: translateX(0);
  }

}

@media screen and (min-width: 1081px){
  .responsiveViewShow{
    display:none;
  }
}
  @media screen and (min-width: 767px) and (max-width: 1080px) {
   .fullView{
     display:none;
   }
  }
  @media screen and (min-width: 480px) and (max-width: 766px) {
    .fullView{
      display:none;
    }
    .responsiveViewShow{
      .closeInterface{
        width:50%;
      }
      .responsiveView_content{
        width: 50%;
      }
    }

   }
   @media screen and (min-width: 376px) and (max-width: 479px) {
    .fullView{
      display:none;
    }

    .responsiveViewShow{
      .closeInterface{
        width:30%;
      }
      .responsiveView_content{
        width: 70%;
      }
    }


   }
   @media screen and (min-width: 280px) and (max-width: 375px) {
    .fullView{
      display:none;
    }

    .responsiveViewShow{
      .closeInterface{
        width:22%;
      }
      .responsiveView_content{
        width: 78%;
      }
    }

   }
`;
