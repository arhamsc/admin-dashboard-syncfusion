import { Box, Stack, Typography, useTheme } from '@mui/material';
import {
    Inject,
    SparklineComponent,
    SparklineTooltip,
} from '@syncfusion/ej2-react-charts';
import { SparklineAreaData } from '../../../data/dummyData/sparkLineData';
import { InfoChartCard, TypographyH4 } from '../../Layout/UIComponents';

const EarningsBarGraph = () => {
    const theme = useTheme();
    return (
        <InfoChartCard>
            <Stack direction="row" spacing={10} pt="1rem">
                <Typography
                    color="quaternary.main"
                    fontWeight={'bold'}
                    variant="h5">
                    Earnings
                </Typography>
                <TypographyH4
                    title="Monthly Revenue"
                    amount={63448.78}
                    amountColor="quaternary.main"
                />
            </Stack>
            <SparklineComponent
                id="earnings_bar_graph"
                height="150px"
                width="100%"
                dataSource={SparklineAreaData}
                xName="xval"
                yName="yval"
                valueType="Numeric"
                type="Column"
                tooltipSettings={{
                    visible: true,
                    format: '${xval} : data ${yval}',
                }}
                fill={theme.palette.quaternary.main.toString()}
                style={{ paddingTop: '2rem' }}>
                <Inject services={[SparklineTooltip]} />
            </SparklineComponent>
        </InfoChartCard>
    );
};

export default EarningsBarGraph;
