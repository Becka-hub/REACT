import React, { useState, useEffect } from 'react';
import { Link, useParams,useHistory} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
const EditContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const { id } = useParams();
    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const student = contacts.find((contact) => contact.id === parseInt(id));

    
    const history= useHistory();

    useEffect(() => {
        if (student) {
            setName(student.name);
            setEmail(student.email);
            setNumber(student.number);
        }
    }, [student])

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);
        const checkContact = contacts.find((contact) => contact.id !== parseInt(id) && contact.number === number);
        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields");
        }

        if (checkEmail) {
            return toast.error("Email exist in students");
        }
        if (checkContact) {
            return toast.error("Number exist in students");
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        };

        dispatch({ type: "UPDATE_CONTACT", payload: data });
        toast.success("Student updated successfully");
        history.push("/");
    }
    return (
        <div className="container">
            {student && student !== "" ? (

                <div className="row">
                    <h1 className="text-center my-3 display-3">
                        Edit Student {id}
                    </h1>
                    <div className="col-md-6 shadow mx-auto p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control" />
                            </div>
                            <div className="form-group my-2">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone Number" className="form-control" />
                            </div>
                            <div className="form-group my-4 d-flex justify-content-between">
                                <input type="submit" value="Update Student" className="btn btn-dark" />
                                <Link to="/" className="btn  btn-danger">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>

            ) : (
                <h1>StudentContac with id {id} is not exists</h1>
            )}
        </div>
    )
}

export default EditContact
