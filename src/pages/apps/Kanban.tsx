import {
    ColumnDirective,
    ColumnsDirective,
    KanbanComponent,
} from "@syncfusion/ej2-react-kanban";
import React from "react";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";
import { kanbanData, kanbanGrid } from "../../data/dummyData/kanbanData";

const Kanban = () => {
    return (
        <PageBox>
            <Header title="Kanban Board" category="App" />
            <KanbanComponent
                id="kanban"
                dataSource={kanbanData}
                cardSettings={{
                    contentField: "Summary",
                    headerField: "Id",
                }}
                keyField={"Status"}> 
                <ColumnsDirective>
                    {kanbanGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
            </KanbanComponent>
        </PageBox>
    );
};

export default Kanban;
