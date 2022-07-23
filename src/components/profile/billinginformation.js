import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';

export default function Billinginformation(props) {

  const[check, setCheck]= useState(false);
  const[state, setState] = useState({
    "AddressLine1": "",
    "AddressLine2": "",
    "Pincode": "",
    "City": "",
    "State": "",
    "Phone": "",
} );

const onChange = (e)=>{
  const {label, value}= e.target
  setState((prevState)=>({
    ...prevState,
    [label]: value
  }

  )
  )
  
}

  
    
 

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary
  }));

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item style={{fontWeight: 'bold'}}>Billing Information</Item>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Address Line1"
            value={props.details.AddressLine1}
            defaultValue="Address"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Address Line2"
            value={props.details.AddressLine2}
            defaultValue="Address"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Pincode"
            value={props.details.PinCode}
            defaultValue="Pincode"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="City"
            value={props.details.City}
            defaultValue="City"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="State"
            value={props.details.State}
            defaultValue="State"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Phone"
            value={props.details.Phone}
            defaultValue="Phone"
          />
        </Grid>

        <Grid item xs={12}>
           <Item style={{fontWeight: 'bold'}}>
           <Checkbox {...label} />
            Is Billing Address same as Shipping Address?
           </Item>
       </Grid>
       <Grid  item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Address Line1"
            defaultValue="Address"
            autoComplete='{false}'
            value={props.details.AddressLine1}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Address Line2"
            defaultValue="Address"
            autoComplete='{false}'
            value={props.details.AddressLine2}
            
            
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Pincode"
            defaultValue="Pincode"
            autoComplete='{false}'
            value={props.details.PinCode}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="City"
            defaultValue="City"
            autoComplete='{false}'
            value={props.details.City}
            
            
            
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="State"
            defaultValue="State"
            autoComplete='{false}'
            value={props.details.State}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Phone"
            defaultValue="Phone"
            autoComplete='{false}'
            value={props.details.Phone}
            
          />
        </Grid>
        

      </Grid>
    </Box>
  );
}
