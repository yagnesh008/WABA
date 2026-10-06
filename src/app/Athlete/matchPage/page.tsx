import Matches from "../../../Components3/Athlete/Match/Match/Matches";
import Header from "../../../Components3/Athlete/Header/Header";
import Sidebar from "../../../Components3/Athlete/Sidebar/Sidebar";

export default function matchPage() {
  return (
    <>
      <Sidebar />
      <Header />
      <Matches/>
    </>
  );
}