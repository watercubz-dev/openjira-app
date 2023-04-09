import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryCard } from './'

export const EntryList = () => {
  return (
    <div>
       <Paper sx={{ height: 'calc(100vh - 250px)', backgroundColor: 'transparent', padding: 1 }}>
          
          <List sx={{ opacity: 1 }}>
             <EntryCard />
          </List>

       </Paper>
    </div>
  )
}

 