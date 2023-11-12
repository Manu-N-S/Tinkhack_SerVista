import { Card, CardHeader, CardBody, Avatar } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { FaShoppingCart } from 'react-icons/fa';

const CardLayout = ({ mode, price, time }) => {
  return (
    <div>
      <Card
        shadow={false}
        className="relative grid h-48 w-60 items-end m-4 justify-center overflow-hidden text-center "
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-white bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-1 flex flex-col items-center">
          <span className="text-black text-lg font-notosans ">{mode}</span>
          <span className="text-black text-lg font-notosans">{price}</span>
          <span className="text-black text-sl font-notosans" >{time}</span>


          <Avatar
            size="md"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white my-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiX1MM-dyiDdPHSJB7570Qz04aQSTzzeKVAQ&usqp=CAU"
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardLayout;