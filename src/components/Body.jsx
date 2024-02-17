import { useEffect, useState } from "react";

import axios from "axios";
import Images from "./Images";

const Body = () => {
  const [card, setCard] = useState([]);
  const [count, setCount] = useState(0);
  const [moreCardUrl, setMoreCardUrl] = useState(
    `https://api.slingacademy.com/v1/sample-data/photos?offset=${count}&limit=20`
  );

  const fetchData = async () => {
    const response = await axios.get(moreCardUrl);
    const data = response.data.photos;
    setCard(data);
  };
  useEffect(() => {
    fetchData();
  }, [moreCardUrl]);
  return (
    <div className="bg-slate-400 py-4">
      <h1 className="text-4xl text-center text-white font-bold m-4">
        Image Gallery
      </h1>
      <div className="flex flex-wrap gap-y-4 justify-around m-5">
        {card.map((p) => (
          <Images image={p.url} key={p.id} id={p.id} />
        ))}
      </div>
      <div className="flex justify-center gap-10">
        <button
          className="bg-blue-900 px-4 py-2 rounded-md text-white font-semibold"
          onClick={() => {
            if (count > 0) {
              setCount(count - 20);
            }
            setMoreCardUrl(
              `https://api.slingacademy.com/v1/sample-data/photos?offset=${count}&limit=20`
            );
          }}
        >
          prev
        </button>
        <button
          className="bg-blue-900 px-4 py-2 rounded-md text-white font-semibold"
          onClick={() => {
            if (count < 120) {
              setCount(count + 20);
            }
            setMoreCardUrl(
              `https://api.slingacademy.com/v1/sample-data/photos?offset=${count}&limit=20`
            );
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default Body;
