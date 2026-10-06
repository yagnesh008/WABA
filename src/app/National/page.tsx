import Dashboard from "../../components1/DashBoard/Dashboard";
import Header from "../../components1/Header/Header";
import Sidebar from "../../components1/Sidebar/sidebar";
import UsersPage from "../UserPage/page"

function National(){
    return(
        <>
            <Sidebar/>
            <Header/>
            <Dashboard/>
            <UsersPage/>
        </>

    )
}
export default National;