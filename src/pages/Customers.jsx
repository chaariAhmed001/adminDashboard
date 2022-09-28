import React from 'react'
import { Header } from '../components'
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page,Filter,ContextMenu,Resize, Sort,Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import { customersData,customersGrid } from '../data/dummy';


const Customers = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='page' text='Customers'/>
      <GridComponent
        id="EmpTable"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Search','Delete']}
        editSettings={{allowDeleting:true,allowEditing:true}}
        width='auto'
      >
        <ColumnsDirective> 
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page,Search,Toolbar,Edit]} />
      </GridComponent>
    </div>
  )
}

export default Customers