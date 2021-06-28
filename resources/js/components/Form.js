import React, { useState } from 'react';
// material ui
import { TextField, Grid, Box } from '@material-ui/core';
import { Button} from '@material-ui/core';
var prop = "name";
const Form = ({callback, submitAction}) => {
    
    const [formValues, setFormValues] = useState({
        "name": "hola",
        "email": "",
        "password": "",
    });

    const handleInput = (event) => {
        ;
        setFormValues(formValues => ({
            ...formValues,
            [event.target.name]: event.target.value
        }))
    };
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Box m={0.5}>
              <TextField label="User" name="name" variant="outlined" value={formValues.name} onChange={handleInput}/>
            </Box>
            <Box m={0.5}>
              <TextField label="Email" name="email" variant="outlined" value={formValues.email} onChange={handleInput} />
            </Box>
            <Box m={0.5}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={formValues.password}
                name="password"
                onChange={handleInput}
              />
            </Box>
            <Box m={0.5}>
              <Button variant="contained"  color="primary" onClick={() => submitAction(formValues, callback)}>Add</Button>
            </Box>
           </Grid> 
    )
}

export default Form;