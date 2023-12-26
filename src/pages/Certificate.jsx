// import Login from './pages/Login';
import Header from '../pages/Header';
import TabComponent from "../pages/TabComponent";
import Sidebar from './Sidebar';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";

import DataTable from "./Certificate-List";
import AuthCertificateList from "./AuthCertificateList";

import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Certificate() {
  const [showForm,setShowForm] = useState(false);
  const userDetails = useSelector((state)=> state && state.commonReducer && state.commonReducer.user );  
  const { token, user } = userDetails;
  return (
    <>
        
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Header></Header>
        </Grid>
        <Grid xs={3}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid xs={9} className='mt-10'>
        {user && user.role === 'Contractor' ? <DataTable></DataTable> : <AuthCertificateList></AuthCertificateList> }
          {/* <Typography variant="h6" color="#2441E5" noWrap component="div">
          EITSA Handover / EITSA Handback Certificate
          </Typography>
        <TabComponent></TabComponent> */}
        </Grid>
      </Grid>
    </Box>      
    </>
  );
}

export default Certificate;