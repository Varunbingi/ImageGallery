import axios from "axios";
import DEFAULT_URL from "../Utils/URL";
import { useEffect, useState } from "react";

const useImage = (id) => {
  const [singleCard, setSingleCard] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(DEFAULT_URL + id);
    const data = response?.data?.photo;

    setSingleCard({
      image: data.url,
      description: data.description,
      title: data.title,
    });
  };
  return [singleCard];
};
export default useImage;
