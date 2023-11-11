import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import trainbg from "./trainbg.jpg";
import flightbg from "./flightbg.jpg";
const Travel = () => {
  return (
    <div className="flex gap-6 justify-around">
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
  );
};

export default Travel;
