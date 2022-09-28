import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import React from 'react'
import { Header } from '../components'
import { ordersData, ordersGrid } from '../data/dummy'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg'>
      <Header category='Page' text='Orders' />
      <GridComponent id='dataTable' dataSource={ordersData} allowPaging allowSorting>
            <ColumnsDirective>
              {ordersGrid.map((data,index)=>(<ColumnDirective key={index} {...data}/>))} 
            </ColumnsDirective>
            <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
        </GridComponent>
    </div>
  )
}

export default Orders