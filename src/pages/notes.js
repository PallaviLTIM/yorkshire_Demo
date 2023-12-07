import {  Box, Button, TextField, Typography} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export function Notes() {
  return (
    <Box p="15px">   
          <Typography fontWeight="600" color="#131C42">Notes</Typography>
          <Typography mt="5px">Your Notes</Typography>
          <TextField
            id="notes"
            size="small"
            name={'Notes'}
            fullWidth
            placeholder="Enter notes"
           />
          <Box border="1px solid #D8D8D8" padding="10px" mt="20px">
      
        <Box border="1px solid" color="#2441E5" padding="7px" width="320px">
         <Button>Attach your documents/notes<FileUploadIcon color="primary" />         
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
            
    </Box>
  );
}

export default Notes;