import {  Box, Button, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FileUploadIcon from '@mui/icons-material/FileUpload'; 
import {useState} from "react";
import { useForm } from 'react-hook-form';

export function SectionTwoTab() {
  const [location_details, setLocationDetails] = useState('');
  const [equipment_details, setEquipmentDetails] = useState('');
  const [work_details, setWorkDetails] = useState('');
  const [site_access_arrangements, setSiteAccessArrangments] = useState('');
  const [commence_date, setCommenceDate] = useState('');
  const [completion_date, setCompletionDate] = useState('');
  const [isInspectionUnderTaken, setIsInspectionUnderTaken] = useState('');
  const [isStartOnSiteLetter, setIsStartOnSiteLetter] = useState('');
  const [isHealthNSaftey, setIsHealthNSaftey] = useState('');
  const [hnsfile, setHNSFile] = useState('');
  const [isFallUnderCDM,setIsFallUnderCDM] = useState('')
  // setDuration(e) {
  //   // completion_date commence_date
  // };
  const { handleSubmit } = useForm();
  const onSubmit =async e => {
    let certificate_id = localStorage.getItem('certificate_id');
    let formData = {
      "id": certificate_id, 
      "mode": "Manual", 
      "handover_Reference": "Certificate_Testing_Handover8", 
      "site_Location": location_details, 
      "equipments": equipment_details, 
      "access_Arrangements": site_access_arrangements, 
      "work_Description": work_details, 
      "commence_Date": commence_date, 
      "completion_Date": completion_date, 
      "isInspectionUnderTaken": isInspectionUnderTaken, 
      "isStartOnSiteLetter": isStartOnSiteLetter, 
      "isHealthNSaftey": isHealthNSaftey, 
      'hnsfile': hnsfile,
      'isFallUnderCDM': isFallUnderCDM,
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
    <Box >
     <Typography>Details(Location on site/working area(s))</Typography>
       <TextField
            id="location_details"
            name={'Details'}
            fullWidth
            size="small"
            placeholder="Enter location on site working areas"
            onChange={(e)=>setLocationDetails(e.target.value)}
          />
          </Box>
          <Grid container rowSpacing={2} columnSpacing={3} mt='2px'>
           <Grid item xs={12} md={6}>
           <Typography>Add site plan (Only a single plan is permitted per certificate)</Typography>        
         <Box  padding="20px" border=" 1px dashed #D8D8D8" height='87px'> 

         <Box border="1px solid" color="#2441E5" padding="7px" width="305px">
         <Button>Site plan attachement<FileUploadIcon color="primary" />         
            <input
            type="file"
            id="file"     
            name="file"
            style={{ 
                cursor: "pointer",
                position: "absolute",
                opacity: "0",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0"
              }}  />
              </Button>
              </Box>
          </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography>Equipment to be worked on</Typography>
           <TextField
            id="equipment_details"
            name={'Equipment Details'}
            size="small"
            fullWidth
            placeholder="Enter details"
            onChange={(e)=>setEquipmentDetails(e.target.value)}
          />
            </Grid>
            <Grid item xs={12} md={6}>
           <Typography>Site access arrangements</Typography>
            <TextField
            id="site_details"
            name={'Site details'}
            size="small"
            fullWidth
            placeholder="Enter details"
            onChange={e=>setSiteAccessArrangments(e.target.value)}
          />
            </Grid>
            <Grid item xs={12} md={3}>
            <Typography>Date work commences*</Typography>
           <TextField
            id="commences_date_details"
            type="date"
            name={'Date commences'}
            size="small"
            fullWidth
            format="MM/DD/YYYY"
            onChange={e=>setCommenceDate(e.target.value)}
          />
            </Grid>
            <Grid item xs={12} md={3}>
            <Typography>Expected work completion date*</Typography>
           <TextField
            id="completion_date_details"
            type="date"
            name={'Date commences'}
            size="small"
            fullWidth
            format="MM/DD/YYYY"
            onChange={e=>setCompletionDate(e.target.value)}
            // onMouseLeave={e=>setDuration(e.target.value)}
          />
         <Typography fontSize="14px" ml="auto" component="div">(Must be within 12 months of date work commence)</Typography>
            </Grid>
          <Grid item xs={12} md={4}>
           <Typography>Project Duration</Typography>
            <TextField
            id="project_duration"
            name={'Project Duration'}
            fullWidth
            placeholder="0"
            size="small"
          />
            </Grid>
            <Grid item xs={12} md={8}>
            <Typography>Description of work to be done</Typography>
           <TextField
            id="work_details"
            type="text"
            name={'Date commences'}
            placeholder="Enter here"
            fullWidth  
            size="small"   
            onChange={(e)=>setWorkDetails(e.target.value)}  
          />
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography mt="5px" component="div">Joint site inspection undertaken</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    name="IsInspectionUnderTaken"
                    id="IsInspectionUnderTaken"
                  />       
                }
                label="Yes"
                onChange={e=>setIsInspectionUnderTaken(e.target.value)}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    name="IsInspectionUnderTaken"
                    id="IsInspectionUnderTaken"
                  />
                }
                label="No"
                onChange={e=>setIsInspectionUnderTaken(e.target.value)}
              />
            </RadioGroup>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography mt="5px" component="div">Does the work fall under CDM</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    name="isFallUnderCDM"
                    id="isFallUnderCDM"
                  />       
                }
                onChange={(e)=>setIsFallUnderCDM(e.target.value)}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    name="isFallUnderCDM"
                    id="isFallUnderCDM"
                  />
                }
                label="No"
                onChange={(e)=>setIsFallUnderCDM(e.target.value)}
              />
            </RadioGroup>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography mt="5px">Start on site letter</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    name="site_letter"
                    id="site_letter"
                  />       
                }
                label="Yes"
                onChange={e=>setIsStartOnSiteLetter(e.target.value)}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    name="site_letter"
                    id="site_letter"
                  />
                }
                label="No"
                onChange={e=>setIsStartOnSiteLetter(e.target.value)}
              />
            </RadioGroup>
            </Grid>
            <Grid item xs={12} md={6}>
           <Typography mt="5px" color="#2441E5" fontSize="18px">Health & Safety</Typography>
            <Typography color="#131C42">Is there an approved health and safety plan and/or method statement for the work?</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    name="isHealthNSaftey"
                    id="isHealthNSaftey"
                  />       
                }
                label="Yes"
                onChange={e=>setIsHealthNSaftey(e.target.value)}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    name="isHealthNSaftey"
                    id="isHealthNSaftey"
                  />
                }
                label="No"
                onChange={e=>setIsHealthNSaftey(e.target.value)}
              />
            </RadioGroup> 
            </Grid>
            <Grid item xs={12} md={6}>
      
        <Typography mt="30px">Add site plan (Only a single plan is permitted per certificate)</Typography>        
         <Box  padding="20px" border=" 1px dashed #D8D8D8"> 
         <Box border="1px solid" color="#2441E5" padding="7px" width="350px" >    
         <Button sx={{color:"#2441E5"}} >Health & safety plan attachment<FileUploadIcon color="primary" />    
           <input
            type="file"
            id="hnsfile"     
            name="hnsfile"
            style={{ 
                cursor: "pointer",
               position: "absolute",
               opacity: "0",
               top: "0",
               right: "0",
               bottom: "0",
               left: "0"
              }}  
              onChange={e=>setHNSFile(e.target.value)}
              />
              </Button>
              </Box>
              </Box>
            </Grid>
            </Grid>
            <Typography fontWeight="700" fontSize="18px" mt="10px">If there is no health and safety plan and/or method statement in place, the work cannot proceed.</Typography>
            <Box border="1px solid #D8D8D8" padding="10px" >
            <Typography fontSize="18px" >Note</Typography>
          <FiberManualRecordIcon fontSize='1px'/>  <Typography  fontWeight="400" component="span">Any work in existing YWS electrical systems is subjected to separate authorization*. Check authorization in the method statement/H&S plan. See section 4 </Typography><br/>
           <FiberManualRecordIcon fontSize='1px'/> <Typography  fontWeight="400" component="span">Entry into any YWS confined spaces not referred to in the H&S plan or method statement will require separate authorization*. See section 4 </Typography>
           </Box>
      </form>
    </Box>
  );
}

export default SectionTwoTab;
