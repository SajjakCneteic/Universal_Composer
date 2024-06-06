import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import { FaUser, } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logo from '../asset/logo.png';
import git from '../asset/git.png';
import database from '../asset/database.png';
import storage from '../asset/storage.png';
import terminal from '../asset/terminal.png';
import info from '../asset/info.png';
import help from '../asset/help.png';
import { DiVim } from 'react-icons/di';


const UniversalComposer = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isUser, setIsUser] = useState(false)
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const port = 'http://127.0.0.1:1880/'
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100vh' }}>
      <div>
        <GlobalStyle />
        <Sidebar collapsed={isSidebarCollapsed} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <LogoContainer>
            <div>
              <img src={logo} alt="Logo" />
            </div>
            {!isSidebarCollapsed &&
              <h3 style={{ color: '#333', marginTop: '8px' }}>Universal </h3>
            }
            {!isSidebarCollapsed &&
              <h3 style={{ color: '#333' }}>Composer </h3>
            }

          </LogoContainer>
          <IconContainer>
            <Icon>
              <img src={database} alt="Database" />
              {!isSidebarCollapsed && <span>Database</span>}
            </Icon>
            <Icon>
              <img src={storage} alt="Storage" />
              {!isSidebarCollapsed && <span>Storage</span>}
            </Icon>
            <Icon>
              <img src={terminal} alt="Terminal" />
              {!isSidebarCollapsed && <span>Terminal</span>}
            </Icon>
            <Icon>
              <img src={git} alt="Git" />
              {!isSidebarCollapsed && <span>Git</span>}
            </Icon>
            <Icon>
              <img src={info} alt="Info" />
              {!isSidebarCollapsed && <span>Info</span>}
            </Icon>
            <Icon>
              <a style={{ textDecoration: 'none', color: '#333', display: 'flex',alignItems:'center'   }} href="https://universalcommerce.com/en-us/" target='blank'>
                <img src={help} alt="Help" />
                {!isSidebarCollapsed && <span style={{ marginLeft: '12px' }}>Help</span>}
              </a>

            </Icon>
          </IconContainer>

          <UserIcon collapsed={isSidebarCollapsed} onMouseEnter={() => setIsUser(true)}  >
            <div>
              <FaUser size={24} />
            </div>
            {!isSidebarCollapsed && <span style={{ textAlign: 'center',fontSize:'14px' }}>My Account</span>}
          </UserIcon>
        </Sidebar>
        {isHovered &&
          <CollapseArrow onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={toggleSidebarCollapse} collapsed={isSidebarCollapsed}>
            {isSidebarCollapsed ? <IoIosArrowForward color='black' /> : <IoIosArrowBack color='black' />}
          </CollapseArrow>
        }
        <Div
          onMouseEnter={() => setIsUser(true)}
          onMouseLeave={() => setIsUser(false)}
          isSidebarCollapsed={isSidebarCollapsed}
          isUser={isUser}>

          {/* <Header>User Details</Header> */}
          <LogoutButton>Logout</LogoutButton>
        </Div>
      </div>
      <div style={{ width: isSidebarCollapsed ? 'calc(100% - 40px)' : 'calc(100% - 120px)' }}>
        <iframe
          src={port}
          title="Node-RED Editor"
          style={{ width: '100%', height: '99.2vh', border: 'none' }}
        ></iframe>
      </div>
    </div>
  )
}

export default UniversalComposer

const Div = styled.div`
  position: absolute;
  left: ${({ isSidebarCollapsed }) => (isSidebarCollapsed ? '40px' : '120px')};
  display: ${({ isUser }) => (isUser ? 'block' : 'none')};
  background-color: #fff;
  bottom:1px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease, opacity 0.3s ease;
  opacity: ${({ isUser }) => (isUser ? 1 : 0)};
  z-index: 999;
  
`

const Header = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  color: #333;
`;

const LogoutButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Sidebar = styled.div`
  position: relative;
  width: ${({ collapsed }) => (collapsed ? '40px' : '120px')};
  background-color: #F3F3F3;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100vh;
  transition: width 0.3s ease;

  /* @media (max-width: 600px) {
    width: ${({ collapsed }) => (collapsed ? '40px' : '100%')};
    height: auto;
    flex-direction: row;
    justify-content: space-around;
  } */
`;

const CollapseArrow = styled.div`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  background-color: #fff;
  border-right:1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
  border-top: 1px solid #1a1a1a;
  padding: 10px 5px;
  border-top-right-radius: 5px; /* Border radius for top right corner */
  border-bottom-right-radius: 5px; /* Border radius for bottom right corner */
  left: ${({ collapsed }) => (collapsed ? `40px` : `120px`)};
  bottom: 52vh;
  transition: left 0.3s ease;
  z-index: 999;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f1f1f1;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  /* margin-top: 10px; */
  margin-bottom: 30px;
  img {
    width: 60%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Icon = styled.div`
  width: 100%;
  border-radius:10px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: ${({ collapsed }) => (collapsed ? 'center' : 'start')};
  margin-bottom: 14px;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: #1a1a1a;

  img {
    width: 20px;
    height: 20px;
    /* margin-right: 15px; */
    
  }

  span {
    font-size: 14px;
    text-align: center;
    margin-left: 12px;
    display: ${({ collapsed }) => (collapsed ? 'none' : 'inline')};
  }

  &:hover {
    background-color: #c3c5c6;
    transform: translateY(-5px);
  }
`;

const UserIcon = styled.div`
  width: 100%;
  padding: ${({ collapsed }) => (collapsed ? `0 7px` : `0 15px`)};
  border-top: 1px solid #333;
  padding-top: 20px ;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
  color: #2196F3;
  

  span{
    margin-left: 5px; 
    color:#1a1a1a;
  }
 
`;

const Divider = styled.hr`
  width: 80%;
  border: 0;
  border-top: 1px solid #6c757d;
  margin: 20px 0;

  @media (max-width: 600px) {
    display: none;
  }
`;