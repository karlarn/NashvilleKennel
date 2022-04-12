import "./Employee.css"
import { Link } from "react-router-dom";

export const EmployeeCard = ({ singleEmployee, handleDeleteEmployee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
              {/* <img src={'/images/dog.svg'} alt="My Dog" /> */}
            </picture>
          <h3>Name: <span className="card-employeename">
            {singleEmployee.name}
          </span></h3>
          <p>{singleEmployee.location.name}</p>
          <button type="button" onClick={() => handleDeleteEmployee(singleEmployee.id)}>Terminate</button>
          <Link to={`/employees/${singleEmployee.id}/edit`}>
    <button>Edit</button>
  </Link>
        </div>
      </div>
    );
  }