import React from 'react';
import './App.css';
import MaterialTable from 'material-table'
import  { useState, useEffect } from 'react';
import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import NavBar from "./NavBar"
const studentData = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
   RegistrationNo: "IT2015",
    Marks: 89,
  },
  {
    id: 2,
    name: "Vikas",
    email: "vikas@gmail.com",
   RegistrationNo: "IT2013",
    Marks: 78,
  },

  {
    id: 3,
    name: "Rahul",
    email: "rahul@gmail.com",
   RegistrationNo: "IT2020",
    Marks: 96,
  },
  {
    id: 4,
    name: "Xeran",
    email: "Xeran@gmail.com",
   RegistrationNo: "IT2127",
    Marks: 96,
  },
  {
    id: 5,
    name: "Jeeva",
    email: "Jeeva@gmail.com",
   RegistrationNo: "IT2129",
    Marks: 84,
  },
  
  {
    id: 6,
    name: "suhi",
    email: "suhi@gmail.com",
   RegistrationNo: "IT2129",
    Marks: 84,
  }

]
function App() {
 
  
  const url = "http://localhost:4000/students"
  const [data, setData] = useState([])
  useEffect(() => {
    getStudents()
  }, [])

  const getStudents = () => {
    fetch(url).then(resp => resp.json())
      .then(resp => setData(resp))
  }
  const columns = [
    { title: "Name", field: "name", validate: rowData => rowData.name === undefined || rowData.name === "" ? "Required" : true },
    {
      title: "Email", field: "email",
      validate: rowData => rowData.email === undefined || rowData.email === "" ? "Required" : true
    },
    {
      title: "RegistrationNo", field: "RegistrationNo",
      validate: rowData => rowData.RegistrationNo === undefined || rowData.RegistrationNo === "" ? "Required" : true
    },
    {
      title: "Marks", field: 'Marks',
      validate: rowData => rowData.Marks === undefined || rowData.Marks === "" ? "Required" : true
    }]


  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Student Details", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: studentData
    })
    doc.save('table.pdf')
  }

  return (
   
    <div className="App">
       <NavBar/>
      <h1 align="center">Evaluvation Marks</h1>
     
      <MaterialTable
        title="Student Details"
        columns={columns}
        data={studentData}
        actions={[
          
          {
            icon: () => <PrintIcon />,// you can pass icon too
            tooltip: "Export to Pdf",
            onClick: () => downloadPdf(),
            isFreeAction: true
          }
        ]}

         options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(url, {
              method: "POST",
              headers: {
                'Content-type': "application/json"
              },
              body: JSON.stringify(newData)
            }).then(resp => resp.json())
              .then(resp => {
                getStudents()
                resolve()
              })
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(url + "/" + oldData.id, {
              method: "PUT",
              headers: {
                'Content-type': "application/json"
              },
              body: JSON.stringify(newData)
            }).then(resp => resp.json())
              .then(resp => {
                getStudents()
                resolve()
              })
          }),
          onRowDelete: (oldData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(url + "/" + oldData.id, {
              method: "DELETE",
              headers: {
                'Content-type': "application/json"
              },

            }).then(resp => resp.json())
              .then(resp => {
                getStudents()
                resolve()
              })
          })
        }}
      />
    </div>
  );
}

export default App;
