import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Contactinfo from './contactinfo';
import Billinginformation from './billinginformation';

export default function ProfileDetails(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Contact Info
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Contactinfo details={props.data.ContactDetails}></Contactinfo>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Billing Info
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Billinginformation details={props.data.AddressDetails.BillingAddress}></Billinginformation>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
