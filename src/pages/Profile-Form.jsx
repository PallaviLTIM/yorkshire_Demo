import { Box, Grid, TextField } from "@mui/material";
import Profile from "./Profile-Form";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function ProfileForm(){
    const userDetails = useSelector((state)=> state && state.commonReducer && state.commonReducer.user );  
    const { token, user } = userDetails;
    console.log(user);
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
                defaultValue={user.name}
                />
                <TextField
                required
                id="outlined-required"
                label="Contact No"
                defaultValue={user.mobileNumber}
                />
            </div>   
            <div>
                <TextField
                disabled
                id="outlined-required"
                label="Role"
                required
                defaultValue={user.role}
                />
                <TextField
                required
                id="outlined-required"
                label="Company"
                defaultValue={user.company}
                />
            </div>  
            {/* <div>
                
                <TextField
                required
                id="outlined-required"
                label="Confirm Password"
                defaultValue=""
                />
            </div>     */}
        </Box>
        </>
    )
}

export default ProfileForm;