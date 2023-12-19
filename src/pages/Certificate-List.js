import React, { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { ViewCertificate } from './View-Certificate';
import { useNavigate } from "react-router-dom";

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



export default function DataTable() {

  const [certificates, setCertificates] = useState([]);
  const [showList, setShowList] = useState(true);
  const [certificateDetails,setCertificateDetails]=useState([])
  useEffect(() => {
     fetch('https://661a292e-21a1-4ced-97c6-39f8ca00c57b.mock.pstmn.io/certificates')
        .then((response) => response.json())
        .then((data) => {
           setCertificates(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);


  const handleRowClick = () => {
    fetch('https://661a292e-21a1-4ced-97c6-39f8ca00c57b.mock.pstmn.io/certificates')
    .then((response) => response.json())
    .then((data) => {
      setCertificateDetails(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
    setShowList(false)  

  };
  // console.log('cert',certificateDetails)
  const rows=certificates?.map((item,index)=>{return {id:index,Handover_Ref:item.handover_Reference,Last_Modified:item?.updatedOn!==''?item?.updaredOn:item?.createdOn,Authorized_Person:item?.authorized_Person,Contractors_Rep:item?.contractor_Representative,Start_Date:item?.commence_Date}})

  let navigate = useNavigate();

  return (
    <>{showList?<Box border='1px solid' padding={2}><Typography fontWeight="600" lineHeight="45px" fontSize="30px" color="#131C42" ml={2}>Certificate list</Typography>
      {/* <Grid
        container
        width="50%"
      > */}
        {/* <Grid item xs={12} md={4} mb={2} ml={2}> */}
        <Box display="flex">
        <Box mb="10px">
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
                    sx={{ cursor: 'pointer' }} />
                </InputAdornment>
              ),
            }} />
            </Box>
        {/* </Grid> */}
        {/* <Grid item xs={12} md={2}>
          <Button variant="contained">Filter</Button>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button variant='outlined'> <ImportExportIcon />Sort</Button>
        </Grid> */}
        {/* <Grid item xs={12} md={5} ml="auto"> */}
        <Box mb="10px" ml="auto">

          <Button variant='contained' onClick={()=>{navigate('/certification')}}>
            Add new certificate</Button>
            </Box>
            </Box>
        {/* </Grid> */}
      {/* </Grid> */}
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={() => Math.floor(Math.random() * 100000000)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          sx={{ display: "flex",marginRight: '0px', pr: '0px',textAlign:"center"}}
          pageSizeOptions={[5, 10]}
          onRowClick={handleRowClick}
          checkboxSelection />
      </Box></Box>:<ViewCertificate certificateDetails={certificateDetails}/>}</>
  );
}
