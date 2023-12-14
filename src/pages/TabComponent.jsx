import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import SectionOneTab from './SectionOneTab';
import SectionTwoTab from './SectionTwoTab';
import SectionThreeTab from './SectionThreeTab';
import SectionFourTab from './SectionFourTab';
import Handover from './handover';
import Notes from './notes';

function TabComponent() {
  
  return (
    <>
    <Box display="flex"  justifyContent="end">
      <Button variant="outlined" sx={{mr:"5px"}}>Submit YW for Approval</Button>
      <Button type='submit' variant="contained" form="hook-form" >Save</Button>
    </Box>
    <Tabs
      defaultActiveKey="test-tab"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="test-tab" title="Section 1">
      <SectionOneTab></SectionOneTab>
      </Tab>
      <Tab eventKey="section2" title="Section 2">
      <SectionTwoTab></SectionTwoTab>
      </Tab>
      <Tab eventKey="section3" title="Section 3">
        <SectionThreeTab></SectionThreeTab>
      </Tab>
      <Tab eventKey="section4" title="Section 4">
        <SectionFourTab></SectionFourTab>
      </Tab>
      <Tab eventKey="Handover/Handback" title="Handover/Handback">
        <Handover></Handover>
      </Tab>
      <Tab eventKey="Notes" title="Notes">
        <Notes></Notes>
      </Tab>
      {/* <Tab eventKey="Change History" title="Change History">
        <SectionFourTab></SectionFourTab>
      </Tab> */}
    </Tabs>
    </>
  );
}

export default TabComponent;