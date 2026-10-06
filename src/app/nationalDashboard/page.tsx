import NationalDashboard from "@/src/components1/Dashboards/NationalDashboard/NationalDashboard";
import Header from "@/src/components1/Header/Header";
import Sidebar from "@/src/components1/Sidebar/sidebar";

export default function NationalDashboardPage() {
  return (
    <>
      <Sidebar role="national" />
      <Header />
      <NationalDashboard />
    </>
  );
}
