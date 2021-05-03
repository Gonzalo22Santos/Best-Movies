import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrap, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute}  from './SidebarElements';

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrap>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="Movies" onClick={toggle}>
                        Movies
                    </SidebarLink>
                    <SidebarLink to="Series" onClick={toggle}>
                        Series
                    </SidebarLink>
                    <SidebarLink to="Signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin"> Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
