import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import Certificate from './Certificate'
import Header from './Header'
import { Link } from 'react-router-dom';

const drawerWidth = 200;

export default function Sidebar() {
    let IconArray = [HomeIcon, MailIcon, PersonIcon];
  return (
    <><Header></Header>
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
            {['Home', 'Certification', 'Account'].map((text, index) => (
                <Link to='/certification'>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{color: '#22B1DD'}}>
                    {/* {index % 2 === 0 ? <HomeIcon /> : <PersonIcon />} */}
                    {
                       index === 0 ? <HomeIcon />: index===1 ? <MailIcon/> : <PersonIcon/> 
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  
                </ListItemButton>
              </ListItem>
              </Link>
            ))}
          </List>
          <Divider className='bg-sidebar' />
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
