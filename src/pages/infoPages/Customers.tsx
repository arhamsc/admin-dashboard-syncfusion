import { ColumnDirective, ColumnsDirective, Edit, GridComponent, Inject, Page, Sort,Filter, Selection, Toolbar } from '@syncfusion/ej2-react-grids';
import PageBox from '../../components/Layout/PageBox';
import Header from '../../components/Layout/UIComponents/Header';
import { customersData, customersGrid } from '../../data/dummyData/customersData';

const Customers = () => {
  return (
      <PageBox>
          <Header title="Customers" category="Page" />
          <GridComponent
              id="employeesGrid"
              width="auto"
              dataSource={customersData}
              allowPaging
              toolbar={["Delete"]} //this is to enable search
              editSettings={{
                allowDeleting: true,
                allowEditing: true
              }}
              allowSorting>
              <ColumnsDirective>
                  {customersGrid.map((item, index) => (
                      <ColumnDirective key={index} {...item} />
                  ))}
              </ColumnsDirective>
              <Inject services={[Page, Selection,Edit, Sort,Filter, Toolbar]} />
          </GridComponent>
      </PageBox>
  );
}

export default Customers