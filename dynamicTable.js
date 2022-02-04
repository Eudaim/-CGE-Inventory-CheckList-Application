import React, { Component} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CenteredModal from './centeredModal'
import './table.css'

class DynamicTable extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          students: [
             { id: 1, type: 'Laptop', owner: 'wasif@email.com', location: 'CGE-2200', checkout: false},
             { id: 2, type: 'Dock', owner: 'ali@email.com', location: 'CGE-2200', checkout: false },
             { id: 3, type: 'Laptop', owner: 'johdoe@email.com', location: 'CGE-2200', checkout: false },
             { id: 4, type: 'Dock', owner: 'janedoe.@email.com', location: 'CGE-2200', checkout: false}
          ]
       }
    }
    renderTableHeader(){
      //  let header = Object.keys(this.state.students[0])
      let header = ['id', 'type', 'owner', 'location', 'operation']
       return header.map((key,index)=>{
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
    renderTableData(){
       return this.state.students.map((student,index) => {
         const {id, type, owner, location} = student
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{type}</td>
               <td>{owner}</td>
               <td>{location}</td>
               <td className='operation'>
                  <CenteredModal></CenteredModal>
               </td>
            </tr> 
         )
       })
    }
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene. 
      return (
         <div>
            <h1 id='title'>CGE Inventory CheckList</h1>
            <Table striped bordered hover id='students'>
               <tbody>
                  {this.renderTableHeader()}
                  {this.renderTableData()}
               </tbody>
            </Table>
         </div>
      )
   }
   itemCheckOut(id){
      alert(`you just clicked ${id}`);      
   }   
}
export default DynamicTable //exporting make it reuseable