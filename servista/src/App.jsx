import './App.css'
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from './Components/HomePage';
import ExpenseTracker from './Components/Expense/ExpenseTracker';
import Checkout from "./Components/Checkout"
function App() {
  return (
    <div className='App w-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/expense" element={<ExpenseTracker />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
