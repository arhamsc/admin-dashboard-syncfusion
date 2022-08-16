import {
    ChartComponent,
    DateTime,
    LineSeries,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Tooltip,
    AxisModel,
} from "@syncfusion/ej2-react-charts";
import {
    lineCustomSeries,
    LinePrimaryXAxis,
    LinePrimaryYAxis,
} from "../../data/dummyData/lineData";

const LineChart = () => {
    return (
        <ChartComponent
            id="linechart"
            primaryXAxis={LinePrimaryXAxis as AxisModel}
            primaryYAxis={LinePrimaryYAxis as AxisModel}
            chartArea={{
                border: { width: 0 },
            }}
            tooltip={{
                enable: true,
                enableMarker: true,
            }}>
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index) => (
                    <SeriesDirective key={index} {...item} />
                ))}
            </SeriesCollectionDirective>
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        </ChartComponent>
    );
};

export default LineChart;
