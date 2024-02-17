import { useParams } from "react-router-dom";
import useImage from "../Hooks/useImage";

const SingleImage = () => {
  const { id } = useParams();
  const [singleCard] = useImage(id);

  return (
    <div className="flex  bg-purple-600 h-screen">
      <div className="flex justify-center items-center">
        <img src={singleCard.image} alt="" className="w-4/5 h-3/4 rounded-lg" />
      </div>
      <div className="flex flex-col justify-center gap-10 text-white m-5">
        <h1 className="text-6xl">{singleCard.title}</h1>
        <h1 className="text-2xl">{singleCard.description}</h1>
      </div>
    </div>
  );
};

export default SingleImage;
