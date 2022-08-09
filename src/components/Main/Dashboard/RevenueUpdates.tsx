import {
    Button,
    Divider,
    Grid,
    Paper,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';
import { CSSProperties, FC } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import {
    SparklineComponent,
    Inject,
    SparklineTooltip,
} from '@syncfusion/ej2-react-charts';
import { SparklineAreaData } from '../../../data/dummyData/sparkLineData';
import RevenueUpdatesStacked from './RevenueUpdatesStacked';
import { TypographyH4 } from '../../Layout/UIComponents';

const LegendItem: FC<{ properties: CSSProperties; title: string }> = ({
    properties,
    title,
}) => {
    return (
        <span>
            <BsFillCircleFill color={properties.color} fontSize=".8rem" />
            <span
                style={{
                    ...properties,
                    paddingLeft: '1rem',
                    paddingRight: '2rem',
                }}>
                {title}
            </span>
        </span>
    );
};

const RevenueUpdates = () => {
    const theme = useTheme();
    return (
        <Paper elevation={2} sx={{ borderRadius: '0.6rem' }}>
            {/* Heading and Legend */}
            <Stack
                px={4}
                pt={2}
                pb={4}
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Typography fontWeight="bold" variant="h6">
                    Revenue Updates
                </Typography>
                <span>
                    <LegendItem
                        properties={{ color: theme.palette.secondary.main }}
                        title="Expense"
                    />
                    <LegendItem
                        properties={{ color: theme.palette.quaternary.main }}
                        title="Budget"
                    />
                </span>
            </Stack>
            <Grid
                container
                width="100%"
                justifyContent={'space-around'}
                px={6}
                pb={2}>
                {/* Highlights and Line Graph */}
                <Grid item alignItems={'center'}>
                    <TypographyH4
                        title="Budget"
                        amount={93438}
                        amountColor="#4B5563"
                    />
                    <TypographyH4
                        title="Expense"
                        amount={48487}
                        amountColor="#4B5563"
                    />

                    <SparklineComponent
                        id="revenue_line"
                        height="150px"
                        width="120%"
                        dataSource={SparklineAreaData}
                        xName="xval"
                        yName="yval"
                        lineWidth={2}
                        valueType="Numeric"
                        fill={theme.palette.secondary.main.toString()}
                        border={{ color: 'blue', width: 2 }}
                        tooltipSettings={{
                            visible: true,
                            format: '${xval} : data ${yval}',
                            trackLineSettings: {
                                visible: true,
                            },
                        }}
                        markerSettings={{
                            visible: ['All'],
                            fill: theme.palette.secondary.main,
                        }}
                        style={{ paddingBottom: '2rem' }}>
                        <Inject services={[SparklineTooltip]} />
                    </SparklineComponent>
                    <Button
                        variant="contained"
                        color="quaternary"
                        disableElevation
                        sx={{
                            paddingX: '1rem',
                            paddingY: '1rem',
                            borderRadius: '0.8rem',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            color: 'secondary.main',
                        }}>
                        Download Report
                    </Button>
                </Grid>
                {/* Bar Graph */}
                <Grid item>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid item>
                    <RevenueUpdatesStacked />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default RevenueUpdates;

{
    /* <SparklineComponent
    id="revenueLine"
    height="300px"
    width="50%"
    dataSource={SparklineAreaData}
    fill="blue"
    border={{ color: 'blue', width: 2 }}
    type="Line"
    xName="x"
    yName="y"
    lineWidth={1}
    valueType="Numeric"
    tooltipSettings={{
        visible: true,
        format: '${x} : data ${y}',
        trackLineSettings: {
            visible: true,
        },
    }}>
    //
    <Inject services={[SparklineTooltip]} />
</SparklineComponent>; */
}
