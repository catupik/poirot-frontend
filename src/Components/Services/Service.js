import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedService } from "../../redux/servicesSlice";

function Service({ service }) {
  const navigate = useNavigate();
 const dispatch = useDispatch();

  const handleServiceClick = () => {
    dispatch(setSelectedService(service.name));
    navigate("/contact");
  };

  return (
    <div className="service-block">
      <div className="service">
        <img
          src={`/services/${service.image}.jpeg`}
          alt="service"
          width="300"
        />
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
      <button onClick={handleServiceClick} className="service-btn">
      Request a service
      </button>
    </div>
  );
}

export default Service;
