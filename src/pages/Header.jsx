import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton,Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from '../images/header-logo.png';
import { assertBooleanLiteralTypeAnnotation } from '@babel/types';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout,  CommonReducer } from '../store/reducers/common-reducers';

// const pages = ['Home', 'Certification', 'Handover/Handback', 'Notes', 'Account'];
const settings = ['Account', 'Logout'];

const pages = [];

function Header() {

  const userDetails = useSelector((state)=> state && state.commonReducer && state.commonReducer.user );
  
  const { token, user } = userDetails;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const username = localStorage.getItem('username');

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = (e) => {
    // localStorage.removeItem('username');
    // localStorage.removeItem('token');
    // localStorage.removeItem('role');
    // localStorage.removeItem('mobileNumber');
    // setIsLoggedin(false);
    e.preventDefault();
    dispatch(logout());
    navigate('/');
  }
  return (
    <AppBar  className='bg-appbar' >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO1
          </Typography> */}

          <Box
            component="img"
            sx={{
              height: 60,
              width: 155,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={logo}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} icon={<FavoriteIcon />} >
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>             
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user && user.name } src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip><span className='logout-text'>{user && user.name }</span>
            <Typography textAlign="center"><Link className='logout-text' onClick={(e)=>handleLogout(e)}>Logout</Link></Typography>                      
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
