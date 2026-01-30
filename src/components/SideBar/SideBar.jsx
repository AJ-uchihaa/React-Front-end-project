import { FaBars } from "react-icons/fa";
import "./SideBar.css";
import { useContext } from "react";
import { GlobalContext} from "../GlobalStore/GlobalStore";

function SideBar(){
const {history} = useContext(GlobalContext);

    return(
        <>
        <button className="btn" data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"> <FaBars size={20}/> 
        
        </button>
      <div className="offcanvas offcanvas-end bg-white" id="sidebar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" style={{ fontWeight: "bold", marginLeft: '30px'}}>History</h5>
            <button className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>    
            <div className="offcanvas-body">
             <ul>{history.map((item) => <li key={item.id}>{item.text}   {item.amount}</li>)}
             </ul>
            </div>
        </div>
        </>
    )

}
export default SideBar;