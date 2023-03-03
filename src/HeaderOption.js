import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';

const HeaderOption = ({Icon, avatar, title, span}) => {
  return (
    <div className='header__links'>
        <div>
            {Icon && Icon}
            <p>{title}</p>
            <div className='links__profile'>
                {avatar && <Avatar className='links__profile__image' src={avatar}/>}
                {span && span}
            </div>
        </div>
    </div>
  );
};

export default HeaderOption;