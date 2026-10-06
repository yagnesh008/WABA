import Live from "../../../Components4/Technical/Matches/Live/Live";
import Header from "../../../Components4/Technical/Header/Header";
import Sidebar from "../../../Components4/Technical/Sidebar/Sidebar";

export default function livePage() {
  return (
    <>
      <Sidebar />
      <Header />
      <Live/> 
    </>
  );
}