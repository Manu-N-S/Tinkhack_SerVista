import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
const Trains = () => {
  return (
    <div className="flex gap-6 my-5">
      <Card
        shadow={false}
        className="relative grid h-20 w-40 items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute z-50 inset-0 m-0 h-full w-full rounded-none"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h6"
            color="black"
            className="mb-6 font-medium leading-[1.5]"
          >
            RAJDHANI EXP
          </Typography>
          <span>TVC-NZM</span>
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-20 w-40 items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute z-50 inset-0 m-0 h-full w-full rounded-none"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-1 md:px-3">
          <Typography
            variant="h6"
            color="black"
            className="mb-6 font-medium leading-[1.5] text-justify"
          >
            KERALA SF EXPRESS
          </Typography>
          <span>TVC-NDLS</span>
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-20 w-40 items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute z-50 inset-0 m-0 h-full w-full rounded-none"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-1 md:px-3">
          <Typography
            variant="h6"
            color="black"
            className="mb-6 font-medium leading-[1.5] text-justify"
          >
           TVC-NZM SF EXP
          </Typography>
          <span>TVC-NZM</span>
        </CardBody>
      </Card>
    </div>
  );
};

export default Trains;
