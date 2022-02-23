import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const history= useHistory();

    console.log(contacts);

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts?.find((contact) => contact.email === email);
        const checkContact = contacts?.find((contact) => contact.number === number);
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
            id: contacts[contacts?.length - 1].id + 1,
            name,
            email,
            number
        };

        dispatch({ type: "ADD_CONTACT", payload: data });
        toast.success("Student added successfully");
        history.push("/");
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center my-3 display-3">
                    Add Student
                </h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <input type="text" value={number} placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group my-4 ">
                            <input type="submit" value="Add Student" className="btn w-100 btn-dark" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddContact;
