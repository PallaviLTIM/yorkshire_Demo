import * as React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Button, Box, Snackbar } from '@mui/material';
// import { useForm } from 'react-hook-form';
import SectionOneTab from './SectionOneTab';
import SectionTwoTab from './SectionTwoTab';
import SectionThreeTab from './SectionThreeTab';
import SectionFourTab from './SectionFourTab';
import Handover from './Handover';
import Notes from './notes';
import { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { VerticalAlignTop } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import DataTable from './Certificate-List';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TabComponent(props) {
  const [open, setOpen] = useState(false);
  const [showDetails,setShowDetails]=useState(props?.showDetails)
  const [detailsSaved,setDetailsSaved]=useState(false)
  const [formSubmitted,setFormSubmitted]=useState(false)
  const[formSuccess,setFormSuccess]=useState(false)
  const navigate = useNavigate();

  const handleSaveClick = () => {
    setOpen(true);
    setFormSubmitted(true)
  }; 

  const handleEdit=()=>{
     setShowDetails(!props?.showDetails)
  }

  const handleSave=()=>{
    setDetailsSaved(true)
 }
  
 const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
  navigate('/certification')
  setFormSuccess(true)
};
  return (
    <>
     {!formSuccess? <><Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          YW is submitted for Approval!
        </Alert>
      </Snackbar><Box display="flex" className="mb-5" justifyContent="end">
          {!formSubmitted ? <Button variant="outlined" sx={{ mr: "5px" }} onClick={handleSaveClick}>Submit YW for Approval</Button> : <Button variant="outlined" sx={{ mr: "5px" }} onClick={handleSaveClick}>YW submitted for Approval</Button>}
          {showDetails ? <Button type='edit' variant="contained" form="hook-form" onClick={handleEdit}>Edit</Button> :
            <Button type='submit' variant="contained" form="hook-form" onClick={handleSave}>Save</Button>}
        </Box><Tabs
          defaultActiveKey="test-tab"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="test-tab" title="Section 1">
            <SectionOneTab showDetails={showDetails} detailsSaved={detailsSaved}></SectionOneTab>
          </Tab>
          <Tab eventKey="section2" title="Section 2">
            <SectionTwoTab showDetails={showDetails} detailsSaved={detailsSaved}></SectionTwoTab>
          </Tab>
          <Tab eventKey="section3" title="Section 3">
            <SectionThreeTab showDetails={showDetails} detailsSaved={detailsSaved}></SectionThreeTab>
          </Tab>
          <Tab eventKey="section4" title="Section 4">
            <SectionFourTab showDetails={showDetails} detailsSaved={detailsSaved}></SectionFourTab>
          </Tab>
          <Tab eventKey="Handover" title="Handover/Handback">
            <Handover showDetails={showDetails} detailsSaved={detailsSaved}></Handover>
          </Tab>
          <Tab eventKey="Notes" title="Notes">
            <Notes showDetails={showDetails} detailsSaved={detailsSaved}></Notes>
          </Tab>
          {/* <Tab eventKey="Change History" title="Change History">
      <SectionFourTab></SectionFourTab>
    </Tab> */}
        </Tabs></>:<DataTable/>}
    </>
  );
}

export default TabComponent;