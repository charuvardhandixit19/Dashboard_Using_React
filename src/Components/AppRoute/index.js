import { Route,Routes} from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Customers from "../../Pages/Customers";
import Inventry from "../../Pages/Inventry";
import  Orders from "../../Pages/Orders";

function AppRoute(){
    return (
<Routes>
    <Route path="/" element={<Dashboard/>}></Route>
    <Route path="/inventry" element={<Inventry />}></Route>
    <Route path="/orders" element={<Orders/>}></Route>
    <Route path="/customers" element={<Customers/>}></Route>
</Routes>
    );
}
export default AppRoute;