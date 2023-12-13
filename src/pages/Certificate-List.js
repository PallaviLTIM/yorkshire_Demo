import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ImportExportIcon from '@mui/icons-material/ImportExport';

const columns = [
  {field:'Handover_Ref',headerName:'Handover Ref',width:250},
  { field: 'Last_Modified', headerName: 'Last Modified', width: 200 },
  { field: 'Authorized_Person', headerName: 'Authorized Person', width: 130 },
  {
    field: 'Contractors_Rep',
    headerName: 'Contractors Rep',
    width: 200,
  },
  {
    field: 'Start_Date',
    headerName: 'Start Date',
    width: 160,   
  },
];

const rows = [
  { id: 1, Handover_Ref:'Certificate_ testing_handovers1', Last_Modified: '03/02/2023 01:05:44', Authorized_Person: 'Jesse Cain',Contractors_Rep: 'Carlos Harris',Start_Date:'06/10/2023 12:17:01' },
  { id: 2, Handover_Ref: 'Certificate_ testing_handovers1', Last_Modified: '03/02/2023 01:05:44', Authorized_Person: 'Jesse Cain',Contractors_Rep: 'Carlos Harris',Start_Date:'06/10/2023 12:17:01'   },
  { id: 3, Handover_Ref: 'Certificate_ testing_handovers2', Last_Modified: '03/02/2023 01:05:44', Authorized_Person: 'Jesse Cain' ,Contractors_Rep:'Carlos Harris' ,Start_Date:'06/10/2023 12:17:01' },
  { id: 4, Handover_Ref: 'Certificate_ testing_handovers3', Last_Modified: '03/02/2023 01:05:44', Authorized_Person: 'Jesse Cain',Contractors_Rep:  'Carlos Harris',Start_Date:'06/10/2023 12:17:01' },
  { id: 5, Handover_Ref: 'Certificate_ testing_handovers2', Last_Modified: '03/02/2023 01:05:44', Authorized_Person: 'Jesse Cain' ,Contractors_Rep:'Carlos Harris' ,Start_Date:'06/10/2023 12:17:01'  },
  { id: 6, Handover_Ref: 'Certificate_remedial_handovers2', Last_Modified: '03/02/2023 01:05:44', Authorized_Person: 'Jesse Cain' ,Contractors_Rep:'Carlos Harris' ,Start_Date:'06/10/2023 12:17:01'  },
  { id: 7, Handover_Ref: 'Certificate_remedial_handovers4', Last_Modified: '03/02/2023 01:05:44', Authorized_Person: 'Jesse Cain',Contractors_Rep: 'Carlos Harris',Start_Date: '06/10/2023 12:17:01' },
  { id: 8, Handover_Ref: 'Frances', Last_Modified: '03/02/2023 01:05:44', Authorized_Person: 'Jesse Cain' ,Contractors_Rep:'Carlos Harris' ,Start_Date:'06/10/2023 12:17:01'  },
  { id: 9, Handover_Ref: 'Roxie', Last_Modified: '03/02/2023   01:05:44', Authorized_Person: 'Jesse Cain' ,Contractors_Rep:  'Carlos Harris',Start_Date: '06/10/2023 12:17:01'},
];

export default function DataTable() {
  return (
    <Box border='1px solid' padding={2}><Typography fontWeight="600" lineHeight="45px" fontSize="30px" color="#131C42" ml={2}>Certificate list</Typography>
       <Grid
        container
      >
        <Grid item xs={12} md={4} mb={2} ml={2}>
         <TextField
            data-testid="freesearch"
            variant="outlined"
            type="text"
            size='small'
            name="search"
            required={false}
            placeholder={'Search'} 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon
                    sx={{ cursor: 'pointer' }}               
                  />
                </InputAdornment>
              ),
            }}
          />
          </Grid>
          <Grid item xs={12} md={2} >
            <Button variant="contained">Filter</Button>
          </Grid>
          <Grid item xs={12} md={2}>
           <Button variant='outlined'> <ImportExportIcon/>Sort</Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button variant='contained'>
           Add new certificate</Button>
          </Grid>
          </Grid>
    <Box>
      <DataGrid
        rows={rows} 
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },         
          },         
        }}
        sx={{display:"flex",alignItems:"center",marginRight:'0px',pr:'0px'}}
        pageSizeOptions={[5, 10]}
        checkboxSelection
   />
    </Box></Box>
  );
}
