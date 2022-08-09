import { Container, Grid, Stack, Typography } from '@mui/material';
import {
    EarningsBarGraph,
    EarningsCard,
    OverViewCards,
    RevenueUpdates,
    YearlySalesPieGraph,
} from '../components';
const Dashboard = () => {
    return (
        <Container>
            <Grid
                container
                direction="column"
                justifyContent={'center'}
                alignItems={'center'}
                spacing={6}>
                <Grid item>
                    {/* Earnings and Overview Cards */}
                    <Grid container direction={'row'}>
                        <Grid item xs={4}>
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
                    p={1}
                    m={1}
                    width="90%"
                    sx={{ backgroundColor: '#ffffff' }}>
                    <RevenueUpdates />
                </Grid>
                {/* Earnings Overview Card */}
                <Grid item height="100%">
                    <EarningsBarGraph />
                </Grid>
                <Grid item>
                    <YearlySalesPieGraph />
                </Grid>
                <Grid item>
                    <p>&#169; 2022 All rights reserved by SCA Company</p>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
