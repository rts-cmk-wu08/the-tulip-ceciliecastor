//import { AiOutlineArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const CardRooms = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rooms, setData] = useState();

  //setData(response.data)

  useEffect(() => {
    axios
      .get("http://localhost:4000/rooms")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        // const roomTypes = res.data.roomtypes;
        // ["type", "price", "description"].forEach((prop) => {
        //   roomTypes[prop].forEach((item) => {
        //     console.log(item);
        //   });
        // });
      })
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!error && rooms && (
        <article>
          <h2>{rooms.headline}</h2>
          {/* {roomtypes.map((info) => {
            return <h3 className="h3">{info.type}</h3>;
          })} */}
          <section className="infoCard">
            <img className="infoCard__img" src="" alt="" />
            <div>
              <h3 className="h3">Family Room</h3>
              <p infoCard__price></p>
            </div>
            <p></p>
            {/* <a infoCard__booking href="#">
              Booking
            </a> */}
          </section>
        </article>
      )}
    </div>
  );
};

export default CardRooms;
