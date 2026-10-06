import Athletes from "../../components1/Users/Athletes/Athlete";
import Header from "../../components1/Header/Header";
import Sidebar from "../../components1/Sidebar/sidebar";

function athletesPage() {
  return (
    <>
      <Sidebar />
      <Header />
      <Athletes/>
    </>
  );
}

export default athletesPage;