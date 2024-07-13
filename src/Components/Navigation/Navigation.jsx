import React from 'react';
import logo from "./logo.png";
import { NavigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navigation = () => {


// The Logout button functions
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

const handleLogOut = () =>{
  console.log("Logged out")
    handleClose() ; 
}

  const navigate = useNavigate();
  return (
    <div className="h-screen sticky top-0">
      <div>
      <div className='py-5'>
        <img src={logo} alt="Logo" height={80} width={75}/>
      </div>
      <div className='space-y-6'>
          {NavigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 items-center' onClick = {() => item.title === 'Profile'?navigate(`/profile/${5}`):navigate(item.path)}>
            {item.icon}
            <p className='text-xl'>{item.title}</p> 
            </div>)} 
      </div>  

      <div className='py-10 px-0'>
        <Button sx = {{width:"100%", borderRadius:"29px", py:"15px", bgcolor:'#061634'}} variant = 'contained'>Post</Button>

      </div>

      </div>
      <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Avatar alt='username' src='https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_640.png' />
                <div>
                    <span><strong>Dhruvi Rank</strong></span>
                    <br />
                    <span className='opacity-70'>@dhruvirank</span>
                </div>

                <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
                <MoreHorizIcon />
                </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
        
      </Menu>



                
            </div>
        </div>
    </div>
  );
}

export default Navigation;
