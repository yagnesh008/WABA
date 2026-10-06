import Header from "../../../components2/Club/Header/Header";
import Sidebar from "../../../components2/Club/Sidebar/Sidebar";
import Dashboard from "../../../components2/Club/Dashboard/Dashboard";

export default function dashboardPage() {
  return (
    <>
         <Sidebar/> 
            <Header/>
      <Dashboard />
    </>
  );
}