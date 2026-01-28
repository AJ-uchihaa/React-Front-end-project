import { useSelector,useDispatch } from 'react-redux';
import { toggleTheme } from '../../Features/Themes/themeSlice'
import "./Nav.css";
import { FaRegLightbulb } from 'react-icons/fa';

function Nav(){
const selector = useSelector((state) => state.theme.mode)
const dispatch = useDispatch();
return(
    <div>
        <button className='btn' onClick={()=> dispatch(toggleTheme())}> 
            <FaRegLightbulb size={22}/>
        </button>
    </div>
)
}
export default Nav;