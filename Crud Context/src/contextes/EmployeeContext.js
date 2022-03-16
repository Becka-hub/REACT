import React, { useState, createContext , useEffect } from 'react'
export const EmployeeContext = createContext();

const EmployeContextProvider = (props) => {
    const [employees, setEmployees] = useState([
        { id: 1, name: "beckas", email: "beckas@gmail.com", adresse: "Lot VV 93Bis Manakambahiny", phone: "0326865274" },
        { id: 2, name: "Aina", email: "Aina@gmail.com", adresse: "Lot X Ankerakely", phone: "0326565987" },
        { id: 3, name: "Maminiaina", email: "MAMINIAINAZAIN@gmail.com", adresse: "Lot 78Ter Mahamasina", phone: "0346865274" },
        { id: 4, name: "Zain", email: "Zain@gmail.com", adresse: "Lot XX V2 Ankorondrano", phone: "0337889645" },
        { id: 5, name: "Mamy", email: "Mamy@gmail.com", adresse: "Lot SS Peter Isotry", phone: "0336867894" }
    ]);
    useEffect(()=>{
        setEmployees(JSON.parse(localStorage.getItem('employees')));
    },[])
    useEffect(()=>{
        localStorage.setItem('employees',JSON.stringify(employees));
    },)
    const addEmployee = (id, name, email, adresse, phone) => {
        setEmployees([...employees, { id, name, email, adresse, phone }]);
    }
    const deleteEmployee = (id) => {
        setEmployees(employees.filter((item) => item.id !== id));
    }
    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee));
    }
    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeContextProvider;