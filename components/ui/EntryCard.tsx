import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { Entry } from "../../interfaces";
import { DragEvent, FC, useContext } from "react";
import { UIContext } from "../../context/ui/UIContext";

interface Props {
  entry: Entry;
}

export const EntryCard:FC<Props> = ({ entry }) => {

  const { startDragging, endDragging } = useContext( UIContext  )

   const onDrangStart = (event: DragEvent) => {
      event.dataTransfer.setData("text", entry._id);

      startDragging();
   }

   const onDrangEnd = () => {
     
    endDragging();

   }

  return (
   <Card
     sx={{ marginBottom: 1 }}
     draggable
     onDragStart={onDrangStart}
     onDragEnd={ onDrangEnd } 
   >
       <CardActionArea>
           <CardContent>
             <Typography sx={{ whiteSpace:  'pre-line' }} >
                { entry.description }
             </Typography>
           </CardContent>

           <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant="body2">hace 30 minutos</Typography>
           </CardActions>
       </CardActionArea>
   </Card>
  )
}

