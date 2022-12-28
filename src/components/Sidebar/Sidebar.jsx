import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import SidebarData from './SidebarData'
import SideMenu from '../SideMenu/SideMenu'
import { IconContext } from 'react-icons'

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: ${props => props.sidebar ? '0' : '-250px'};
  transition: 350ms;
  z-index: 10;
`

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = (props) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#ffffff' }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={props.showSidebar}/>
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={props.sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={props.showSidebar}/>
            </NavIcon>
            {SidebarData.map((item, index) => <SideMenu item={item} key={index}/>)}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar