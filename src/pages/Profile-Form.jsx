import { Box, Grid, TextField,Switch, FormControlLabel } from "@mui/material";
import Profile from "./Profile-Form";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import {useEffect, useState} from 'react';
import { IsDataFromAPI } from "./DataCollection";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function ProfileForm(){
    const userDetails = useSelector((state)=> state && state.commonReducer && state.commonReducer.user );  
    const { token, user } = userDetails;
    let IsDataFromAPI = JSON.parse(localStorage.getItem('IsDataFromAPI'));
    let [checked, setChecked] = useState(IsDataFromAPI[0].flag);

    const handleChange = (event) => {
        // IsDataFromAPI.push();
        // console.log(event.target.checked);
        IsDataFromAPI[0].flag = event.target.checked ? true : false;               
        setChecked(event.target.checked);
        localStorage.setItem('IsDataFromAPI',JSON.stringify(IsDataFromAPI));
        // console.log(localStorage.getItem('IsDataFromAPI'),IsDataFromAPI); 
      };
    // useEffect(()=>{
    //     checked = IsDataFromAPI && IsDataFromAPI[0].flag ? true : false;
    // },[])
    useEffect(()=>{
        // console.log('IsDataFromAPI[0].flag',checked)
        // setChecked(true);
    },[]);
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
                defaultValue={user?.name}
                />
                <TextField
                required
                id="outlined-required"
                label="Contact No"
                defaultValue={user?.mobileNumber}
                />
            </div>   
            <div>
                <TextField
                disabled
                id="outlined-required"
                label="Role"
                required
                defaultValue={user?.role}
                />
                <TextField
                required
                id="outlined-required"
                label="Company"
                defaultValue={user?.company}
                />
            </div>  
            <div>
                <FormControlLabel control={<Switch checked = {checked} onChange={handleChange}/>} label="Is Data From API" />
              </div>    
        </Box>
        </>
    )
}

export default ProfileForm;