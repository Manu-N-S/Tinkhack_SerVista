import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import flightbg from "./flightbg.jpg";
const Flights = () => {
  return (
    <div className="flex gap-6 my-5">
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
  );
};

export default Flights;
