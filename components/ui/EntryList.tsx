import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo } from 'react'
import { EntryCard } from './'
import { EntryStatus } from '../../interfaces'
import { EntriesContext } from '../../context/entries';

interface Props {
   status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {

   const { entries } = useContext( EntriesContext );

   const entriesByStatus = useMemo( () =>  entries.filter( entry => entry.status === status ), [ entries ] );

  return (
    <div>
       <Paper sx={{ height: 'calc(100vh - 20px)', overflow: 'auto' , backgroundColor: 'transparent', padding: '3px 5px'}}>
          
          <List sx={{ opacity: 100 }}>
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

 