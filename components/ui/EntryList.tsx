import { List, Paper } from '@mui/material'
import React, { DragEvent, FC, useContext, useMemo } from 'react'
import { EntryCard } from './'
import { EntryStatus } from '../../interfaces'
import { EntriesContext } from '../../context/entries';
import { UIContext } from "../../context/ui/UIContext";

interface Props {
   status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {

   const { isDragging } = useContext( UIContext )

   const { entries, updateEntry } = useContext( EntriesContext );

   const entriesByStatus = useMemo( () =>  entries.filter( entry => entry.status === status ), [ entries ] );

   const allowDrop = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault(); 

   }

   const onDropEntry = ( event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text')

        const entry = entries.find( e => e._id === id )!;
        entry.status = status;
        updateEntry( entry );
        
   }

  return (
    <div
      onDrop={ onDropEntry }
      onDragOver={ allowDrop}  
    >
       <Paper sx={{ height: 'calc(100vh - 20px)', overflow: 'auto' , backgroundColor: 'transparent', padding: '3px 5px'}}>
          
          <List sx={{opacity: isDragging ? 0 : 1, transition: 'all .3s' }}>
               {
                  entriesByStatus.map( entry => (
                     <EntryCard key={entry._id} entry={entry} />
                  ))
               }
          </List>

       </Paper>
    </div>
  )
}

 