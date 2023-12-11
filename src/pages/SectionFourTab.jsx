import {  Box, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
//  import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
//  import FileUploadIcon from '@mui/icons-material/FileUpload';

function SectionFourTab() {
  return (
    <Box p="15px">
    
     <Typography fontWeight="700" color="#131C42">Additional Safety Requirements</Typography>
     <Typography mt="5px">Site rules</Typography>
       <TextField
            id="site_rules"
            name={'Site Rules'}
            fullWidth
            multiline
            rows={2}
            variant="outlined"
          />
            <Typography mt="10px">Site/emergency procedures</Typography>
       <TextField
            id="site_rules"
            name={'Site Rules'}
            fullWidth
            multiline
            rows={2}
            variant="outlined"
          />
             <Typography mt="10px">Any other instructions/conditions</Typography>
       <TextField
            id="site_rules1"
            name={'Site Rules'}
            fullWidth
            multiline
            rows={2}
            variant="outlined"
          />
             <Typography mt="10px">Need for access by YW personnel/others</Typography>
       <TextField
            id="site_rules2"
            name={'Site Rules'}
            fullWidth
            multiline
            rows={2}
            variant="outlined"
          />
             <Typography mt="10px">Issue of permit to work specific tasks - electrical, non-electrical, pressure system - detail type and task</Typography>
       <TextField
            id="site_rules3"
            name={'Site Rules'}
            fullWidth
            multiline
            rows={2}
            variant="outlined"
          />       
    </Box>
  );
}

export default SectionFourTab;
