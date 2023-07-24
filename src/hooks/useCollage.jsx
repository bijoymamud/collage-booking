import { useEffect, useState } from "react";


const useCollage = () => {

  const [collages, setCollages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://collage-booking-server-five.vercel.app/collage')
      .then(res => res.json())
      .then(data => {
        setCollages(data);
        setLoading(false)
      });
  }, [])
  return [collages, loading]

}

export default useCollage;