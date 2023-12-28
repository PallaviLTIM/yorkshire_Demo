import React, { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ImportExportIcon from '@mui/icons-material/ImportExport';
// import { ViewCertificate } from './View-Certificate';
import Certificate from './Certificate';
import TabComponent from './TabComponent';
import { useNavigate } from 'react-router';


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
  const dummyData = [ 
    { "id": "74f5936e-0917-49e8-bef7-da0e56442f28", "type": "Testing", "mode": "Manual", "site": "River", "handover_Reference": "Certificate_Testing_Handover8", "authorized_Person": "Tom Adena", "contractor": "Andy Aleby", "contractor_Representative": null, "site_Location": "", "equipments": "Sewage Pump", "access_Arrangements": "", "work_Description": "Sewage Pump should be Cleaned.", "commence_Date": "2024-01-05", "completion_Date": "2025-06-30", "isInspectionUnderTaken": "Yes", "isStartOnSiteLetter": "Yes", "isHealthNSaftey": "Yes", "handover_Name": "", "takeover_Name": "", "handover_Date": "", "handover_Comment": "", "handback_Name": "", "takeback_Name": "", "handback_Date": "", "handback_Comment": "", "createdOn": "12-12-2023 08:03:13 AM", "createdBy": "Paul Anderson", "updatedOn": "", "updatedBy": "", "isActive": "True", "status": "New" },
    { "id": "f77885ea-bee6-4a0c-9148-cf0af2fb6d4f", "type": "Testing", "mode": "Manual", "site": "River", "handover_Reference": "Certificate_Testing_Handover7", "authorized_Person": "Tom Adena", "contractor": "Andy Aleby", "contractor_Representative": null, "site_Location": "", "equipments": "Water Reservoir", "access_Arrangements": "", "work_Description": "Water Reservoir should be Built.", "commence_Date": "2024-01-05", "completion_Date": "2025-06-30", "isInspectionUnderTaken": "Yes", "isStartOnSiteLetter": "Yes", "isHealthNSaftey": "Yes", "handover_Name": "", "takeover_Name": "", "handover_Date": "12-12-2023", "handover_Comment": "Water Reservoir work can be started", "handback_Name": "", "takeback_Name": "", "handback_Date": "", "handback_Comment": "", "createdOn": "12-12-2023 07:59:20 AM", "createdBy": "Tom Adena", "updatedOn": "", "updatedBy": "", "isActive": "True", "status": "New" },
    { "id": "096d8d02-0fbd-413c-9405-c764f154c709", "type": "Testing", "mode": "Manual", "site": "river", "handover_Reference": "Certificate_Testing_Handover3", "authorized_Person": "Tom Adena", "contractor": "Andy Aleby", "contractor_Representative": null, "site_Location": "", "equipments": "Water Reservoir", "access_Arrangements": "", "work_Description": "Water Reservoir should be repaired.", "commence_Date": "2024-02-15", "completion_Date": "2024-12-10", "isInspectionUnderTaken": "yes", "isStartOnSiteLetter": "Yes", "isHealthNSaftey": "Yes", "handover_Name": "", "takeover_Name": "", "handover_Date": "", "handover_Comment": "", "handback_Name": "", "takeback_Name": "", "handback_Date": "", "handback_Comment": "", "createdOn": "12-12-2023 07:51:20 AM", "createdBy": "Tom Adena", "updatedOn": "", "updatedBy": "", "isActive": "True", "status": "New" }
    ];
  useEffect(() => {
    setCertificates(dummyData);
    //  fetch('https://661a292e-21a1-4ced-97c6-39f8ca00c57b.mock.pstmn.io/certificates')
    //     .then((response) => response.json())
    //     .then((data) => {
    //        setCertificates(data);
    //     })
    //     .catch((err) => {
    //        console.log(err.message);
    //     });
  }, []);


  const handleRowClick = () => {
    fetch('https://ccb7c3d4-e305-4b79-858f-6273fbfb1aa4.mock.pstmn.io/certificates')
    .then((response) => response.json())
    .then((data) => {
      setCertificateDetails(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
    setShowList(false)  

  };
  console.log('cert',certificateDetails)
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

          <Button variant='contained' onClick={()=>{navigate('/certificate-form')}}>
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
          sx={{
            display: 'flex',
            justifyContent: 'center',
            '.MuiToolbar-root': {
              width: '100%',
            },
          }}
          pageSizeOptions={[5, 10]}
          onRowClick={handleRowClick}
          checkboxSelection />
      </Box></Box>:<TabComponent showDetails={!showList}/>}</>
  );
}
