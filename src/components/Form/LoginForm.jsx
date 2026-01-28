import { z } from "zod";
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./LoginForm.css";
import { Navigate, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Front({setAllow}){
    const navigate = useNavigate()
    const schema = z.object({
        name: z.string().min(1,'Please Enter Your Name'),
        dob : z.string().min(1,'plesae enter your DOB'),
        email : z.string().min(1,"invalid Email"),
        password : z.string().min(6,'Please Enter Password'),
    })     
    const { register, handleSubmit, formState : {errors },} = useForm({ resolver:zodResolver(schema),
    })
    function d(data){
        console.log(data)
        setAllow(true);
        navigate("/Tracker")
    }
    return(
        <div className="con">
             <div className="icon">
                <FaUserCircle size={60}/>
             </div>
             <form onSubmit={handleSubmit(d)}>
                <h1>LOGIN FORM</h1>
              <label>Enter Your Name:</label>
              <input type='text' {...register('name')} placeholder="enter your name" />
              {errors.name && <p style={{ color:'red', margin: '-5px'}}>{errors.name.message}</p>}
              <label>Enter Your DOB:</label>
              <input type='date' {...register('dob')} placeholder="Enter Your DOB" />
              {errors.dob && <p style={{ margin:'-5px'}}>{errors.dob.message}</p>}
              <label>Enter Your Email:</label>
              <input type="email" {...register('email')} placeholder="Enter Your Email Addres" />
              {errors.email && <p style={{margin:'-5px'}}>{errors.email.message}</p>}
              <label>Enter password:</label>
              <input type="password" {...register('password')} placeholder="Enter Password" />
              {errors.password && <p style={{margin:'-5px'}}>{errors.password.message}</p>}
              <button type="submit">submit</button>
             </form>
        </div>
    );
}
export default Front;