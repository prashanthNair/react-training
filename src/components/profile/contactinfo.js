import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTextField from '../customtext';
import { Grid } from '@mui/material';

export default function Contactinfo() {
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
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
          <Grid item xs={4}><h3>Contact Info</h3></Grid>
          </Grid>
          <Grid container>
          <Grid item xs={6}><CustomTextField text="Contact name"></CustomTextField></Grid>
          <Grid item xs={6}><CustomTextField text="Contact number"></CustomTextField></Grid>
          </Grid>
          <Grid container>
          <Grid item xs={6}><CustomTextField text="Email Address"></CustomTextField></Grid>
          <Grid item xs={6}><CustomTextField text="Preffered Language"></CustomTextField></Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
