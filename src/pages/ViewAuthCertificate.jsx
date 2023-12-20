import { Grid, Typography,Button,RadioGroup, FormControlLabel, Radio, setType } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export function ViewAuthCertificate(props){
    // const [showList, setShowList] = useState(props.showList);
    // let navigate = useNavigate();
    const [accept,setAccept] = useState('');
    const onSave = ()=>{

    }
    return (

        <Grid container>
         <Grid item xs={12} md={6}>
            
            {/* <Button variant="text" onClick={setShowList(true)}><ArrowBackIcon color="primary" /></Button> */}
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography></Typography>
            <Typography></Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Type*</Typography>
            <Typography>{props?.certificateDetails[0]?.type}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Status*</Typography>
            <Typography>{props?.certificateDetails[0]?.status}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Site*</Typography>
            <Typography>{props.certificateDetails[0]?.site}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Handover reference*</Typography>
            <Typography>{props.certificateDetails[0]?.handover_Reference}</Typography>
         </Grid>
         <Grid item xs={12} md={12}>
                <Typography mt="5px" color="#2441E5" fontWeight={600}  component="div">Contact Information</Typography>
            </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Authorized person name*</Typography>
            <Typography>{props.certificateDetails[0]?.authorized_Person}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Telephone Number</Typography>
            <Typography>{props.certificateDetails[0]?.mobileNumber}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Contractor name*</Typography>
            <Typography>{props.certificateDetails[0]?.contractor}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Telephone Number</Typography>
            <Typography>{props.certificateDetails[0]?.mobileNumber}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Contractor representative name*</Typography>
            <Typography>{props.certificateDetails[0]?.contractor_Representative}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">Telephone Number</Typography>
            <Typography>{props.certificateDetails[0]?.mobileNumber}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">createdBy</Typography>
            <Typography>{props.certificateDetails[0]?.createdBy}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography color="blue">createdBy</Typography>
            <Typography>{props.certificateDetails[0]?.createdBy}</Typography>
         </Grid>
         <Grid item xs={12} md={12}>
            <Grid item xs={12} md={6}>
            <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                >
                  <FormControlLabel
                    value="Approve"
                    control={
                      <Radio
                        name="accept"
                        id="accept"
                      />       
                    }
                    label="Approve"
                    onChange={(e)=>setAccept(e.target.value)}
                  />
                  <FormControlLabel
                    value="Reject"
                    control={
                      <Radio
                        name="accept"
                        id="accept"
                      />
                    }
                    label="Reject"
                    onChange={(e)=>setAccept(e.target.value)}
                  />
                </RadioGroup>
            </Grid>
            <Grid item xs={12} md={6}>
            <Button variant="contained" onClick={onSave}>Save</Button>
            </Grid>
         </Grid>
        </Grid>
    )
}