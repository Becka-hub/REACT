import React, { useState, useContext } from 'react'
import { EmployeeContext } from '../contextes/EmployeeContext';
import { Button, Modal} from 'react-bootstrap';
import AddForm from './AddForm';
import EditForm from './EditForm';
import Employe from './Employe';
function EmployerList() {

    const { employees } = useContext(EmployeeContext);

    const [showAjoute, setShowAjoute] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    // const [showAlert,setShowAlert]=useState(false);

    const [employeeEdit, setEmployeeEdit] = useState([]);

    const handleCloseAjoute = () => setShowAjoute(false);
    const handleShowAjoute = () => setShowAjoute(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (id) => {
        setShowEdit(true);
        setEmployeeEdit(employees.filter((item) => item.id === id));
    }

    // const handleShowAlert=()=>setShowAlert(true);

    return (
        <div className="table-responsive mt-2">
            <div className="table p-2">
                <div className="d-flex justify-content-between p-2 bg-dark">
                    <h3 className="text-white mt-2">Manage <b>Employe</b></h3>
                    <button className="btn btn-sm btn-primary" onClick={handleShowAjoute}>
                        Add new Employe
                    </button>
                </div>
                {/* <Alert show={showAlert} variant="danger" onClose={()=>setShowAlert(false)} dismissible>

                </Alert> */}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Adresse</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.sort((a,b)=>(a.name<b.name?-1:1)).map((item) => (
                            <tr key={item.id}>
                                <Employe
                                    id={item.id}
                                    name={item.name}
                                    email={item.email}
                                    adresse={item.adresse}
                                    phone={item.phone}
                                    handleShowEdit={handleShowEdit}
                                />
                            </tr>
                        ))}

                    </tbody>
                </table>
                <Modal show={showAjoute} onHide={handleCloseAjoute}>
                    <Modal.Header className="d-flex justify-content-between bg-primary">
                        <Modal.Title className="text-white">Add New Employee</Modal.Title>
                        <Button variant="light" onClick={handleCloseAjoute}>
                            X
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <AddForm />
                    </Modal.Body>
                </Modal>

                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header className="d-flex justify-content-between bg-primary">
                        <Modal.Title className="text-white">Edit Employee</Modal.Title>
                        <Button variant="light" onClick={handleCloseEdit}>
                            X
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        {employeeEdit.map((item) => (
                            <EditForm
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            email={item.email}
                            adresse={item.adresse}
                            phone={item.phone}
                            />
                        ))}

                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
export default EmployerList;