import {
    AccumulationChartComponent,
    AccumulationDataLabel,
    AccumulationLegend,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    AccumulationTooltip,
    Inject,
    PieSeries,
} from "@syncfusion/ej2-react-charts";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";
import { pieChartData } from "../../data/dummyData/pieData";

const Pie = () => {
    return (
        <PageBox>
            <Header title="Pie" category="Chart" />
            <AccumulationChartComponent
                id="yearly_sales_donut"
                tooltip={{
                    enable: true,
                    enableMarker: true,
                    format: "${point.x} : data ${point.y}",
                }}>
                <Inject
                    services={[
                        AccumulationDataLabel,
                        PieSeries,
                        AccumulationLegend,
                        AccumulationTooltip,
                    ]}
                />
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective
                        dataSource={pieChartData}
                        xName="x"
                        yName="y"
                        innerRadius="40%"
                        height="100%"
                        width="100%"
                        enableTooltip={true}
                        dataLabel={{
                            visible: true,
                            name: "text",
                            position: "Inside",
                            font: {
                                fontWeight: "bold",
                            },
                        }}
                    />
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </PageBox>
    );
};

export default Pie;
