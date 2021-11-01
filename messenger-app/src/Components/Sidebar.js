import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import './Sidebar.css';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarHead">
                <Avatar />
                <div className="headRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebarSearch">     
                <div className="searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start chat" type="text" />
                </div>
            </div>
            
            <div className="sidebarChats">
               <SidebarChat addNewChat />
               <SidebarChat />
               <SidebarChat />
               <SidebarChat />
               <SidebarChat />
                
            </div>
            
        </div>
    )
}

export default Sidebar
