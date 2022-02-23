import React,{useContext} from 'react'
import { EmployeeContext } from '../contextes/EmployeeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
 function Employe(props) {
   const {deleteEmployee}=useContext(EmployeeContext);
    return (
      <>
       <td>{props.id}</td>
       <td>{props.name}</td>
       <td>{props.email}</td>
       <td>{props.adresse}</td>
       <td>{props.phone}</td>
       <td>
       <button className="btn btn-sm btn-success" onClick={()=>props.handleShowEdit(props.id)} data-bs-toggle="modal" data-bs-target="#modalUpdate">
       <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="btn btn-sm  btn-danger mx-2" onClick={()=>deleteEmployee(props.id)}>
        <FontAwesomeIcon icon={faTrash} />      
        </button>
       </td>
      </>
    )
}
export default Employe;