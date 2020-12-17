import React from 'react';
import './ChatHeader.css';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from '@material-ui/icons/People';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';

function ChatHeader({ channelName   }) {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">#</span> 
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader_right">
                <NotificationsActiveIcon />
                <EditLocationIcon />
                <PeopleIcon />
                
            <div className="chatHeader_search" >
            <input placeholder="Search" type="text"/>
                <SearchIcon />
            </div>
                <SendIcon />
                <HelpIcon />
            </div>
        </div>
    );
};

export default ChatHeader
