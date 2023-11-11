import { Card, CardHeader, CardBody, Avatar } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { FaShoppingCart } from 'react-icons/fa';

const CardLayout = ({ mode, price, time }) => {
  return (
    <div>
      <Card
        shadow={false}
        className="relative grid h-96 w-60 items-end m-4 justify-center overflow-hidden text-center "
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-white bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-10 flex flex-col">
          <span className="text-black text-2xl font-notosans ">{mode}</span><br />
          <span className="text-black text-2xl font-notosans">{price}</span><br />
          <span className="text-black text-xl font-notosans" >{time}</span>
          <Button className="flex items-center mt-4 rounded-full text-black bg-[#ccc] px-4 hover:scale-105 transition-all duration-200 ease-in-out">
            <FaShoppingCart size={20} className="pr-1"/>
            Add to Cart
          </Button>

          <Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white m-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiX1MM-dyiDdPHSJB7570Qz04aQSTzzeKVAQ&usqp=CAU"
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardLayout;