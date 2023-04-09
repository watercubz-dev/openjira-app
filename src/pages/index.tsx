import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Layout } from "../../components/layouts";
import { EntryCard, EntryList, NewEntry } from "../../components/ui";

export default function Home() {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={ 2 }>
      <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh)' }}>
            <CardHeader title='Pendientes' />
          
              {/* Agregar una nueva entrada */}
              <NewEntry />
              <EntryList status={"pending"}/>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card  sx={{ height: 'calc(100vh  )' }}>
            <CardHeader title='En Progreso' />
            <EntryList status={"in-progress"}/>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh  )' }}>
            <CardHeader title='Completadas' />
            <EntryList  status={"finished"}/>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  );
}
