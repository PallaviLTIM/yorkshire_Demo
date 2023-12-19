import { Box, Grid } from "@mui/material";
import ProfileForm from "./Profile-Form";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Profile(){
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
              <ProfileForm></ProfileForm>
            </Grid>
          </Grid>
        </Box>  
        </>)
}

export default Profile;