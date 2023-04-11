import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { EntriesContext } from "../../context/entries";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext)

  const valueInput = ( event: ChangeEvent<HTMLInputElement  > ) => {
     setInputValue( event.target.value );
  }

  const onSave =  () => {

      if ( inputValue.length === 0 ) return; 

      addNewEntry(inputValue);
      setIsAdding( false );
      setTouched( false );
      setInputValue("");
        
      
  }
   
  return (
    <Box sx={{ marginBottom: 2, padding: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="nueva entrada"
            autoFocus
            multiline
            label="nueva entrada"
            helperText={ inputValue.length <= 0 && touched && 'ingrese un valor' }
            error={ inputValue.length <= 0 && touched }
            value={inputValue}
            onChange={ valueInput  }
            onBlur={ () => setTouched (true) }
          />

          <Box display="flex" justifyContent="space-between">
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={ onSave }
            >
              Guardar
            </Button>

            <Button
             variant="text"
             onClick={ () => setIsAdding(false) }
             >
              cancelar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<ControlPointOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={ () => setIsAdding(true) }
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
