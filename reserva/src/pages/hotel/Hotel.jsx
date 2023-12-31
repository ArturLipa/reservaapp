import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import useFetch from "./../../hooks/useFecth"
<<<<<<< HEAD:reserva/src/pages/hotel/Hotel.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContex } from "../../context/SearchContext";
import { AuthContex } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
=======
import { useInRouterContext, useLocation, useNavigate } from "react-router-dom";
import { SearchContex } from "../../context/SearchContext";
import { AuthContex } from "../../context/AuthContext";
>>>>>>> 9daa32f7376718fca39fd86ea305e8cf0d623401:reservas/src/pages/hotel/Hotel.jsx

const Hotel = () => {
  const location = useLocation()
  const hId = location.pathname.split("/")[2]
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
<<<<<<< HEAD:reserva/src/pages/hotel/Hotel.jsx
  const [days, setDays] = useState();
=======
  const [days, setDays] = useState(0);
>>>>>>> 9daa32f7376718fca39fd86ea305e8cf0d623401:reservas/src/pages/hotel/Hotel.jsx

  const {data, loading, error, reFetch} = useFetch(`/hotels/find/${hId}`)
  const {user} = useContext(AuthContex)
  const navigate = useNavigate()

  const {dates,options} = useContext(SearchContex);
  const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1,date2) =>{
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
    return diffDays;
  }
  useEffect(()=>{
    try{
      localStorage.setItem("startDate",new Date(dates[0].startDate));
      localStorage.setItem("startDate",new Date(dates[0].endDate));
      const currentDay = dayDifference(dates[0].endDate,dates[0].startDate);
      setDays(currentDay)
    }catch(err){
      let start = new Date(localStorage.getItem("startDate"));
      let end = new Date(localStorage.getItem("endDate"));
      const currentDay = dayDifference(end,start);
      setDays(currentDay)
    }
  },[])
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  };
  
  const handleClick = () =>{
    if(user){
     setOpenModal(true);
    }else{
      navigate("/login")
    }
  }

<<<<<<< HEAD:reserva/src/pages/hotel/Hotel.jsx
  const handleClick = () =>{
    if(user){
      setOpenModal(true);
    }else{
      navigate("/login")
    }
  }

  return (
=======
   return(
>>>>>>> 9daa32f7376718fca39fd86ea305e8cf0d623401:reservas/src/pages/hotel/Hotel.jsx
    <div>
      <Navbar />
      <Header type="list" />
      {loading? ("Cargando..."):
      (<div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reservar o Separar Ahora!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excelente ubicacion – {data.distance}m desde el centro
          </span>
          <span className="hotelPriceHighlight">
            Reserve una estadia por mas de ${data.cheapestPrice} en la propiedad y obtenga un taxi gratuito al aeropuerto 
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfecto para {days}-noches!</h1>
              <span>
                Esta propiedad esta en una excelente ubicacion cerca del centro de la ciudad!
              </span>
              <h2>
                <b>${days * data.cheapestPrice * options.room}</b> ({days} noches)
              </h2>
              <button onClick={handleClick}>Reservar ahora!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      )}

      {openModal && <Reserve setOpen={setOpenModal} hotelId={hId} />}
    </div>
  );
};
export default Hotel;
