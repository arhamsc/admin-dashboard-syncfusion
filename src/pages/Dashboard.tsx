import { Container, Grid } from '@mui/material';
import { EarningsCard, OverViewCards, RevenueUpdates } from '../components';
const Dashboard = () => {
    return (
        <Container>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item>
                    {/* Earnings and Overview Cards */}
                    <Grid container direction={'row'}>
                        <Grid item xs={4} md={4}>
                            <EarningsCard />
                        </Grid>
                        <Grid item xs={8}>
                            <OverViewCards />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Revenue Updates */}
                <Grid
                    item
                    mt={4}
                    p={1}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width="90%"
                    sx={{ backgroundColor: '#ffffff', }}>
                    <RevenueUpdates />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
