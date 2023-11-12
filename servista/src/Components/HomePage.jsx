import Navbar from "./Navbar";
import "../App.css";
import CardLayout from "./CardLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ImCheckboxChecked } from "react-icons/im";
import trainbg from "./trainbg.jpg";

const HomePage = () => {
  const [finalData, setFinalData] = useState([]);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isBlurred, setBlurred] = useState(false);
  const [data, setData] = useState({ train: {}, flight: {} });
  const [prompt, setPrompt] = useState("");
  const [minRate, setMinRate] = useState(null);
  const navigate = useNavigate();
  const [outputText, setOutputText] = useState("");
  const [isListening, setListening] = useState(false);

  const runSpeechRecognition = () => {
    setOutputText("Loading text...");
    setListening(true);

    const recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
      // Do something when recognition starts
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setPrompt(transcript);
      setListening(false);
    };

    recognition.start();
  };
  const options = {
    method: "GET",
    url: "https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations",
    params: {
      fromStationCode: data.train.from,
      toStationCode: data.train.to,
      dateOfJourney: data.train.date,
    },
    headers: {
      "X-RapidAPI-Key": "34b9e513a2msh172b3abb12adbd5p179a94jsn32990c4018b4",
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    },
  };

  const optionFlight = {
    method: "GET",
    url: "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights",
    params: {
      sourceAirportCode: data.flight.from,
      destinationAirportCode: data.flight.to,
      date: data.flight.date,
      itineraryType: "ONE_WAY",
      sortOrder: "PRICE",
      numAdults: "1",
      numSeniors: "0",
      classOfService: "ECONOMY",
      pageNumber: "1",
      currencyCode: "INR",
    },
    headers: {
      "X-RapidAPI-Key": "5398f67e2fmsh2d0f0eaff66286ap12c05fjsn3757d9407757",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  };

  const fetchFlight = async () => {
    try {
      const response = await axios.request(optionFlight);
      console.log(response);
      let minRateValue =
        response.data.data.flights[0].purchaseLinks[0].totalPrice;
      console.log(minRateValue);
      return minRateValue;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      const { data } = response.data;
      let minRateValue = data.reduce((minObj, currentObj) => {
        return currentObj.distance < minObj.distance ? currentObj : minObj;
      }, data[0]);
      return minRateValue;
    } catch (error) {
      console.error(error);
    }
  };

  const sendPrompt = async () => {
    let url = "http://192.168.32.214:5000/chat";
    let data = { data: prompt };
    let response = await axios.post(url, data);
    setData(response.data);
    console.log(response.data);
    if (response.data.id === 2) {
      navigate("/expense");
    } else if (response.data.id === 0) {
      if (response.data.flag === 0) {
        const minRateValue = await fetchData();
        setMinRate(minRateValue);
      }
      if (response.data.flag === 1) {
        const minRateValue = await fetchFlight();
        setMinRate(minRateValue);
      }
    }
    // setFinalData({
    //   descabPrice: response.data.descab.price,
    //   srccabPrice: response.data.srccab.price,
    //   flightPrice: minRate,
    // });
    setFinalData([
      {
        pic: "https://img.freepik.com/premium-photo/smartphone-near-yellow-taxi-taxi-visa-concept_661214-5065.jpg?size=626&ext=jpg&uid=R124558027&ga=GA1.1.1337867384.1699274947&semt=sph",
        name: "DES Cab Charges",
        price: response.data.descab.price,
      },
      {
        pic: "https://img.freepik.com/premium-photo/smartphone-near-yellow-taxi-taxi-visa-concept_661214-5065.jpg?size=626&ext=jpg&uid=R124558027&ga=GA1.1.1337867384.1699274947&semt=sph",
        name: "SRC Cab Charges",
        price: response.data.srccab.price,
      },
      {
        pic: "https://img.freepik.com/premium-photo/airplane-airport-sunset-travel-tourism-concept-realistic-ilustration_669798-3857.jpg?size=626&ext=jpg&uid=R124558027&ga=GA1.1.1337867384.1699274947&semt=sph",
        name: "Flight Charges",
        price: 7099,
      },

      {
        pic: "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?size=626&ext=jpg&uid=R124558027&ga=GA1.1.1337867384.1699274947&semt=sph",
        name: "Hotel Charges",
        price: response.data.hotel.price,
      },
    ]);
  };

  const showCard = () => {
    sendPrompt();
    setBlurred(true);
    setIsVisible1(false);
    setTimeout(() => {
      setIsVisible1(true);
    }, 1000);
  };

  const handleTick = () => {
    navigate("/checkout", { state: { finalData } });
  };

  const [typedText, setTypedText] = useState("");
  const textToType = "Welcome to FinEase";
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
    <div className="w-screen h-screen relative">
      <video
        autoPlay
        muted
        playsInline
        loop
        className={`w-full h-full object-center absolute top-0 left-0 -z-10 ${isBlurred ? "blur" : ""
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
      <div className="flex flex-col items-center h-full">
        {isVisible1 && (
          <div className="flex justify-center gap-4">
            {data.id === 0 ? (
              <>
                <CardLayout
                  mode={`CAB TO ${data.flight ? data.flight.from : data.train.from
                    }`}
                  price={data.srccab.price}
                  time={data.srccab.duration}
                />
                <div></div>
                <CardLayout
                  mode={
                    data?.flag === 1
                      ? `FLIGHT TO ${data.flight.to}`
                      : `TRAIN TO ${data.train.to}`
                  }
                  price={data?.flag === 1
                    ? 7099
                    : 2550}
                  time={data?.flag === 1
                    ? '3h 15m'
                    : '44h 25min'}
                />
                <CardLayout
                  mode={`CAB TO ${data.flight ? data.flight.to : data.train.to
                    }`}
                  price={data.descab.price}
                  time={data.descab.duration}
                />

                <CardLayout mode={`${data.hotel.name}`} />
              </>
            ) : (
              <CardLayout />
            )}
          </div>
        )}
        <div className="w-[80vw] rounded-md h-40 bg-gray-50 shadow-md p-4">
          <span className=" text-justify font-normal text-xl">
            {data?.response}
          </span>
        </div>
      </div>

      <div className=" px-10 pt-4 sticky z-10 mb-5 bottom-0 w-full">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button className="ml-4" onClick={handleTick}>
              <ImCheckboxChecked />
            </button>
            <button
              type="button"
              onClick={runSpeechRecognition}
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none ml-3"
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
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            value={prompt}
            type="text"
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-24 bg-gray-200 rounded-full py-3"
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
