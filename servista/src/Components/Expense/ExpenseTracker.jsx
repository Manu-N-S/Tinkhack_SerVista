import { PieChart } from "react-minimal-pie-chart";
import Chart from "react-apexcharts";
import { useState } from "react";
import NavbarSimple from "./NavbarSimple";
import { BsThreeDots, BsCupHot } from "react-icons/bs";
import savingbg from "./savingbg.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import CreditCard from "./CreditCard";
const ExpenseTracker = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      stroke: {
        curve: "smooth", // Set the curve property to 'smooth' for a curved line
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70],
      },
    ],
  });
  const pieData = [
    { title: "One", value: 25, color: "#E38627" },
    { title: "Two", value: 25, color: "#C13C37" },
    { title: "Three", value: 25, color: "#6A2135" },
    { title: "Four", value: 25, color: "#009688" },
  ];
  return (
    <div className="w-screen">
      <NavbarSimple />
      <div className="grid grid-cols-3">
        <div className=" col-span-2 border-r">
          <div className="flex justify-between mt-4 mx-4">
            <h1 className="font-semibold text-2xl">Activity Summary</h1>
          </div>
          <Chart
            className="w-screen mt-6"
            options={state.options}
            series={state.series}
            type="line"
            width={800}
            height={320}
          />
          <div>
            <h1 className="font-semibold text-2xl">Expense Analytics</h1>
            <div className="flex justify-around mt-4">
              <PieChart
                lineWidth={40}
                animate
                className="w-56 h-56"
                data={pieData}
              />
              <div className="flex flex-col gap-3 mx-3">
                {pieData.map((value, index) => {
                  return (
                    <div key={index} className="flex gap-3 items-baseline">
                      <div
                        style={{ backgroundColor: value.color }}
                        className="h-3 w-3 rounded-full"
                      ></div>
                      <div className="flex flex-col">
                        <span className="font-bold">{value.title}</span>
                        <span>{value.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Card
                shadow={false}
                className="relative grid h-56 w-80  items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  style={{ backgroundImage: `url(${savingbg})` }}
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                  <Typography
                    variant="h5"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                  >
                    Hurray!
                  </Typography>
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                  >
                    You Saved $5500 <br />
                    this month!
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mx-6 my-2">
            <span className="font-semibold text-2xl">My Cards</span>
            <button>
              <BsThreeDots size={30} />
            </button>
          </div>
          <div>
            <CreditCard />
          </div>
          <div className="flex flex-col">
            <div className="flex my-4 items-center justify-between mx-5">
              <h1 className="text-2xl">Recent Transactions</h1>
              <button className=" text-sm">View all</button>
            </div>

            <div className="flex flex-col mx-5">
              <div className="flex items-center mb-3 justify-between">
                <div className="flex gap-3">
                  <IconButton className="bg-red-200">
                    <BsCupHot color="red" size={20} />
                  </IconButton>
                  <div className="flex flex-col">
                    <span className="font-bold">Starbucks</span>
                    <span className="text-xs">11:40 AM</span>
                  </div>
                </div>
                <span className="font-bold">(-) $850</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <IconButton className="bg-red-200">
                    <BsCupHot color="red" size={20} />
                  </IconButton>
                  <div className="flex flex-col">
                    <span className="font-bold">Starbucks</span>
                    <span className="text-xs">11:40 AM</span>
                  </div>
                </div>
                <span className="font-bold">(-) $850</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
