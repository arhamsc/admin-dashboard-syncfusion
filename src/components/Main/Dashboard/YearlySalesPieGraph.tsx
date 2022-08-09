import { Stack, Typography, useTheme } from '@mui/material';
import {
    AccumulationChartComponent,
    AccumulationDataLabel,
    AccumulationLegend,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    Inject,
    PieSeries,
} from '@syncfusion/ej2-react-charts';
import { InfoChartCard, TypographyH4 } from '../../Layout/UIComponents';

const ecomPieChartData = [
    { xval: '2018', yval: 35, text: '35%' },
    { xval: '2019', yval: 15, text: '15%' },
    { xval: '2020', yval: 25, text: '25%' },
    { xval: '2021', yval: 25, text: '25%' },
];

const YearlySalesPieGraph = () => {
    const theme = useTheme();
    return (
        <InfoChartCard color="white" elevation={2}>
            <Stack direction="row" spacing={10} pt="1rem">
                <Typography
                    color="quaternary.main"
                    fontWeight={'bold'}
                    variant="h5">
                    Yearly Sales
                </Typography>
                <TypographyH4
                    title="Sales"
                    amount={43246}
                    amountColor="quaternary.main"
                />
            </Stack>

            <AccumulationChartComponent id="yearly_sales_donut">
                <Inject
                    services={[
                        AccumulationDataLabel,
                        PieSeries,
                        AccumulationLegend,
                    ]}
                />
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective
                        dataSource={ecomPieChartData}
                        xName="xval"
                        yName="yval"
                        innerRadius="40%"
                        height="100%"
                        width="100%"
                        dataLabel={{
                            visible: true,
                            name: 'text',
                            position: 'Inside',
                            font: {
                                fontWeight: 'bold',
                            },
                        }}
                    />
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </InfoChartCard>
    );
};

export default YearlySalesPieGraph;
