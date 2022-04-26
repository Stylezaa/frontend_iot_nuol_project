import React from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';

export default function ProfileControl(props) {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Profile');
    history.replace('/login');
  };

  //Dashboard Btn
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
            <Avatar className="w-8 h-8 bg-blue-400 flex items-center">U</Avatar>
        </Button>
        <Menu
        id="basic-menu"
        className="w-full"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
        >
            <MenuItem component={Link} to={props.link}>{props.title}</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
    </>
  );
}
