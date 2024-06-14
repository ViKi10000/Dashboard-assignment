import React from 'react'
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import {leave} from '../data/leave'


function SalarySlip() {
    const _export = React.useRef(null);
    const excelExport = () => {
      if (_export.current !== null) {
        _export.current.save();
      }
    };
  return (

    <my-app>
  
    <ExcelExport data={leave} ref={_export}>
        <Grid data={leave} style={{
      height: '420px'
    }}>
          <GridToolbar>
            <button title="Export Excel" className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" onClick={excelExport}>
              Export to Excel
            </button>
          </GridToolbar>
          <GridColumn field="ProductID" title="Product ID" width="50px" />
          <GridColumn field="ProductName" title="Product Name" width="350px" />
          <GridColumn field="UnitPrice" title="Price" />
          <GridColumn field="UnitsInStock" title="In stock" />
          <GridColumn field="Discontinued" title="Discontinued" />
        </Grid>
      </ExcelExport>;
      
      </my-app>
  )
}

export default SalarySlip;