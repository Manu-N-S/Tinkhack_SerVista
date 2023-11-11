import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";

const Checkout = () => {

    return (
        <div className="flex justify-between items-center">
            <div className="w-[50vw] md:block hidden">
                <img
                    src="https://img.freepik.com/free-vector/isometric-self-service-cashier_23-2148563026.jpg?size=626&ext=jpg&ga=GA1.1.1062437827.1699599478&semt=ais"
                    className=" h-screen"
                    alt=""
                />
            </div>
            <div className="md:w-[50vw] w-full flex flex-col items-start mx-10">
                <div className=" text-start">
                    <h1 className=" text-2xl font-bold">My Orders</h1>
                    <span className="text-sm">
                        Securely complete your purchase with SerVista.
                    </span>
                </div>
                <div>
                    <Card className="w-[500px] h-[120px] grid grid-cols-2">
                        <CardHeader shadow={false} floated={false} className="h-[100px]">
                            <img
                                src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg?size=626&ext=jpg&ga=GA1.1.1062437827.1699599478&semt=ais"
                                alt="card-image"
                                className="h-[100px] w-[100px] object-cover rounded-3xl "
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    Name of the product
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    $95.00
                                </Typography>
                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                                Platform name
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-[500px] h-[120px] grid grid-cols-2">
                        <CardHeader shadow={false} floated={false} className="h-[100px]">
                            <img
                                src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg?size=626&ext=jpg&ga=GA1.1.1062437827.1699599478&semt=ais"
                                alt="card-image"
                                className="h-[100px] w-[100px] object-cover rounded-3xl "
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    Name of the product
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    $95.00
                                </Typography>
                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                                Platform name
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                <br /><br />
                <div>
                    <h1 className="text-2xl font-bold">Order Summary</h1><br />
                    <div className="flex text-start gap-[300px]">
                        
                        <div className="flex flex-col gap-2">

                            <p>Subtotal</p>
                            <p>Taxes</p>
                            <p>Extra Discount</p>
                            <p>Shipping</p>
                            <br />
                            <p>Total</p>
                        </div>
                        <div className="flex text flex-col gap-2">
                            <p>$500</p>
                            <p>$20</p>
                            <p>-$10</p>
                            <p>$5</p>
                            <br />
                            <p>$400</p>
                        </div>
                    </div>
                    <div>
                        <hr /><hr />
                    </div>
                    <button
                        type="submit"
                        className="p-3 my-6 bg-blue-600 w-full rounded-full px-4 text-white"
                    >
                        Make Payment
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Checkout;