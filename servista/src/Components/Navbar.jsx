import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const handleexpensetracker = () =>{
    navigate('/expense')
  }
  return (
    <nav className="flex justify-around items-center py-3 text-black">
      <div>
        <h1 className="text-[30px]">FinEase</h1>
      </div>
      <div className="flex gap-3 items-center">
        <ul className="flex gap-10 text-[18px]">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <img src="https://img.lovepik.com/free-png/20210918/lovepik-vectorial-business-finance-icon-png-image_400272671_wh1200.png" className="bg-black w-10 h-10 ml-10 rounded-full" alt="" />
        <div className="flex w-max gap-4">
          <Button onClick={handleexpensetracker} color="blue" className="ml-10">Expense Tracker</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;