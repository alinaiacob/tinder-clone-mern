import React from 'react'
import "./SwipeBtns.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
const SwipeBtns = () => {
    return (
        <div className='swipeBtns'>
            <IconButton className='swipeBtns__repeat' id='icon'>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeBtns__left' id='icon'>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeBtns__star' id='icon'>
                <StarIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeBtns__right' id='icon'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeBtns__lightning' id='icon'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeBtns
