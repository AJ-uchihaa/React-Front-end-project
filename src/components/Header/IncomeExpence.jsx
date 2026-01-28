import "./income.css"
import { useReducer,useState } from "react";
import Nav from '../Nav/Nav'; 
import SideBar from "../SideBar/SideBar.jsx";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { GlobalContext } from "../GlobalStore/GlobalStore.jsx";
function Tracker(){
       
    const selector = useSelector((state) => state.theme.mode)
    

    const [income,setIncome] = useState(0)
    const [expence,setExpence] = useState(0)
    const [amount,setAmount] = useState("")
    const [val, setVal] = useState("");
    
    const {dispatch} = useContext(GlobalContext);
    
    return(
        
            <div className={selector === 'dark' ? 'dark' : 'light'}>
             <div className="container"> 
           <h1>INCOME EXPENSE TRACKER</h1>
           <p className="balance-text">Your Balance</p>
           <h2 className="balance">₹{income - expence}.00</h2>
           <div className="nav">
           <Nav />
           <SideBar />
           </div>
        <div className="boxes">
            <div className="box income-box">
                <p2>INCOME</p2>
                <h3>₹{income}.00</h3>
            </div>

        <div className="box expence-box">
                <p1>EXPENSE</p1>
                <h4>₹{expence}.00</h4>
            </div>
        </div>

        <div className="form">
             <label>Description</label>
             <input type="text" placeholder="AddDescription" value={val} onChange={(e) => setVal(e.target.value)}/>

             <label>Amount</label>
             <input type="number" placeholder="AddAmount"   value={amount} onChange={(e) => setAmount(e.target.value)}/>

             <div className="buttons">
                <button disabled={!val || amount ==""} className="income-btn" onClick={() => { if (amount <= 0) return;
            setIncome(preve => preve + Number(amount)); setAmount(""); setVal(""); dispatch({type: 'HIS', payload:{
                val,amount: Number(amount)}})
                }}>Income</button>
                <button disabled={!val || amount ==""} className="expence-btn" onClick={() => { if (amount <= 0)
                return; setExpence(prev => prev + Number(amount)); setAmount(""); setVal("")}}>Expence</button>
             </div>
             
        </div>
        <p className="footer">Made By AJ</p>
        </div>
        </div>
    )
}
export default Tracker;