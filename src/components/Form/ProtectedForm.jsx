import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouter({allow}){
return allow  ? <Outlet /> : <Navigate to="/Tracker" replace />
}
export default ProtectedRouter;