import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Inject,
    Page,
    Search,
    Toolbar,
} from "@syncfusion/ej2-react-grids";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";
import {
    employeesData,
    employeesGrid,
} from "../../data/dummyData/employeesData";

const Employees = () => {
    return (
        <PageBox>
            <Header title="Employees" category="Page" />
            <GridComponent
                id="employeesGrid"
                width="auto"
                dataSource={employeesData}
                allowPaging
                toolbar={['Search']} //this is to enable search
                allowSorting>
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </PageBox>
    );
};

export default Employees;
