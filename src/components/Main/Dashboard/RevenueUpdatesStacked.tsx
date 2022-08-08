import { useTheme } from '@mui/material';
import {
    ChartComponent,
    Inject,
    Legend,
    Category,
    SeriesCollectionDirective,
    SeriesDirective,
    StackingColumnSeries,
    Tooltip,
} from '@syncfusion/ej2-react-charts';
import {
    stackedChartData,
    stackedPrimaryXAxis,
    stackedPrimaryYAxis,
} from '../../../data/dummyData/stackedData';

const RevenueUpdatesStacked = () => {
    const theme = useTheme();
    const stackedCustomSeries = [
        {
            dataSource: stackedChartData[0],
            xName: 'x',
            yName: 'y',
            name: 'Budget',
            type: 'StackingColumn',
            fill: theme.palette.quaternary.main,
        },

        {
            dataSource: stackedChartData[1],
            xName: 'x',
            yName: 'y',
            name: 'Expense',
            type: 'StackingColumn',
            fill: theme.palette.secondary.main,
        },
    ];
    return (
        <ChartComponent
            height="100%"
            id="stack_chart"
            width="100%"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            tooltip={{ enable: true }}
            legendSettings={{ background: 'white' }}
            chartArea={{ border: { width: 0 } }}>
            <Inject
                services={[Legend, Category, StackingColumnSeries, Tooltip]}
            />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, index) => (
                    <SeriesDirective key={index} {...item} />
                ))}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default RevenueUpdatesStacked;
