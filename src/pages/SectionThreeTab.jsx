import {  Box, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, Select,MenuItem } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export function SectionThreeTab() {
  return (
    <Box p="15px">   
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
                  />
                </RadioGroup>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Status</Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  label="Status"
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
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <Typography mt="5px" component="div">Contact Information</Typography>
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
                />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Contactor representative name*</Typography>
                <TextField
                id="representatie_name"
                name={'Contactor representative name'}
                inputProps={{
                  maxLength: 255,
                }}
                fullWidth
                placeholder="Enter contactor representative name"
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
                />
            </Grid>

           
            
            
           
            
            
            </Grid>
           
    </Box>
  );
}

export default SectionThreeTab;
