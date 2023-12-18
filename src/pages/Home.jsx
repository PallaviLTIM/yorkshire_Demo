import { Box, Grid } from "@mui/material";
import DataTable from "./Certificate-List";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Home(){
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
        <DataTable></DataTable>
        </Grid>
      </Grid>
    </Box>  
    </>)
}

export default Home;