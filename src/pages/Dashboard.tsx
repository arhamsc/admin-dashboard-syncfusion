import { Box, Grid } from '@mui/material'
import { EarningsCard } from '../components'

const Dashboard = () => {
  return (
    <Box>
        <Grid container direction={"column"}>
            <Grid item>
                <EarningsCard/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Dashboard