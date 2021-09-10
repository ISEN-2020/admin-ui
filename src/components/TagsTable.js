import React, { Component } from 'react';
import MaterialTable from 'material-table'
import {CastByteToNumber} from '../helpers.js'

function TagsTable() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'userName' },
    { title: 'Email', field: 'userEmail'},
    { title: 'password', field: 'userPassword'}
  ]);

  const [data, setData] = useState([
    {userName: 'toto1', userEmail: 'toto1@test.fr', userPassword: 'password1'},
    {userName: 'toto2', userEmail: 'toto2@test.fr', userPassword: 'password2'}
  ]);

  return (
    <MaterialTable
      title="User List"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
  )
}
  export default TagsTable