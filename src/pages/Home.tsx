import ScoreBoardTable from '../components/ScoreBoardTable'
import WaitingList from '../components/WaitingListTable'
import Grid from '@mui/material/Grid'

function HomePage () {
  return (
    <div>
      <h1>Welcome to the waiting list</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <h2>Waiting List</h2>
          <WaitingList />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>ScoreBoardTable</h2>
          <ScoreBoardTable />
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage
