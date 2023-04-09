import { Box, Button, TextField } from "@mui/material";
import React from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, padding: 2  }}>

       
       <Button
        startIcon={ < ControlPointOutlinedIcon /> } 
        fullWidth
        variant="outlined"

       >
         Agregar tarea
       </Button>


       <TextField
          fullWidth
          sx={{ marginTop: 2, marginBottom: 1 }} 
          placeholder='nueva entrada'
          autoFocus
          multiline
          label='nueva entrada'
          helperText='ingrese un guevo'
       />

      <Box display='flex' justifyContent='space-between'>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>

        <Button
          variant="text"
        
        >
          cancelar
        </Button>

      </Box>
    </Box>
  );
};
