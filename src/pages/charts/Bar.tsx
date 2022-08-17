import {
    AxisModel,
    Category,
    ChartComponent,
    Inject,
    DataLabel,
    BarSeries,
    Tooltip,
    Legend,
    SeriesCollectionDirective,
    SeriesDirective,
    ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";
import {
    barCustomSeries,
    barPrimaryXAxis,
    barPrimaryYAxis,
} from "../../data/dummyData/barData";

const Bar = () => {
    return (
        <PageBox>
            <Header title="Bar" category="Charts" />
            <ChartComponent
                id="barchart"
                primaryXAxis={barPrimaryXAxis as AxisModel}
                primaryYAxis={barPrimaryYAxis as AxisModel}
                title="Olympic Medals"
                tooltip={{
                    enable: true,
                    enableMarker: true,
                }}>
                <SeriesCollectionDirective>
                    {barCustomSeries.map((item, index) => (
                        <SeriesDirective key={index} {...item} />
                    ))}
                </SeriesCollectionDirective>
                <Inject
                    services={[ColumnSeries, Tooltip, Legend, DataLabel, Category]}
                />
            </ChartComponent>
        </PageBox>
    );
};

export default Bar;
