import { Grid, Typography } from "@mui/material";

export function ViewCertificate(props){

    return (
        <Grid container >
         <Grid item xs={12} md={6}>
            <Typography>Type*</Typography>
            <Typography>{props.certificateDetails[0]?.type}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography>Status*</Typography>
            <Typography>{props.certificateDetails[0]?.status}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography>Site*</Typography>
            <Typography>{props.certificateDetails[0]?.site}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography>Handover reference*</Typography>
            <Typography>{props.certificateDetails[0]?.handover_Reference}</Typography>
         </Grid>
         <Grid item xs={12} md={12}>
                <Typography mt="5px" color="#2441E5" fontWeight={600}  component="div">Contact Information</Typography>
            </Grid>
         <Grid item xs={12} md={6}>
            <Typography>Authorized person name*</Typography>
            <Typography>{props.certificateDetails[2]?.authorized_Person}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography>Telephone Number</Typography>
            <Typography>{props.certificateDetails[0]?.mobileNumber}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography>Contractor name*</Typography>
            <Typography>{props.certificateDetails[0]?.contractor}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography>Telephone Number</Typography>
            <Typography>{props.certificateDetails[0]?.mobileNumber}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography>Contractor representative name*</Typography>
            <Typography>{props.certificateDetails[0]?.contractor_Representative}</Typography>
         </Grid>
         <Grid item xs={12} md={6}>
            <Typography>Telephone Number</Typography>
            <Typography>{props.certificateDetails[0]?.mobileNumber}</Typography>
         </Grid>
        </Grid>
    )
}