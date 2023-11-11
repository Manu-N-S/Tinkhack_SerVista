import Navbar from "./Navbar";
import landingBg from "./landingbg.jpg";
import "../App.css";
import CardLayout from "./CardLayout";
import { useState, useEffect } from "react";
import Travel from "./Travel/Travel";
import Trains from "./Travel/Trains";
import axios from "axios";
import xmlJs from "xml-js";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import trainbg from "./trainbg.jpg";
import flightbg from "./flightbg.jpg";
const HomePage = () => {

  const data = [
    {
      mode: 'Cab to Airport',
      price: '₹250',
      time: '20min'
    },
    {
      mode: 'Flight to Delhi',
      price: '₹3000',
      time: '4hrs'
    },
    {
      mode: 'Cab to hotel ',
      price: '₹200',
      time: '30min'
    }
  ]
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isBlurred, setBlurred] = useState(false);
  const [jsonResult, setJsonResult] = useState(null);
  const options = {
    method: "GET",
    url: "https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations",
    params: {
      fromStationCode: "TVC",
      toStationCode: "NDLS",
      dateOfJourney: "2023-11-30",
    },
    headers: {
      "X-RapidAPI-Key": "5398f67e2fmsh2d0f0eaff66286ap12c05fjsn3757d9407757",
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    },
  };

  const optionFlight = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
    params: {
      sourceAirportCode: 'TRV',
      destinationAirportCode: 'DEL',
      date: '2023-11-23',
      itineraryType: 'ONE_WAY',
      sortOrder: 'PRICE',
      numAdults: '1',
      numSeniors: '0',
      classOfService: 'ECONOMY',
      pageNumber: '1',
      currencyCode: 'INR'
    },
    headers: {
      'X-RapidAPI-Key': '5398f67e2fmsh2d0f0eaff66286ap12c05fjsn3757d9407757',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
  };

  const fetchFlight = async () => {
    try {
      const response = await axios.request(optionFlight);
      console.log(response.data);
      // let xmlData = response.data;
      // const jsonResult = xmlJs.xml2json(xmlData, { compact: true, spaces: 4 });
      // console.log(JSON.parse(jsonResult));
      // setJsonResult(JSON.parse(jsonResult));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const showCard = () => {
    setBlurred(true);
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setTimeout(() => {
      setIsVisible1(true);
    }, 1000);
  };

  const handleClickTrain = () => {
    setIsVisible2(true);
    fetchData();
  };
  const handleClickFlight = () => {
    setIsVisible3(true);
    fetchFlight();
  };

  const [typedText, setTypedText] = useState("");
  const textToType = "Welcome to SerVista";
  const typingSpeed = 100;

  useEffect(() => {
    let currentCharIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentCharIndex <= textToType.length) {
        setTypedText(textToType.substring(0, currentCharIndex));
        currentCharIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className="w-screen h-screen relative"
      // style={{
      //   backgroundImage: `url(${landingBg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <video
        autoPlay
        muted
        playsInline
        loop
        className={`w-full h-full object-center absolute top-0 left-0 -z-10 ${
          isBlurred ? "blur" : ""
        } transition-all ease-in-out duration-1000`}
        poster="https://ondc.org/assets/theme/images/video_img.jpg"
      >
        <source
          src="https://ondc.org/assets/theme/video/video-desktop1.mp4"
          type="video/mp4"
        />
      </video>
      <Navbar />
      <div className="relative">
        <div className=" text-center">
          <h1 className="text-5xl text-black font-notosans px-4 my-10 relative z-10">
            {typedText}
          </h1>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60 blur-xl"></div>
      </div>

      {/* <div
        className={`flex gap-6 justify-around opacity-${
          isVisible1 ? "100" : "0"
        } transform ${
          isVisible1 ? "translate-y-0" : "translate-y-40"
        } transition-all ease-in-out duration-500`}
      >
        <Card
          shadow={false}
          className="relative grid h-28 w-48 items-end justify-center overflow-hidden text-center cursor-pointer"
          onClick={handleClickTrain}
        >
          <CardHeader
            floated={false}
            style={{ backgroundImage: `url(${trainbg})` }}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h4"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Train
            </Typography>
            <span>$3400</span>
          </CardBody>
        </Card>
        <Card
          shadow={false}
          className="relative grid h-28 w-48 items-end justify-center overflow-hidden text-center cursor-pointer"
          onClick={handleClickFlight}
        >
          <CardHeader
            floated={false}
            style={{ backgroundImage: `url(${flightbg})` }}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h4"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Flight
            </Typography>
            <span>$15000</span>
          </CardBody>
        </Card>
      </div>
      <br />
      <br />
      <div className="flex justify-around">
        <div
          className={`flex gap-6 my-5 mx-4 opacity-${
            isVisible2 ? "100" : "0"
          } transform ${
            isVisible2 ? "translate-y-0" : "translate-y-40"
          } transition-all ease-in-out duration-500 `}
        >
          <Card
            shadow={false}
            className="relative grid h-28 w-48 items-end justify-center overflow-hidden text-center cursor-pointer"
          >
            <CardHeader
              floated={false}
              style={{ backgroundImage: `url(${trainbg})` }}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-1 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className=" font-medium leading-[1.5]"
              >
                Rajdhani EXP
              </Typography>
              <span className="text-white">$340</span>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="relative grid h-28 w-48 items-end justify-center overflow-hidden text-center cursor-pointer"
          >
            <CardHeader
              floated={false}
              style={{ backgroundImage: `url(${trainbg})` }}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-1 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className=" font-medium leading-[1.5]"
              >
                Kerala EXP
              </Typography>
              <span className="text-white">$340</span>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="relative grid h-28 w-48 items-end justify-center overflow-hidden text-center cursor-pointer"
          >
            <CardHeader
              floated={false}
              style={{ backgroundImage: `url(${trainbg})` }}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-1 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className=" font-medium leading-[1.5]"
              >
                Tvm- Nzm EXP
              </Typography>
              <span className="text-white">$340</span>
            </CardBody>
          </Card>
        </div>
        <div
          className={`flex gap-6 my-5 mx-4 opacity-${
            isVisible3 ? "100" : "0"
          } transform ${
            isVisible3 ? "translate-y-0" : "translate-y-40"
          } transition-all ease-in-out duration-500 `}
        >
          <Card
            shadow={false}
            className="relative grid h-28 w-48 items-end justify-center overflow-hidden text-center cursor-pointer"
          >
            <CardHeader
              floated={false}
              style={{ backgroundImage: `url(${flightbg})` }}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-1 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className=" font-medium leading-[1.5]"
              >
                Air India
              </Typography>
              <span className="text-white">$340</span>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="relative grid h-28 w-48 items-end justify-center overflow-hidden text-center cursor-pointer"
          >
            <CardHeader
              floated={false}
              style={{ backgroundImage: `url(${flightbg})` }}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-1 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className=" font-medium leading-[1.5]"
              >
                IndiGo
              </Typography>
              <span className="text-white">$340</span>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="relative grid h-28 w-48 items-end justify-center overflow-hidden text-center cursor-pointer"
          >
            <CardHeader
              floated={false}
              style={{ backgroundImage: `url(${flightbg})` }}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-1 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className=" font-medium leading-[1.5]"
              >
                SpiceJet
              </Typography>
              <span className="text-white">$340</span>
            </CardBody>
          </Card>
        </div>
      </div> */}
      <div className={`flex justify-center gap-4`}>
        {data.map((item, index) => (
          <CardLayout key={index} {...item} />
        ))}
      </div>
      <div className=" px-10 pt-4 absolute mb-5 bottom-0 w-full">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                ></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex mr-2">
            <button
              onClick={showCard}
              type="button"
              className="inline-flex items-center justify-center rounded-full px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 mx-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
