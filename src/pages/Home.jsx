import { Box, Grid } from "@mui/material";
import DataTable from "./Certificate-List";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AuthCertificateList from "./AuthCertificateList";
import { useSelector } from "react-redux";


function Home(){
  const userDetails = useSelector((state)=> state && state.commonReducer && state.commonReducer.user );  
  const { token, user } = userDetails;
    return(<>
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
        </Grid>
      </Grid>
    </Box>  
    </>)
}

export default Home;