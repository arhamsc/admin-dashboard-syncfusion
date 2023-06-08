import React from "react";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";
import {
    ChartComponent,
    DateTime,
    SeriesCollectionDirective,
    SeriesDirective,
    SplineAreaSeries,
    Inject,
    Legend,
    AxisModel,
} from "@syncfusion/ej2-react-charts";
import {
    lineCustomSeries,
    LinePrimaryXAxis,
    LinePrimaryYAxis,
} from "../../data/dummyData/lineData";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummyData/areaData";
const Area = () => {
    return (
        <PageBox>
            <Header title="Area" category="Charts" />
            <ChartComponent
                id="areachart"
                primaryXAxis={areaPrimaryXAxis as AxisModel}
                primaryYAxis={areaPrimaryYAxis as AxisModel}
                chartArea={{
                    border: { width: 0 },
                }}
                tooltip={{
                    enable: true,
                    enableMarker: true,
                }}>
                <SeriesCollectionDirective>
                    {areaCustomSeries.map((item, index) => (
                        <SeriesDirective key={index} {...item} />
                    ))}
                </SeriesCollectionDirective>
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
            </ChartComponent>
        </PageBox>
    );
};

export default Area;
