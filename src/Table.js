import React, { useState } from 'react';
import MaterialTable from 'material-table';
import {data} from './Data';
 
 
const Table = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const columns = [
    { title: 'ID', field: 'id' },
    { title: '이름', field: 'name' },
    { title: '전화번호', field: 'PhoneNumber' },
    { title: '관리자 구분', field: 'IsAdmin' }
  ];
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable 
          columns={columns} 
          data={data} 
          title='사용자 목록'
          onRowClick={(evt, selectedRow) =>
            setSelectedRow(selectedRow.IsAdmin)
          }
          options={{
            search: false,
            selection: true,
            /*rowStyle: rowData => ({
              backgroundColor:
                selectedRow === rowData.tableData.id ? '#67aeae' : '#FFF'
            })*/
          }}
          actions={[
            {
              tooltip: '관리자로 변경',
              icon: 'edit',
              onClick: (evt,selectedRow) => {
                alert('관리자로 변경되었습니다.')
                setSelectedRow(selectedRow.IsAdmin)
              }
            }
          ]}
        />
    </div>
  );
};
export default Table;
