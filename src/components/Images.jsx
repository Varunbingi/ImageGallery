import { Link } from "react-router-dom";

const Images = ({ image, id }) => {
  return (
    <div>
      <Link to={"/" + id}>
        <img src={image} alt="" className="w-72 h-96 rounded-md" />
      </Link>
    </div>
  );
};

export default Images;
