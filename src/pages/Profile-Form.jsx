import { Box, Grid, TextField } from "@mui/material";
import Profile from "./Profile-Form";
import Header from "./Header";
import Sidebar from "./Sidebar";

function ProfileForm(){
    let username = localStorage.getItem('username')
    return(
        <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <div>
                <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue={username}
                />
                <TextField
                required
                id="outlined-required"
                label="Contact No"
                defaultValue="Hello World"
                />
            </div>   
            <div>
                <TextField
                required
                id="outlined-required"
                label="Password"
                defaultValue=""
                />
                <TextField
                required
                id="outlined-required"
                label="Confirm Password"
                defaultValue=""
                />
            </div>  
            <div>
                
                <TextField
                required
                id="outlined-required"
                label="Confirm Password"
                defaultValue=""
                />
            </div>    
        </Box>
        </>
    )
}

export default ProfileForm;