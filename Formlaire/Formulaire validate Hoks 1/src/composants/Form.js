import React, { useState } from "react";

function Form() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const hendleFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
    }
    const hendleLastNameInputChange = (event) => {
        setValues({ ...values, lastName: event.target.value })
    }
    const hendleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }
    const hendleSubmit = (event) => {
        event.preventDefault();
        if (values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
    }
    return (
        <div className="container d-flex justify-content-center">
            <div className="col-md-4 ">
                <div className="card my-3">
                    <div className="card-header bg-primary">
                        <h5 className="text-center text-white">Register</h5>
                    </div>
                    <div className="card-body">
                        <form className="register-form" onSubmit={hendleSubmit}>
                            {submitted && valid ? <div className="alert-success p-2 mb-2 mt-2">Success! Thank you for register</div> : null}

                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" onChange={hendleFirstNameInputChange} value={values.firstName} name="firstName" placeholder="First Name" />
                                {submitted && !values.firstName ? <span className="alert-danger p-2 mb-2 mt-2">Please enter a FirstName</span> : null}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" onChange={hendleLastNameInputChange} value={values.lastName} name="lastName" placeholder="Last Name" />
                                {submitted && !values.lastName ? <span className="alert-danger p-2 mb-2 mt-2">Please enter a LastName</span> : null}
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-lg" onChange={hendleEmailInputChange} value={values.email} name="email" placeholder="Email" />
                                {submitted && !values.email ? <span className="alert-danger p-2 mb-2 mt-2">Please enter a Email</span> : null}
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary btn-sm btn-block" type="submit">Registre</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;