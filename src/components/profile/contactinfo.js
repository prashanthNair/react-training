import { Grid, TextField } from '@mui/material';
import React, {useState} from 'react'
import CustomTextField from '../customtext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



export default function Contactinfo(props) {

  //function selectLanguage() {
    const [language, setLanguage] = useState('');
    const [open, setOpen] = useState(false);
  
    const handleChange = (event) => {
      setLanguage(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

  return (
    <div>
      <Grid container>
          <Grid item xs={4}><h3>Contact Info</h3></Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Contact Name"
            value={props.details.Name}
            defaultValue="Contact Name"
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Contact Number"
            value={props.details.Mobile}
            defaultValue="Contact Number"
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Email Address"
            value={props.details.EmailId}
            defaultValue="Email Address"
          />
          </Grid>
          <Grid item xs={6}>
          <FormControl sx={{ m: 2, width: 230 }}>
        <InputLabel id="Language select">Language</InputLabel>
        <Select
          labelId="Prefered Language"
          id="outlined-required"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.details.Languages.label}
          label="language"
          onChange={handleChange}
        >
          <MenuItem value="English">
            //<em>None</em>
          </MenuItem>
          <MenuItem value={10}>English</MenuItem>
          
        </Select>
      
      </FormControl>
          </Grid>

          </Grid>
    </div>
  );
  
}
