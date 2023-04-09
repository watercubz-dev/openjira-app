import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";


export function EntryCard() {
  return (
   <Card
     sx={{ marginBottom: 1 }}
   >
       <CardActionArea>
           <CardContent>
             <Typography sx={{ whiteSpace:  'pre-line' }} >
                esto es la descriptions
             </Typography>
           </CardContent>

           <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant="body2">hace 30 minutos</Typography>
           </CardActions>
       </CardActionArea>
   </Card>
  )
}

