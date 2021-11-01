import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react';
import './Chat.css';

function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);



    return (
        <div className="chat">
            <div className="chatHead">
               <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
               <div className="headInfo">
                    <h3>Room Name</h3>
                    <p>Last seen ...</p>
               </div>
               <div className="headRight">

               </div>
            </div>
            <div className="chatBody">

            </div>
            <div className="chatFooter">

            </div>
        </div>
    )
}

export default Chat
