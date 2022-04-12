import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home, MadLib } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { LocationList } from "./location/LocationList"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { LocationForm } from "./location/LocationForm"
import { CustomerForm } from "./customer/CustomerForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { LocationEditForm } from "./location/LocationEditForm"
import { CustomerEditForm } from "./customer/CustomerEditForm"
import { EmployeeEditForm } from "./employee/EmployeeEditForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }


    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />     

                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<PrivateRoute><Home /><MadLib/></PrivateRoute>} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<PrivateRoute><AnimalList /></PrivateRoute>} />
                <Route path="/animals/details/:animalId" element={<PrivateRoute><AnimalDetail /></PrivateRoute>} />
                <Route path="/animals/create" element={<PrivateRoute><AnimalForm /></PrivateRoute>} />
                <Route path="/animals/:animalId/edit" element={<PrivateRoute><AnimalEditForm /></PrivateRoute>} />

                <Route exact path="/employees" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
                <Route path="/employees/create" element={<PrivateRoute><EmployeeForm /></PrivateRoute>} />
                <Route path="/employees/:employeeId/edit" element={<PrivateRoute><EmployeeEditForm /></PrivateRoute>} />

                <Route exact path="/locations" element={<PrivateRoute><LocationList /></PrivateRoute>} />
                <Route path="/locations/:locationId" element={<PrivateRoute><LocationDetail /></PrivateRoute>} />
                <Route path="/locations/create" element={<PrivateRoute><LocationForm /></PrivateRoute>} />
                <Route path="/locations/:locationId/edit" element={<PrivateRoute><LocationEditForm /></PrivateRoute>} />

                <Route exact path="/customers" element={<PrivateRoute><CustomerList /></PrivateRoute>} />
                <Route path="/customers/create" element={<PrivateRoute><CustomerForm /></PrivateRoute>} />
                <Route path="/customers/:customerId/edit" element={<PrivateRoute><CustomerEditForm /></PrivateRoute>} />
            </Routes>
        </>
    )
}