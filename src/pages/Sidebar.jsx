import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import Header from './Header'
import { Link } from 'react-router-dom';

const drawerWidth = 200;

export default function Sidebar() {
  return (
    <>
    {/* <Header></Header> */}
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer className='bg-sidebar'
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',marginTop:9 },
        }}
      >
        {/* <Toolbar /> */}
        <Box className='bg-sidebar'>
          <List>
            <Link to='/home'>
              <ListItem key='Home' disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{color: '#22B1DD'}}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary='Home' />
                  
                </ListItemButton>
              </ListItem>
              </Link>

              <Link to='/certification'>
              <ListItem key='Certification' disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{color: '#22B1DD'}}>
                    <MailIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Certification' />
                  
                </ListItemButton>
              </ListItem>
              </Link>

              <Link to='/profile'>
              <ListItem key='Account' disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{color: '#22B1DD'}}>
                    <PersonIcon/> 
                  </ListItemIcon>
                  <ListItemText primary='Account'/>
                  
                </ListItemButton>
              </ListItem>
              </Link>

                     </List>
          {/* <Divider className='bg-sidebar' /> */}
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
      <Box component="main" className='box-container' sx={{ flexGrow: 1, p: 3, }} >
        {/* <Toolbar /> */}
        
        {/* <Certificate></Certificate> */}
      </Box>
    </Box>
    </>
  );
}
