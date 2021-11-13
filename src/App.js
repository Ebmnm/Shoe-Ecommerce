import './styles/App.css';
import Hero from "./components/Hero.js"
import Navbar from "./components/Navbar.js" 
import {useState} from "react"
function App() {
  const [amount, setAmount] = useState(0)
  const [cartAmount, setCartAmount] = useState(0)
  return (
   <div>
  <Navbar cartAmount={cartAmount} setCartAmount={setCartAmount} amount={amount} setAmount={setAmount} />
  <Hero setCartAmount={setCartAmount} amount={amount} setAmount={setAmount} />
   </div>
  );
}

export default App;
