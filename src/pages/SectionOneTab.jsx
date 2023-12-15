import {  Box, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, Select,MenuItem } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {useState} from "react";
import { useForm } from 'react-hook-form';


export function SectionOneTab() {
  const [type, setType] = useState('');
  const [site, setSite] = useState('');
  const [status, setStatus] = useState('');
  const [handover_reference, setHandover] = useState('');
  const [person_name, setPersonname] = useState('');
  const [auth_person_telephone_number, setAuthTele] = useState('');
  const [contractor_name, setContractorName] = useState('');
  const [contractor_telephone_number, setContractorTele] = useState('');
  const [representative_name, setRepresentative] = useState('');
  const [representative_telephone_number, setRepresentativeTele] = useState('');
  
  const { handleSubmit } = useForm();
  const onSubmit =async e => {
    
    let formData = {
      "type": type, 
      "mode": "Manual", 
      "site": site, 
      "handover_Reference": "Certificate_Testing_Handover8", 
      "authorized_Person": person_name, 
      "contractor": contractor_name, 
      "contractor_Representative": representative_name, 
      "authorized_Person_tele": auth_person_telephone_number, 
      "contractor_tele": contractor_telephone_number, 
      "contractor_Representative_tele": representative_telephone_number, 
      "site_Location": "", 
      "equipments": "Sewage Pump", 
      "access_Arrangements": "", 
      "work_Description": "Sewage Pump should be Cleaned.", 
      "commence_Date": "2024-01-05", 
      "completion_Date": "2025-06-30", 
      "isInspectionUnderTaken": "Yes", 
      "isStartOnSiteLetter": "Yes", 
      "isHealthNSaftey": "Yes", 
      "handover_Name": "",
       "takeover_Name": "", 
       "handover_Date": "", 
       "handover_Comment": "", 
       "handback_Name": "", 
       "takeback_Name": "", 
       "handback_Date": "", 
       "handback_Comment": "", 
       "createdOn": "12-12-2023 08:03:13 AM", 
       "createdBy": "Paul Anderson", 
       "updatedOn": "", 
       "updatedBy": "", 
       "isActive": "True", 
       "status": "New"
    }
    // console.log(formData);
    // const response = await fetch("http://localhost:5000/api/login-user", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       Accept: "application/json",
    //     },
    //     body: formData,
    //   });

    localStorage.setItem('certificate_id',"74f5936e-0917-49e8-bef7-da0e56442f28");

  };
  return (
    <Box p="15px"> 
       <form onSubmit={handleSubmit(onSubmit)} id="hook-form">  
          <Grid container rowSpacing={2} columnSpacing={3} mt='2px'>
           
           <Grid item xs={12} md={6}>
                <Typography mt="5px" component="div">Type</Typography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                >
                  <FormControlLabel
                    value="test"
                    control={
                      <Radio
                        name="type"
                        id="type"
                      />       
                    }
                    label="Test"
                    onChange={(e)=>setType(e.target.value)}
                  />
                  <FormControlLabel
                    value="remedial"
                    control={
                      <Radio
                        name="type"
                        id="type"
                      />
                    }
                    label="Remedial"
                    onChange={(e)=>setType(e.target.value)}
                  />
                </RadioGroup>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Status</Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  fullWidth={true}
                  onChange={(e)=>setStatus(e.target.value)}
                  // onChange={handleChange}
                >                  
                  <MenuItem value={1}>New</MenuItem>
                  <MenuItem value={2}>Handover To Approve</MenuItem>
                  <MenuItem value={3}>Handover Approved/Rejected</MenuItem>
                  <MenuItem value={4}>Handback To Accept</MenuItem>
                </Select>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Site*</Typography>
                <TextField
                id="site"
                name={'Site'}
                inputProps={{
                  maxLength: 255,
                }}
                fullWidth
                placeholder="Enter site"
                onChange={(e)=>setSite(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Handover Reference*</Typography>
                <TextField
                  id="handover_reference"
                  name={'Handover Reference'}
                  inputProps={{
                    maxLength: 255,
                  }}
                  fullWidth
                  placeholder="Enter handover reference"
                  onChange={(e)=>setHandover(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <Typography mt="5px" color="#2441E5" fontWeight={600} className="heading-fl" component="div">Contact Information</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Authorized person name*</Typography>
                <TextField
                id="person_name"
                name={'Authorized person name'}
                inputProps={{
                  maxLength: 255,
                }}
                fullWidth
                placeholder="Enter authorized person name"
                onChange={(e)=>setPersonname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Telephone number*</Typography>
                <TextField
                  id="auth_person_telephone_number"
                  name={'Telephone number'}
                  inputProps={{
                    maxLength: 255,
                  }}
                  fullWidth
                  placeholder="Enter telephone number"
                  onChange={(e)=>setAuthTele(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Contractor name*</Typography>
                <TextField
                id="contractor_name"
                name={'Contractor name'}
                inputProps={{
                  maxLength: 255,
                }}
                fullWidth
                placeholder="Enter contractor name"
                onChange={(e)=>setContractorName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Telephone number*</Typography>
                <TextField
                  id="contractor_telephone_number"
                  name={'Contractor number'}
                  inputProps={{
                    maxLength: 255,
                  }}
                  fullWidth
                  placeholder="Enter telephone number"
                  onChange={(e)=>setContractorTele(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Contactor representative name*</Typography>
                <TextField
                id="representative_name"
                name={'Contactor representative name'}
                inputProps={{
                  maxLength: 255,
                }}
                fullWidth
                placeholder="Enter contactor representative name"
                onChange={(e)=>setRepresentative(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Telephone number</Typography>
                <TextField
                  id="representative_telephone_number"
                  name={'Telephone number'}
                  inputProps={{
                    maxLength: 255,
                  }}
                  fullWidth
                  placeholder="Enter telephone number"
                  onChange={(e)=>setRepresentativeTele(e.target.value)}
                />
            </Grid>

           
            
            
           
            
            
            </Grid>
            </form>
    </Box>
  );
}

export default SectionOneTab;
