import Pending from "../../../Components4/Technical/Results/Pending/Pending";
import Header from "../../../Components4/Technical/Header/Header";
import Sidebar from "../../../Components4/Technical/Sidebar/Sidebar";

export default function pendingPage() {
  return (
    <>
      <Sidebar />
      <Header />
      <Pending/>
    </>
  );
}