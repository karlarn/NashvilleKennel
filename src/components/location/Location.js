import "./Location.css"
import { Link } from "react-router-dom";

export const LocationCard = ({ singleLocation, handleDeleteLocation }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
              {/* <img src={'/images/dog.svg'} alt="My Dog" /> */}
            </picture>
          <h3>Name: <span className="card-locationname">
            {singleLocation.name}
          </span></h3>
          <p>{singleLocation.address}</p>
          <Link to={`/locations/${singleLocation.id}`}>
            <button>Details</button>
          </Link>
          <button type="button" onClick={() => handleDeleteLocation(singleLocation.id)}>Shut Down</button>
          <Link to={`/locations/${singleLocation.id}/edit`}>
    <button>Edit</button>
  </Link>
        </div>
      </div>
    );
  }