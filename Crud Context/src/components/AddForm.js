import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contextes/EmployeeContext';
function AddForm() {

    const { addEmployee } = useContext(EmployeeContext);
    
    const [id,setId]=useState(null);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [adresse,setAdresse]=useState('');
    const [phone,setPhone]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(id,name,email,adresse,phone);
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="number" name="id"  onChange={(e) => setId(e.target.value)} placeholder="Id ..." required />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Name ..." required />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email ..." required />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control as="textarea" name="adresse"  onChange={(e) => setAdresse(e.target.value)} rows={3} placeholder="Adresse ..." required />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control type="text" name="phone"  onChange={(e) => setPhone(e.target.value)} placeholder="Phone ..." required />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button className="mt-3" variant="success" type="submit" block>Add New Employee</Button>
                </div>
            </Form>
        </>
    );
}
export default AddForm;