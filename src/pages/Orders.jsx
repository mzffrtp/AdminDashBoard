import React from 'react'
import Header from "../components/Header";
import {GridComponent, ColumnsDirective, ColumnDirective, Inject, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport} from "@syncfusion/ej2-react-grids";
import {ordersData, ordersGrid, contextMenuItems} from "../data/dummy"

function Orders() {
  const editing = {allowDeletind:true}
  return (
    <div className='md-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header  category={"Page"} title={"Orders"}/>
      <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      contextMenuItems={contextMenuItems}
      allowEditing
      editSettings={editing}
      
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {
          ordersGrid.map((i, index)=>(
            <ColumnDirective key={index} {...i} />
          ))
        }
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
    
  )
}

export default Orders