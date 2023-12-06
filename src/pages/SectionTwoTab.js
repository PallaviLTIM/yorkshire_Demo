import {  Box, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
 import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export function SectionTwoTab() {
  return (
    <Box p="15px">
    <Box >
     <Typography>Details(Location on site/working area(s))</Typography>
       <TextField
            id="location_details"
            name={'Details'}
            inputProps={{
              maxLength: 255,
            }}
            fullWidth
            placeholder="Enter location on site working areas"
          />
          </Box>
          <Grid container rowSpacing={2} columnSpacing={3} mt='2px'>
           <Grid item xs={12} md={6}>
           <Typography>Add site plan (Only a single plan is permitted per certificate)</Typography>
            <TextField
            id="location_details"
            name={'Details'}
            inputProps={{
              maxLength: 255,
            }}
            fullWidth
            placeholder="Enter location on site working areas"
          />
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography>Equipment to be worked on</Typography>
           <TextField
            id="equipment_details"
            name={'Equipment Details'}
            inputProps={{
              maxLength: 255,
            }}
            fullWidth
            placeholder="Enter details"
          />
            </Grid>
            <Grid item xs={12} md={6}>
           <Typography>Site access arrangements</Typography>
            <TextField
            id="site_details"
            name={'Site details'}
            inputProps={{
              maxLength: 255,
            }}
            fullWidth
            placeholder="Enter details"
          />
            </Grid>
            <Grid item xs={12} md={3}>
            <Typography>Date work commences*</Typography>
           <TextField
            id="date_details"
            type="date"
            name={'Date commences'}
            inputProps={{
              maxLength: 255,
            }}
            fullWidth
            format="MM/DD/YYYY"
          />
            </Grid>
            <Grid item xs={12} md={3}>
            <Typography>Expected work completion date*</Typography>
           <TextField
            id="date_details"
            type="date"
            name={'Date commences'}
            inputProps={{
              maxLength: 255,
            }}
            fullWidth
            format="MM/DD/YYYY"
          />
         <Typography fontSize="14px" ml="auto">(Must be within 12 months of date work commence)</Typography>
            </Grid>
          <Grid item xs={12} md={4}>
           <Typography>Project Duration</Typography>
            <TextField
            id="project_details"
            name={'Project details'}
            fullWidth
            placeholder="0"
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
                    name="status"
                    id="status"
                  />       
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    name="status"
                    id="status"
                  />
                }
                label="No"
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
                    name="status"
                    id="status"
                  />       
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    name="status"
                    id="status"
                  />
                }
                label="No"
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
                    name="status"
                    id="status"
                  />       
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    name="status"
                    id="status"
                  />
                }
                label="No"
              />
            </RadioGroup>
            </Grid>
            <Grid item xs={12} md={12}>
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
                    name="status"
                    id="status"
                  />       
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    name="status"
                    id="status"
                  />
                }
                label="No"
              />
            </RadioGroup> 
            </Grid>
            </Grid>
            <Typography fontWeight="700" fontSize="18px">If there is no health and safety plan and/or method statement in place, the work cannot proceed.</Typography>
            <Typography fontSize="18px" color="#131C42">Note</Typography>
          <FiberManualRecordIcon fontSize='1px'/>  <Typography component="span">Any work in existing YWS electrical systems is subjected to separate authorization*. Check authorization in the method statement/H&S plan. See section 4 </Typography><br/>
           <FiberManualRecordIcon fontSize='1px'/> <Typography component="span">Entry into any YWS confined spaces not referred to in the H&S plan or method statement will require separate authorization*. See section 4 </Typography>

    </Box>
  );
}

export default SectionTwoTab;
