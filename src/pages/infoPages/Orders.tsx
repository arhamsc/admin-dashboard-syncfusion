import { Box, Paper } from "@mui/material";
import {
    ColumnDirective,
    ColumnsDirective,
    Filter,
    GridComponent,
    Inject,
    Resize,
    Sort,
    ContextMenu,
    Page,
    ExcelExport,
    Edit,
    PdfExport
} from "@syncfusion/ej2-react-grids";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";
import { ordersData, ordersGrid } from "../../data/dummyData/ordersGridData";

const Orders = () => {
    return (
        <PageBox>
            <Header title="Orders" category="Page" />
            <GridComponent id="ordersGrid" dataSource={ordersData} allowPaging height={"100%"} allowSorting>
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
            </GridComponent>
        </PageBox>
    );
};

export default Orders;
