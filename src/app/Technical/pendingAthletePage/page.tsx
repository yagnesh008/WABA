import PendingAthletes from "../../../Components4/Technical/Classification/PendingAthletes/PendingAthletes";
import Header from "../../../Components4/Technical/Header/Header";
import Sidebar from "../../../Components4/Technical/Sidebar/Sidebar";

export default function pendingAthletePage() {
  return (
    <>
      <Sidebar />
      <Header />
      <PendingAthletes />
    </>
  );
}