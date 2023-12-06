import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button, Box } from '@mui/material';
import SectionOneTab from './SectionOneTab';
import SectionTwoTab from './SectionTwoTab';
import SectionThreeTab from './SectionThreeTab';
import SectionFourTab from './SectionFourTab';

function TabComponent() {
  return (
    <>
    <Box>
      <Button variant="outlined" >Submit YW for Approval</Button>
      <Button variant="contained">Save</Button>
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
    </Tabs>
    </>
  );
}

export default TabComponent;