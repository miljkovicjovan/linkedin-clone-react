import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HouseIcon from '@mui/icons-material/House';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StreamIcon from '@mui/icons-material/Stream';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>

        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="Linkedin Logo" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={<HouseIcon fontSize='inherit'/>} title="Home"/>
            <HeaderOption Icon={<PeopleAltIcon fontSize='inherit'/>} title="My Network"/> 
            <HeaderOption Icon={<BusinessCenterIcon fontSize='inherit'/>} title="Jobs"/> 
            <HeaderOption Icon={<TextsmsIcon fontSize='inherit'/>} title="Messaging"/> 
            <HeaderOption Icon={<NotificationsIcon fontSize='inherit'/>} title="Notifications"/>  

            <HeaderOption avatar="https://media.licdn.com/dms/image/D5603AQHIpVWqnb3-uw/profile-displayphoto-shrink_800_800/0/1677784028990?e=1683158400&v=beta&t=N5RrCND9759KLdCiwb9ElamQeaMsvEsMLOa5P6CyQXE" span={<span><p>Me</p><ArrowDropDownIcon/> </span>}/>
            
            <HeaderOption Icon={<StreamIcon/>} span={<span><p>Work</p><ArrowDropDownIcon/></span>}/>

            <span className='premium'>
                <p>Try Premium for</p>
                <p>free</p>
            </span>
        </div>

    </div>
  );
}

export default Header;