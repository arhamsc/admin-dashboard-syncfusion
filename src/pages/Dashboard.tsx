import { Container, Grid } from '@mui/material';
import { EarningsCard, OverViewCards } from '../components';
const Dashboard = () => {
    return (
        <Container>
            <Grid container direction={'row'} width="100%">
                <Grid item xs={4} md={4}>
                    <EarningsCard />
                </Grid>
                <Grid item xs={8}>
                    <OverViewCards />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
