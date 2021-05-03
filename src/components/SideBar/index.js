import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrap, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute}  from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrap>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="Movies">
                        Movies
                    </SidebarLink>
                    <SidebarLink to="Series">
                        Series
                    </SidebarLink>
                    <SidebarLink to="Signup">
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
