import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src='https://media.licdn.com/dms/image/C5616AQG1FJmqLxM0iQ/profile-displaybackgroundimage-shrink_350_1400/0/1653317138697?e=1683158400&v=beta&t=EyqDeljlwsdzPVlHNQbW33CX2mrENi_yg7HULCOEYbI' alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Jovan Miljkovic</h2>
            <h4>@miljkovicjovan</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>
                    2,445
                </p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>
                    6,327
                </p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  );
};

export default Sidebar;