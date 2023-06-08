import React from "react";
import { LineChart } from "../../components";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";

const Line = () => {
    return (
        <PageBox>
            <Header title="Line" category="Charts" />
            <LineChart/>
        </PageBox>
    );
};

export default Line;
