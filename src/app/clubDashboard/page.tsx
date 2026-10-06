import ClubDashboard from "@/src/components1/Dashboards/ClubDashboard/ClubDashboard";
import Header from "@/src/components1/Header/Header";
import Sidebar from "@/src/components1/Sidebar/sidebar";

export default function ClubDashboardPage() {
  return (
    <>
      <Sidebar role="club" />
      <Header />
      <ClubDashboard />
    </>
  );
}
