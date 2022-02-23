import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contextes/EmployeeContext';
function EditForm(props) {

    const { updateEmployee } = useContext(EmployeeContext);
    
    const [id,setId]=useState(props.id);
    const [name,setName]=useState(props.name);
    const [email,setEmail]=useState(props.email);
    const [adresse,setAdresse]=useState(props.adresse);
    const [phone,setPhone]=useState(props.phone);

    const updatedEmployee={id,name,email,adresse,phone};
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id,updatedEmployee);
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="number" name="id" value={id}  onChange={(e) => setId(e.target.value)} placeholder="Id ..." required />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name ..." required />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ..." required />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control as="textarea" name="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} rows={3} placeholder="Adresse ..." required />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control type="text" name="phone" value={phone}  onChange={(e) => setPhone(e.target.value)} placeholder="Phone ..." required />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button className="mt-3" variant="success" type="submit" block>Edit Employee</Button>
                </div>
            </Form>
        </>
    );
}
export default EditForm;